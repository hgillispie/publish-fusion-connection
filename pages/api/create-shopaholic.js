import { builder } from "@builder.io/react";
import { BUILDER_CONFIG } from "@/lib/constants";

export default async function handler(req, res) {
  // Initialize Builder with your API key
  builder.init(BUILDER_CONFIG.apiKey);

  try {
    // Create a new page entry in Builder.io
    const page = await builder.createContent(BUILDER_CONFIG.contentModel, {
      data: {
        title: "Shopaholic E-commerce Homepage",
        url: "/shopaholic", // The URL path you want this page to be accessible at
        blocks: [
          {
            "@type": "@builder.io/sdk:Element",
            "@version": 2,
            component: {
              name: "ShopaholicHomepage",
              options: {},
            },
          },
        ],
      },
      published: "published", // Publish the page immediately
    });

    res.status(200).json({
      success: true,
      message: "Shopaholic page created successfully",
      pageId: page.id,
    });
  } catch (error) {
    console.error("Error creating Shopaholic page:", error);
    res.status(500).json({
      success: false,
      message: "Error creating Shopaholic page",
      error: error.message,
    });
  }
}
