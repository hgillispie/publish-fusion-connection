import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "@/components/container";
import Layout from "@/components/layout";
import Header from "@/components/header";
import Head from "next/head";
import { CMS_NAME, BUILDER_CONFIG } from "@/lib/constants";
import { Builder, builder, BuilderContent } from "@builder.io/react";
import "@builder.io/widgets";

builder.init(BUILDER_CONFIG.apiKey);
Builder.isStatic = true;

export default function Product({ product, preview }) {
  const router = useRouter();
  const isLive = !Builder.isEditing && !Builder.isPreviewing && !preview;

  if (!router.isFallback && !product && isLive) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Head>
        <title>{`Product | E-commerce Store with ${CMS_NAME}`}</title>
      </Head>
      <Container>
        <Header />
        {router.isFallback ? (
          <div className="text-center py-20">
            <p className="text-2xl font-bold">Loading...</p>
          </div>
        ) : (
          <div className="py-10">
            <h1 className="text-4xl font-bold mb-6">Product Detail Page</h1>
            <p className="text-gray-500 mb-10">
              This page will show product details from Builder.io
            </p>
          </div>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false, previewData }) {
  // Implement product fetching logic when model is defined
  return {
    props: {
      preview,
      product: null,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}
