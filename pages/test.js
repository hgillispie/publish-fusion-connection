import { useState, useEffect } from "react";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import Layout from "../components/layout";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import { getPage } from "../lib/api";
import Navbar from "../components/navbar";

export default function TestPage({ page, preview }) {
  const isPreviewing = useIsPreviewing();
  const [hydrated, setHydrated] = useState(false);

  // This effect is needed to ensure proper client-side hydration
  useEffect(() => {
    setHydrated(true);
  }, []);

  // Show the Builder component if we have a page, otherwise fallback to default UI
  const showBuilderContent = Boolean(page) || isPreviewing;

  // Simple blank page with minimal UI for testing drag and drop
  const BlankPageUI = () => (
    <div
      className="bg-white flex flex-col overflow-hidden items-stretch font-poppins justify-center min-h-[600px]"
      style={{
        fontFamily: "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
      }}
    >
      <Navbar />
      <div className="self-center flex w-full max-w-[1200px] flex-col items-center justify-center py-12 px-4">
        <h1 className="text-3xl font-semibold mb-6 text-center">Test Page</h1>
        <p className="text-gray-600 max-w-2xl text-center mb-8">
          This is a blank test page for trying out Builder.io components. If
          you're seeing this message, you're not in Builder.io editor mode. Open
          this page in Builder.io to start adding components.
        </p>
        <div className="w-full h-[400px] border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">
            Drag and drop area for Builder.io components
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{`Test Page - ${CMS_NAME}`}</title>
        </Head>

        {/* Show either Builder content or default UI */}
        {showBuilderContent ? (
          <BuilderComponent
            model="page"
            content={page}
            options={{ includeRefs: true }}
            className="builder-page"
          >
            {/* Fallback content will be shown when in editing mode with no content */}
            {!hydrated || !page ? <BlankPageUI /> : null}
          </BuilderComponent>
        ) : (
          <BlankPageUI />
        )}
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false, previewData }) {
  // Fetch Builder.io content for the test page
  const page = await getPage("/test", preview, previewData);

  return {
    props: {
      page: page || null,
      preview: preview || false,
    },
    // Revalidate after 1 minute
    revalidate: 60,
  };
}
