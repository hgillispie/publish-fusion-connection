import "@/styles/index.css";
import "@/styles/dark-mode.css";
import "@/lib/builder-registry";
import Head from "next/head";
import { useEffect } from "react";
import { ThemeProvider } from "@/lib/theme-context";

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
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}

export default MyApp;
