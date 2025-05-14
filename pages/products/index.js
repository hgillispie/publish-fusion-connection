import Container from "@/components/container";
import Layout from "@/components/layout";
import Header from "@/components/header";
import Head from "next/head";
import { CMS_NAME } from "@/lib/constants";

export default function Products({ preview }) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>{`Products | E-commerce Store with ${CMS_NAME}`}</title>
      </Head>
      <Container>
        <Header />
        <div className="py-10">
          <h1 className="text-4xl font-bold mb-10">All Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center justify-center p-8 border border-gray-200 rounded-md">
              <p className="text-gray-500 italic">No products found</p>
              <p className="text-sm text-gray-400 mt-2">
                Products will appear here when added to the Builder.io CMS
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ preview = null }) {
  return {
    props: { preview },
    revalidate: 60,
  };
}
