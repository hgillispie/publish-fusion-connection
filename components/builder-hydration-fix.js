import React, { useEffect, useRef } from "react";
import { BuilderComponent } from "@builder.io/react";

/**
 * This component wraps BuilderComponent and fixes hydration mismatches
 * by directly manipulating the DOM after mounting
 */
export default function BuilderHydrationFix({
  model,
  content,
  options,
  ...props
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      // Find all elements with builder-inline-styles attributes and fix them
      const elementsWithBuilderStyles = containerRef.current.querySelectorAll(
        "[builder-inline-styles]",
      );

      elementsWithBuilderStyles.forEach((element) => {
        // Remove the problematic builder-inline-styles attribute causing hydration mismatches
        element.removeAttribute("builder-inline-styles");
      });

      // Also find and fix other potential hydration issues
      const allBuilderElements =
        containerRef.current.querySelectorAll("[builder-id]");

      allBuilderElements.forEach((element) => {
        // Apply any needed fixes to builder elements
        if (
          element.hasAttribute("builder-no-ssr") &&
          element.getAttribute("builder-no-ssr") === "true"
        ) {
          element.style.display = "none";
          element.style.display =
            element.getAttribute("data-original-display") || "block";
        }
      });
    }
  }, [content]); // Re-run when content changes

  return (
    <div ref={containerRef}>
      <BuilderComponent
        model={model}
        content={content}
        options={{
          ...options,
          // Force these settings to improve hydration consistency
          noTrack: true,
          noTargeting: true,
          staticContent: true,
        }}
        {...props}
      />
    </div>
  );
}
