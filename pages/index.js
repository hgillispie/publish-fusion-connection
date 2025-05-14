import Container from "@/components/container";
import Intro from "@/components/intro";
import Layout from "@/components/layout";
import Head from "next/head";
import { CMS_NAME } from "@/lib/constants";

export default function Index({ preview }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{`E-commerce Store with ${CMS_NAME}`}</title>
        </Head>
        <Container>
          <Intro />
          <div className="flex flex-col items-center justify-center py-12">
            <h2 className="text-3xl font-bold mb-6">Welcome to our Store</h2>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl">
              Our product catalog will be displayed here. Shop the latest
              products and find amazing deals.
            </p>
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = null }) {
  return {
    props: { preview },
    revalidate: 60,
  };
}
