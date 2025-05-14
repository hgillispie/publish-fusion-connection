import { Builder } from "@builder.io/react";

/**
 * Configure Builder.io for server-side rendering compatibility
 */
export function configureBuilderForSsr() {
  if (typeof Builder !== "undefined") {
    // Disable features that can cause hydration mismatches
    Builder.isStatic = true;
    Builder.isPreviewing = false;

    // Override render functions that might cause hydration issues
    const originalComponentToHtml = Builder.componentToHtml;

    if (originalComponentToHtml) {
      Builder.componentToHtml = (...args) => {
        // Force consistent rendering between server and client
        const options = args[1] || {};
        const newOptions = {
          ...options,
          noWrap: true,
          static: true,
          // Disable any dynamic attributes that cause hydration mismatches
          disableBuilderInlineStyles: true,
        };

        return originalComponentToHtml(args[0], newOptions);
      };
    }
  }
}

/**
 * Clean builder props that might cause hydration mismatches
 * @param {Object} props - Component props
 * @returns {Object} - Cleaned props
 */
export function cleanBuilderProps(props) {
  if (!props) return {};

  const {
    "builder-id": _id,
    "builder-inline-styles": _styles,
    builderAttributes: _attrs,
    builderCss: _css,
    ...cleanProps
  } = props;

  return cleanProps;
}
