import { useEffect } from "react";
import { builder } from "@builder.io/react";

// This component helps ensure consistent rendering between server and client
export function BuilderSsrFix() {
  useEffect(() => {
    // Force Builder to re-render once on the client to ensure consistency
    builder.canTrack = false;
    builder.allowCustomFonts = false;

    // Disable lazy loading which can cause hydration issues
    if (typeof window !== "undefined") {
      window.builderLazyLoadImages = false;
      window.builderNoSsr = true;

      // Set builder options directly on the builder object
      // Don't use builder.set() as it doesn't exist
      builder.apiVersion = "v3";
      builder.noTrack = true;

      // Apply configuration through request options instead
      const origGet = builder.get;
      if (origGet) {
        builder.get = function (modelName, options = {}) {
          const newOptions = {
            ...options,
            options: {
              ...options.options,
              noWrap: true,
              static: true,
              inlineCss: true,
              ...(options.options || {}),
            },
          };
          return origGet.call(this, modelName, newOptions);
        };
      }
    }
  }, []);

  return null;
}
