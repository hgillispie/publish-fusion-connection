import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Add a script to ensure builder hydration consistency */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Prevent Builder.io from rendering differently on client vs server
              window.builderNoSsr = true;
              window.builderLazyLoadImages = false;
              
              // Fix for builder-inline-styles attribute
              document.addEventListener('DOMContentLoaded', function() {
                // Find all elements with builder-inline-styles attributes and remove them
                setTimeout(function() {
                  document.querySelectorAll('[builder-inline-styles]').forEach(function(el) {
                    el.removeAttribute('builder-inline-styles');
                  });
                }, 0);
              });
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
