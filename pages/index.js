import LayoutWithNavbar from "@/components/layout-with-navbar";
import { getContent } from "@/lib/api";
import Head from "next/head";
import { Builder, BuilderComponent, builder } from "@builder.io/react";
import { CMS_NAME, BUILDER_CONFIG } from "@/lib/constants";
import "@builder.io/widgets";

// Import the Builder registry to register components
import "@/lib/builder-registry";

builder.init(BUILDER_CONFIG.apiKey);
Builder.isStatic = true;

export default function Index({ content, preview }) {
  return (
    <>
      <LayoutWithNavbar preview={preview}>
        <Head>
          <title>{`Next.js Example with ${CMS_NAME}`}</title>
        </Head>
        {content ? (
          <BuilderComponent
            model="page"
            content={content}
            options={{ includeRefs: true }}
          />
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold mb-4">No Content Found</h2>
            <p>
              Create content in Builder.io and connect it to this page to see it
              here.
            </p>
          </div>
        )}
      </LayoutWithNavbar>
    </>
  );
}

export async function getStaticProps({ preview = null }) {
  const content = await getContent(BUILDER_CONFIG.contentModel, preview);

  return {
    props: { content: content || null, preview },
    revalidate: 20,
  };
}
