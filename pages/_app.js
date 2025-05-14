import "@/styles/index.css";
import "@/lib/builder-registry";
import { useEffect } from "react";
import { initClientBuilder } from "@/lib/client-builder";

function MyApp({ Component, pageProps }) {
  // Initialize Builder.io on the client side only
  useEffect(() => {
    initClientBuilder();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
