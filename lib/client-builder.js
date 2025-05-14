import { builder } from "@builder.io/react";
import { BUILDER_CONFIG } from "./constants";

// This function will only run on the client side
export function initClientBuilder() {
  // Initialize builder for client-side rendering
  builder.init(BUILDER_CONFIG.apiKey);

  // These settings help prevent hydration mismatches
  builder.canTrack = false;
  builder.allowCustomFonts = true;

  // Disable lazy loading of images to prevent hydration mismatches
  if (typeof window !== "undefined") {
    window.builderLazyLoadImages = false;
  }
}
