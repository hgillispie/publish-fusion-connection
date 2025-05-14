import { Builder, builder } from "@builder.io/react";
import { BUILDER_CONFIG } from "./constants";

builder.init(BUILDER_CONFIG.apiKey);
Builder.isStatic = true;

export function getAllProducts() {
  return builder.getAll(BUILDER_CONFIG.productsModel, {
    options: { noTargeting: true },
    apiKey: BUILDER_CONFIG.apiKey,
  });
}

export function getDraftProduct(id) {
  return fetch(
    `https://builder.io/api/v2/content/${BUILDER_CONFIG.productsModel}/${id}?apiKey=${BUILDER_CONFIG.apiKey}&preview=true&noCache=true&cachebust=tru&includeRefs=true`,
  )
    .then((res) => res.json())
    .then((res) => res || null);
}

export async function searchProducts(query, preview, limit = 20, offset = 0) {
  let products = await builder.getAll(BUILDER_CONFIG.productsModel, {
    limit,
    offset,
    includeRefs: true,
    preview: BUILDER_CONFIG.productsModel,
    staleCacheSeconds: preview ? 1 : 200,
    apiKey: BUILDER_CONFIG.apiKey,
    ...(preview && { includeUnpublished: true }),
    options: {
      noTargeting: true,
    },
    query,
  });

  if (preview) {
    products = await Promise.all(
      products.map((product) => getDraftProduct(product.id)),
    );
  }

  return products;
}

export function getFeaturedProducts(preview) {
  return searchProducts({ "data.featured": { $eq: true } }, preview);
}

export async function getProduct(mongoQuery, preview) {
  let product = preview
    ? (await searchProducts(mongoQuery, true))?.[0]
    : await builder
        .get(BUILDER_CONFIG.productsModel, {
          includeRefs: true,
          staleCacheSeconds: 20,
          apiKey: BUILDER_CONFIG.apiKey,
          preview: BUILDER_CONFIG.productsModel,
          options: {
            noTargeting: true,
          },
          query: mongoQuery,
        })
        .toPromise();

  return product || null;
}

export async function getProductBySlug(slug, preview, previewData) {
  const product =
    preview && previewData
      ? await getDraftProduct(previewData.productDraftId)
      : await getProduct(
          {
            "data.slug": { $eq: slug },
          },
          preview,
        );

  return product;
}

// Get a page by URL path
export async function getPage(urlPath, preview, previewData) {
  const path = urlPath === "/" ? "/home" : urlPath;

  // If in preview mode and we have a draft page ID, fetch that specific page
  if (preview && previewData?.pageDraftId) {
    return getDraftPage(previewData.pageDraftId);
  }

  // Otherwise get the page by path
  const page = await builder
    .get(BUILDER_CONFIG.pageModel, {
      apiKey: BUILDER_CONFIG.apiKey,
      userAttributes: {
        urlPath: path,
      },
      options: {
        includeRefs: true,
      },
      staleCacheSeconds: preview ? 1 : 60,
      ...(preview && { includeUnpublished: true }),
    })
    .toPromise();

  return page || null;
}

// Get a draft page by ID
export function getDraftPage(id) {
  return fetch(
    `https://builder.io/api/v2/content/${BUILDER_CONFIG.pageModel}/${id}?apiKey=${BUILDER_CONFIG.apiKey}&preview=true&noCache=true&cachebust=true&includeRefs=true`,
  )
    .then((res) => res.json())
    .then((res) => res || null);
}
