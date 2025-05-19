import { Builder } from "@builder.io/react";
import Container from "@/components/container";
import Alert from "@/components/alert";
import Layout from "@/components/layout";
import Footer from "@/components/footer";
import Meta from "@/components/meta";
import BuilderImage from "@/components/builder-image";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import ShopaholicNavbar from "@/components/shopaholic-navbar";
import SectionSeparator from "@/components/section-separator";
import LayoutWithNavbar from "@/components/layout-with-navbar";
import ShopaholicHomepage from "@/components/shopaholic/shopaholic-homepage";
import ShopaholicHeader from "@/components/shopaholic/shopaholic-header";
import ProductCard from "@/components/shopaholic/product-card";
import IconCard from "@/components/shopaholic/icon-card";
import HeroSection from "@/components/shopaholic/hero-section";
import SustainabilitySection from "@/components/shopaholic/sustainability-section";
import BenefitsSection from "@/components/shopaholic/benefits-section";
import ProductsSection from "@/components/shopaholic/products-section";

// Register components to be used in the Builder.io visual editor
// Builder.registerComponent(Container, {
//   name: "Container",
//   inputs: [
//     {
//       name: "children",
//       type: "uiBlocks",
//       defaultValue: [],
//     },
//   ],
// });

// Builder.registerComponent(Alert, {
//   name: "Alert",
//   inputs: [
//     {
//       name: "preview",
//       type: "boolean",
//       defaultValue: false,
//     },
//   ],
// });

// Builder.registerComponent(Header, {
//   name: "Header",
// });

Builder.registerComponent(Navbar, {
  name: "Navbar",
});

Builder.registerComponent(ShopaholicNavbar, {
  name: "ShopaholicNavbar",
});

Builder.registerComponent(LayoutWithNavbar, {
  name: "LayoutWithNavbar",
  inputs: [
    {
      name: "preview",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "children",
      type: "uiBlocks",
      defaultValue: [],
    },
  ],
});

// Builder.registerComponent(Footer, {
//   name: "Footer",
// });

// Builder.registerComponent(SectionSeparator, {
//   name: "SectionSeparator",
// });

// Builder.registerComponent(Meta, {
//   name: "Meta",
// });

// Register Shopaholic components
Builder.registerComponent(ShopaholicHomepage, {
  name: "ShopaholicHomepage",
});

Builder.registerComponent(ShopaholicHeader, {
  name: "ShopaholicHeader",
});

Builder.registerComponent(ProductCard, {
  name: "ProductCard",
  inputs: [
    {
      name: "image",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
      required: true,
    },
    {
      name: "title",
      type: "string",
      defaultValue: "Product Title",
    },
    {
      name: "price",
      type: "string",
      defaultValue: "99",
    },
    {
      name: "color",
      type: "string",
      defaultValue: "Black",
    },
  ],
});

Builder.registerComponent(IconCard, {
  name: "IconCard",
  inputs: [
    {
      name: "icon",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
      required: true,
    },
    {
      name: "title",
      type: "string",
      defaultValue: "Feature Title",
    },
    {
      name: "description",
      type: "string",
      defaultValue: "Feature description goes here",
    },
  ],
});

// Builder.registerComponent(BuilderImage, {
//   name: "BuilderImage",
//   inputs: [
//     {
//       name: "src",
//       type: "file",
//       allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
//       required: true,
//     },
//     {
//       name: "alt",
//       type: "string",
//       defaultValue: "",
//     },
//     {
//       name: "width",
//       type: "number",
//       defaultValue: 500,
//     },
//     {
//       name: "height",
//       type: "number",
//       defaultValue: 500,
//     },
//     {
//       name: "className",
//       type: "string",
//     },
//   ],
// });
