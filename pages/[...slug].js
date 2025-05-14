import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "@/components/container";
import Header from "@/components/header";
import LayoutWithTheme from "@/components/layout-with-theme";
import { getAllContent, getDraftContent, getContent } from "@/lib/api";
import Head from "next/head";
import { CMS_NAME, BUILDER_CONFIG } from "@/lib/constants";
import { Builder, builder } from "@builder.io/react";
import "@builder.io/widgets";
import BuilderHydrationFix from "@/components/builder-hydration-fix";

// Import the Builder registry to register components
import "@/lib/builder-registry";

builder.init(BUILDER_CONFIG.apiKey);
Builder.isStatic = true;

export default function Page({ content, preview }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!content && !Builder.isEditing && !Builder.isPreviewing && !preview) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <LayoutWithTheme preview={preview}>
      <Container>
        <Header />
        <Head>
          <title>{`${content?.data?.title || "Page"} | ${CMS_NAME}`}</title>
        </Head>
        <article>
          <BuilderHydrationFix
            model={BUILDER_CONFIG.contentModel}
            content={content}
            options={{
              includeRefs: true,
              noTrack: true,
              staticContent: true,
            }}
          />
        </article>
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const slug = params?.slug?.join("/") || "";

  let content;

  if (preview && previewData?.draftContentId) {
    content = await getDraftContent(
      BUILDER_CONFIG.contentModel,
      previewData.draftContentId,
    );
  } else {
    content = await getContent(BUILDER_CONFIG.contentModel, preview);
  }

  return {
    props: {
      preview,
      content: content || null,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const pages = await getAllContent(BUILDER_CONFIG.contentModel);

  return {
    paths:
      pages?.map((page) => ({
        params: {
          slug: page.data?.url?.split("/").filter(Boolean) || [],
        },
      })) || [],
    fallback: true,
  };
}