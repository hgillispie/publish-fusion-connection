import { Builder } from "@builder.io/react";
import Head from "next/head";
import Container from "@/components/container";
import Layout from "@/components/layout";
import ShopaholicHomepage from "@/components/shopaholic/shopaholic-homepage";
import { CMS_NAME } from "@/lib/constants";

// Register the shopaholic component so it can be used in Builder.io
Builder.registerComponent(ShopaholicHomepage, {
  name: "ShopaholicHomepage",
});

export default function Shopaholic({ preview }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{`Shopaholic | ${CMS_NAME}`}</title>
        </Head>
        <Container>
          <ShopaholicHomepage />
        </Container>
      </Layout>
    </>
  );
}
