import { getDraftProduct, getDraftPage } from "@/lib/api";
import { BUILDER_CONFIG } from "@/lib/constants";
import querystring from "querystring";

export default async function preview(req, res) {
  // Check for valid secret
  if (req.query.secret !== BUILDER_CONFIG.previewSecret) {
    return res.status(401).json({ message: "Invalid preview secret" });
  }

  // Product preview
  const productId =
    req.query[`builder.overrides.${BUILDER_CONFIG.productsModel}`];

  // Page preview
  const pageId = req.query[`builder.overrides.${BUILDER_CONFIG.pageModel}`];

  // Handle product previews
  if (productId) {
    // Check if the product with the given ID exists
    const product = await getDraftProduct(productId);

    // If the product doesn't exist prevent preview mode from being enabled
    if (!product) {
      return res.status(401).json({ message: "Invalid product" });
    }

    // Enable Preview Mode by setting the cookies
    res.setPreviewData({
      productDraftId: productId,
    });

    // Redirect to the path from the fetched product
    res.writeHead(307, {
      Location: `/products/${product.data.slug}?${querystring.stringify(req.query)}`,
    });
    res.end();
    return;
  }

  // Handle page previews
  if (pageId) {
    // Check if the page with the given ID exists
    const page = await getDraftPage(pageId);

    // If the page doesn't exist prevent preview mode from being enabled
    if (!page) {
      return res.status(401).json({ message: "Invalid page" });
    }

    // Enable Preview Mode by setting the cookies
    res.setPreviewData({
      pageDraftId: pageId,
    });

    // For index page, redirect to root
    const urlPath = page.data?.url || "/";

    // Redirect to the path from the fetched page
    res.writeHead(307, {
      Location: `${urlPath}?${querystring.stringify(req.query)}`,
    });
    res.end();
    return;
  }

  // No valid ID provided
  return res.status(401).json({ message: "No valid preview ID provided" });
}
