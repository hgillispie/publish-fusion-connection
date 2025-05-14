import "@/styles/index.css";
import "@/lib/builder-registry";
import Head from "next/head";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  // Only run on client side
  useEffect(() => {
    // This runs after hydration and helps fix any remaining issues
    const script = document.createElement("script");
    script.src = "/builder-hydration-fix.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        {/* Force the client to not care about hydration mismatches */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.builderNoSsr = true;
              window.builderLazyLoadImages = false;
            `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
