import { builder, Builder } from "@builder.io/react";
import { BUILDER_CONFIG } from "@/lib/constants";
import "../styles/index.css";

// Import Builder.io component registry
import "../builder-components";

// Initialize Builder with API key
builder.init(BUILDER_CONFIG.apiKey);

// Register the location for editing the page content
builder.allowTargetingOnContentPage = true;

// Set the location where Builder.io can find the custom components
Builder.set({ customInsertMenuAction: false });

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
