import { Builder } from "@builder.io/react";
import Container from "@/components/container";
import Alert from "@/components/alert";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SectionSeparator from "@/components/section-separator";
import Meta from "@/components/meta";
import BuilderImage from "@/components/builder-image";
import ShopHomepage from "@/components/shop/shop-homepage";
import ProductCard from "@/components/shop/product-card";
import IconCard from "@/components/shop/icon-card";

// Builder.registerComponent(Container, {
//   name: "Container",
//   image:
//     "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F33db6d3cabd243fa9343632eb8e70e72",
//   inputs: [{ name: "children", type: "slot" }],
// });

// Builder.registerComponent(Alert, {
//   name: "Alert",
//   image:
//     "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fc7ce28fe5210424a8a1c500da30d8a45",
//   inputs: [{ name: "preview", type: "boolean" }],
// });

// Builder.registerComponent(Header, {
//   name: "Header",
//   image:
//     "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Ffaefe2fc6c773bfbcb0b36a83e0e4b0a",
// });

// Builder.registerComponent(Footer, {
//   name: "Footer",
//   image:
//     "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fc6371c1c2cc1409f983f6e8ff1c27640",
// });

// Builder.registerComponent(SectionSeparator, {
//   name: "SectionSeparator",
//   image:
//     "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F92997f8f19904992a6d458411b5e48d8",
// });

// Builder.registerComponent(Meta, {
//   name: "Meta",
//   image:
//     "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F0b099b9263d546a1aea99ff0197b3ab7",
// });

// Builder.registerComponent(BuilderImage, {
//   name: "BuilderImage",
//   image: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt",
// });

Builder.registerComponent(ShopHomepage, {
  name: "ShopHomepage",
  image:
    "https://cdn.builder.io/api/v1/image/assets%2F24272629d2bd4d1a8956cce15af1b3dc%2Ff5f486a35a80c0e8aea6037c50a5571ee46cf816",
  inputs: [],
});

import Navbar from "@/components/shop/navbar";

Builder.registerComponent(Navbar, {
  name: "Navbar",
  image:
    "https://cdn.builder.io/api/v1/image/assets%2F24272629d2bd4d1a8956cce15af1b3dc%2F90ce0763831319423bc24708626a2048c42a79f2",
  inputs: [],
});

Builder.registerComponent(ProductCard, {
  name: "ProductCard",
  image:
    "https://cdn.builder.io/api/v1/image/assets%2F24272629d2bd4d1a8956cce15af1b3dc%2Fc7c0dc80625263fcbcbb8e733ef4595b89b46dee",
  inputs: [
    { name: "image", type: "file", allowedFileTypes: ["jpeg", "png"] },
    { name: "productName", type: "text" },
    { name: "price", type: "text" },
    { name: "color", type: "text" },
  ],
});

Builder.registerComponent(IconCard, {
  name: "IconCard",
  image:
    "https://cdn.builder.io/api/v1/image/assets%2F24272629d2bd4d1a8956cce15af1b3dc%2F3a580935349fc284245e2d512c16aa909e84dec2",
  inputs: [
    { name: "icon", type: "file", allowedFileTypes: ["jpeg", "png"] },
    { name: "title", type: "text" },
    { name: "description", type: "text" },
  ],
});
