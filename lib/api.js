import { Builder, builder } from "@builder.io/react";
import { BUILDER_CONFIG } from "./constants";

builder.init(BUILDER_CONFIG.apiKey);
Builder.isStatic = true;

// Export any general purpose API functions here if needed
