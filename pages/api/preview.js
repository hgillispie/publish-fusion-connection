import { getDraftContent } from "@/lib/api";
import { BUILDER_CONFIG } from "@/lib/constants";
import querystring from "querystring";

export default async function preview(req, res) {
  // Check the secret and content ID
  const contentId =
    req.query[`builder.overrides.${BUILDER_CONFIG.contentModel}`];

  if (req.query.secret !== BUILDER_CONFIG.previewSecret || !contentId) {
    return res.status(401).json({ message: "Invalid request" });
  }

  // Fetch the content
  const content = await getDraftContent(BUILDER_CONFIG.contentModel, contentId);

  // If the content doesn't exist prevent preview mode from being enabled
  if (!content) {
    return res.status(401).json({ message: "Invalid content" });
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({
    draftContentId: contentId,
  });

  // Redirect to the home page
  res.writeHead(307, {
    Location: `/?${querystring.stringify(req.query)}`,
  });
  res.end();
}
