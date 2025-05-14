import { getDraftProduct } from "@/lib/api";
import { BUILDER_CONFIG } from "@/lib/constants";
import querystring from "querystring";

export default async function preview(req, res) {
  const productId =
    req.query[`builder.overrides.${BUILDER_CONFIG.productsModel}`];
  if (req.query.secret !== BUILDER_CONFIG.previewSecret || !productId) {
    return res.status(401).json({ message: "Invalid request" });
  }

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
}
