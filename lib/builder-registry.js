import { Builder } from "@builder.io/react";
import Container from "@/components/container";
import Alert from "@/components/alert";
import Layout from "@/components/layout";
import Footer from "@/components/footer";
import Meta from "@/components/meta";
import BuilderImage from "@/components/builder-image";
import Header from "@/components/header";
import SectionSeparator from "@/components/section-separator";

// Register components to be used in the Builder.io visual editor
Builder.registerComponent(Container, {
  name: "Container",
  inputs: [
    {
      name: "children",
      type: "uiBlocks",
      defaultValue: [],
    },
  ],
});

Builder.registerComponent(Alert, {
  name: "Alert",
  inputs: [
    {
      name: "preview",
      type: "boolean",
      defaultValue: false,
    },
  ],
});

Builder.registerComponent(Header, {
  name: "Header",
});

Builder.registerComponent(Footer, {
  name: "Footer",
});

Builder.registerComponent(SectionSeparator, {
  name: "SectionSeparator",
});

Builder.registerComponent(Meta, {
  name: "Meta",
});

Builder.registerComponent(BuilderImage, {
  name: "BuilderImage",
  inputs: [
    {
      name: "src",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
      required: true,
    },
    {
      name: "alt",
      type: "string",
      defaultValue: "",
    },
    {
      name: "width",
      type: "number",
      defaultValue: 500,
    },
    {
      name: "height",
      type: "number",
      defaultValue: 500,
    },
    {
      name: "className",
      type: "string",
    },
  ],
});
