import { Builder, builder } from "@builder.io/react";
import { BUILDER_CONFIG } from "./constants";

builder.init(BUILDER_CONFIG.apiKey);
Builder.isStatic = true;

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
