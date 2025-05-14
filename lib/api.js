import { Builder, builder } from "@builder.io/react";
import { BUILDER_CONFIG } from "./constants";
import { configureBuilderForSsr } from "./builder-utils";

// Initialize Builder with strict settings for SSR/hydration compatibility
builder.init(BUILDER_CONFIG.apiKey);

// Set static rendering to true for all environments
Builder.isStatic = true;

// Configure Builder for SSR compatibility
builder.canTrack = false;
builder.allowCustomFonts = false;

// Apply additional SSR configurations
configureBuilderForSsr();

// Force consistent rendering
if (typeof window === "undefined") {
  // Server-specific settings
  builder.set({ disableModifications: true });
} else {
  // Client-specific settings
  builder.set({ inlineCss: true, disableModifications: false });
}

export function getContent(modelName, preview) {
  return builder
    .get(modelName, {
      includeRefs: true,
      staleCacheSeconds: preview ? 1 : 200,
      apiKey: BUILDER_CONFIG.apiKey,
      preview: preview,
      options: {
        noTargeting: true,
      },
    })
    .toPromise();
}

export function getAllContent(modelName, options = {}) {
  return builder.getAll(modelName, {
    options: { noTargeting: true, ...options },
    apiKey: BUILDER_CONFIG.apiKey,
    includeRefs: true,
  });
}

export function getDraftContent(modelName, id) {
  return fetch(
    `https://builder.io/api/v2/content/${modelName}/${id}?apiKey=${BUILDER_CONFIG.apiKey}&preview=true&noCache=true&cachebust=true&includeRefs=true`,
  )
    .then((res) => res.json())
    .then((res) => res || null);
}
