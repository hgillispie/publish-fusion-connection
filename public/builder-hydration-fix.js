(function () {
  // Fix for builder-inline-styles attribute which causes hydration mismatches
  function fixBuilderHydrationIssues() {
    // Find and fix builder-inline-styles attributes
    document.querySelectorAll("[builder-inline-styles]").forEach(function (el) {
      el.removeAttribute("builder-inline-styles");
    });

    // Fix any other potential issues
    document.querySelectorAll("[builder-id]").forEach(function (el) {
      // Handle any builder-specific attributes that might cause issues
      if (
        el.hasAttribute("builder-no-ssr") &&
        el.getAttribute("builder-no-ssr") === "true"
      ) {
        el.style.display = "none";
        el.style.display = el.getAttribute("data-original-display") || "block";
      }
    });
  }

  // Run immediately
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fixBuilderHydrationIssues);
  } else {
    fixBuilderHydrationIssues();
  }

  // Also run after a short delay to catch dynamically rendered content
  setTimeout(fixBuilderHydrationIssues, 50);
})();
