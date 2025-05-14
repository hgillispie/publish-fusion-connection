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
    }

    // Prevent other dynamic attributes that might cause hydration issues
    builder.set({ inlineCss: true });
  }, []);

  return null;
}
