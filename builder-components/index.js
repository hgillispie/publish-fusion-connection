import { Builder } from "@builder.io/react";

import HeroWithOverlay from "./hero-with-overlay";
import ProductCard from "./product-card";
import ProductsRow from "./products-row";
import SplitContent from "./split-content";
import FeatureIconCard from "./feature-icon-card";
import FeatureSection from "./feature-section";
import ShopSection from "./shop-section";
import Navbar from "../components/navbar";

// Generate screenshot URLs for components
const componentScreenshots = {
  heroWithOverlay:
    "https://cdn.builder.io/api/v1/image/assets/24272629d2bd4d1a8956cce15af1b3dc/f5f486a35a80c0e8aea6037c50a5571ee46cf816",
  productCard:
    "https://cdn.builder.io/api/v1/image/assets/24272629d2bd4d1a8956cce15af1b3dc/6fbe3eec1b440f317788d099eda9885923a7fbc6",
  productsRow:
    "https://cdn.builder.io/api/v1/image/assets/24272629d2bd4d1a8956cce15af1b3dc/9fa19dc6c196122771befb5d5a0bcb79569a45f2",
  splitContent:
    "https://cdn.builder.io/api/v1/image/assets/24272629d2bd4d1a8956cce15af1b3dc/d954ad608a20840cd3a81f29461c95c988371492",
  featureIcon:
    "https://cdn.builder.io/api/v1/image/assets/24272629d2bd4d1a8956cce15af1b3dc/98cebbbd5a1dd7705e5a1fab4261f22b1208fadf",
  featureSection:
    "https://cdn.builder.io/api/v1/image/assets/24272629d2bd4d1a8956cce15af1b3dc/874a7ccef8a5951e026ff954e4c1b50850f22853",
  shopSection:
    "https://cdn.builder.io/api/v1/image/assets/24272629d2bd4d1a8956cce15af1b3dc/000e6998788e0d6a03d576303978f317a3db9a18",
  navbar:
    "https://cdn.builder.io/api/v1/image/assets/24272629d2bd4d1a8956cce15af1b3dc/80f0b01486406cdbeeb2d130c77c6e1d2fb3fb2e",
};

// Register components for Builder.io
Builder.registerComponent(HeroWithOverlay, {
  name: "Hero With Overlay",
  description: "Hero image with text overlay and CTA button",
  image: componentScreenshots.heroWithOverlay,
  inputs: [
    {
      name: "backgroundImage",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "webp"],
      defaultValue: componentScreenshots.heroWithOverlay,
      required: true,
    },
    {
      name: "title",
      type: "string",
      defaultValue: "ESSENTIAL ACCESSORIES",
      required: true,
    },
    {
      name: "buttonText",
      type: "string",
      defaultValue: "Shop Now",
    },
    {
      name: "buttonLink",
      type: "string",
      defaultValue: "/products",
    },
  ],
});

Builder.registerComponent(ProductCard, {
  name: "Product Card",
  description: "Card displaying a product with image, name, price and color",
  image: componentScreenshots.productCard,
  inputs: [
    {
      name: "image",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "webp"],
      defaultValue: componentScreenshots.productCard,
      required: true,
    },
    {
      name: "name",
      type: "string",
      defaultValue: "Checker Fleece",
      required: true,
    },
    {
      name: "price",
      type: "string",
      defaultValue: "$92",
      required: true,
    },
    {
      name: "color",
      type: "string",
      defaultValue: "Soft Blue",
    },
    {
      name: "link",
      type: "string",
      defaultValue: "/products/checker-fleece",
    },
  ],
});

Builder.registerComponent(ProductsRow, {
  name: "Products Row",
  description: "Horizontal scrollable row of product cards",
  image: componentScreenshots.productsRow,
  inputs: [
    {
      name: "products",
      type: "list",
      subFields: [
        {
          name: "image",
          type: "file",
          allowedFileTypes: ["jpeg", "jpg", "png", "webp"],
          required: true,
        },
        {
          name: "name",
          type: "string",
          required: true,
        },
        {
          name: "price",
          type: "string",
          required: true,
        },
        {
          name: "color",
          type: "string",
        },
        {
          name: "link",
          type: "string",
        },
      ],
      defaultValue: [
        {
          image: componentScreenshots.productCard,
          name: "Checker Fleece",
          price: "$92",
          color: "Soft Blue",
          link: "/products/checker-fleece",
        },
        {
          image: componentScreenshots.productCard,
          name: "Fog Linen Jacket",
          price: "$134",
          color: "Soft Blue",
          link: "/products/fog-linen-jacket",
        },
      ],
    },
    {
      name: "heading",
      type: "string",
      defaultValue: "STEP INTO FRESH STYLES",
    },
  ],
});

Builder.registerComponent(SplitContent, {
  name: "Split Content",
  description: "Split section with text on one side and image on the other",
  image: componentScreenshots.splitContent,
  inputs: [
    {
      name: "heading",
      type: "string",
      defaultValue: "OUR COMMITMENT TO SUSTAINABILITY",
      required: true,
    },
    {
      name: "content",
      type: "longText",
      defaultValue:
        "At Shopaholic, we believe fashion can be both stylish and eco-friendly. That's why we craft our clothing using sustainable materials like organic cotton, recycled fibers, and eco-friendly dyes. Our jeans are designed with the planet in mind—using water-saving technologies and ethical manufacturing processes.",
      required: true,
    },
    {
      name: "buttonText",
      type: "string",
      defaultValue: "Learn More",
    },
    {
      name: "buttonLink",
      type: "string",
      defaultValue: "/about/sustainability",
    },
    {
      name: "image",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "webp"],
      defaultValue: componentScreenshots.splitContent,
      required: true,
    },
    {
      name: "imagePosition",
      type: "string",
      enum: ["left", "right"],
      defaultValue: "right",
    },
  ],
});

Builder.registerComponent(FeatureIconCard, {
  name: "Feature Icon Card",
  description: "Card with icon, title and description highlighting a feature",
  image: componentScreenshots.featureIcon,
  inputs: [
    {
      name: "icon",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "webp", "svg"],
      defaultValue: componentScreenshots.featureIcon,
      required: true,
    },
    {
      name: "title",
      type: "string",
      defaultValue: "2-Day Shipping",
      required: true,
    },
    {
      name: "description",
      type: "longText",
      defaultValue:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere erat a ante vestibulum, in volutpat ligula elementum.",
      required: true,
    },
  ],
});

Builder.registerComponent(FeatureSection, {
  name: "Feature Section",
  description: "Full-width section with heading and feature cards",
  image: componentScreenshots.featureSection,
  inputs: [
    {
      name: "heading",
      type: "string",
      defaultValue: "WHAT'S DIFFERENT ABOUT SHOPAHOLIC",
      required: true,
    },
    {
      name: "features",
      type: "list",
      subFields: [
        {
          name: "icon",
          type: "file",
          allowedFileTypes: ["jpeg", "jpg", "png", "webp", "svg"],
          required: true,
        },
        {
          name: "title",
          type: "string",
          required: true,
        },
        {
          name: "description",
          type: "longText",
          required: true,
        },
      ],
      defaultValue: [
        {
          icon: componentScreenshots.featureIcon,
          title: "2-Day Shipping",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere erat a ante vestibulum, in volutpat ligula elementum.",
        },
        {
          icon: componentScreenshots.featureIcon,
          title: "Carbon Neutral",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere erat a ante vestibulum, in volutpat ligula elementum.",
        },
        {
          icon: componentScreenshots.featureIcon,
          title: "Advanced Dye Tech",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere erat a ante vestibulum, in volutpat ligula elementum.",
        },
      ],
    },
    {
      name: "backgroundColor",
      type: "color",
      defaultValue: "#FAFAFA",
    },
  ],
});

Builder.registerComponent(ShopSection, {
  name: "Shop Section",
  description: "Section with heading, product grid and CTA button",
  image: componentScreenshots.shopSection,
  inputs: [
    {
      name: "heading",
      type: "string",
      defaultValue: "SHOP OUR FAVORITES",
      required: true,
    },
    {
      name: "products",
      type: "list",
      subFields: [
        {
          name: "image",
          type: "file",
          allowedFileTypes: ["jpeg", "jpg", "png", "webp"],
          required: true,
        },
        {
          name: "name",
          type: "string",
          required: true,
        },
        {
          name: "price",
          type: "string",
          required: true,
        },
        {
          name: "color",
          type: "string",
        },
        {
          name: "link",
          type: "string",
        },
      ],
      defaultValue: [
        {
          image: componentScreenshots.productCard,
          name: "Checker Fleece",
          price: "$92",
          color: "Soft Blue",
          link: "/products/checker-fleece",
        },
        {
          image: componentScreenshots.productCard,
          name: "Checker Fleece",
          price: "$92",
          color: "Soft Blue",
          link: "/products/checker-fleece",
        },
        {
          image: componentScreenshots.productCard,
          name: "Checker Fleece",
          price: "$92",
          color: "Soft Blue",
          link: "/products/checker-fleece",
        },
      ],
    },
    {
      name: "buttonText",
      type: "string",
      defaultValue: "SHOP ALL",
    },
    {
      name: "buttonLink",
      type: "string",
      defaultValue: "/products",
    },
  ],
});

Builder.registerComponent(Navbar, {
  name: "Navigation Bar",
  description: "Main site navigation with logo and menu items",
  image: componentScreenshots.navbar,
  inputs: [
    {
      name: "logoText",
      type: "string",
      defaultValue: "SHOPAHOLIC",
    },
    {
      name: "menuItems",
      type: "list",
      subFields: [
        {
          name: "label",
          type: "string",
          required: true,
        },
        {
          name: "link",
          type: "string",
          required: true,
        },
      ],
      defaultValue: [
        {
          label: "HOME",
          link: "/",
        },
        {
          label: "PRODUCTS",
          link: "/products",
        },
        {
          label: "COLLECTIONS",
          link: "/collections",
        },
        {
          label: "ABOUT",
          link: "/about",
        },
      ],
    },
  ],
});

// Export components
export {
  HeroWithOverlay,
  ProductCard,
  ProductsRow,
  SplitContent,
  FeatureIconCard,
  FeatureSection,
  ShopSection,
  Navbar,
};
