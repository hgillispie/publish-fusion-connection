import { builder } from "@builder.io/react";
import { BUILDER_CONFIG } from "@/lib/constants";
import "../styles/index.css";

// Import Builder.io component registry
import "../builder-components";

// Initialize Builder with API key
builder.init(BUILDER_CONFIG.apiKey);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
