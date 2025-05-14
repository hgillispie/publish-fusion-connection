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
          <title>{`Next.js Example with ${CMS_NAME}`}</title>
        </Head>
        <Container>
          <Intro />
          <div className="flex flex-col items-center justify-center py-16">
            <h2 className="text-4xl font-bold mb-8">
              Welcome to your Next.js site
            </h2>
            <p className="text-lg text-center max-w-2xl mb-8">
              This is a clean starting point for your project. You can build
              your site using Builder.io's visual editor with Next.js.
            </p>
            <a
              href="https://www.builder.io/c/docs/getting-started"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6"
            >
              Get Started with Builder.io
            </a>
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = null }) {
  return {
    props: { preview },
  };
}
