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
