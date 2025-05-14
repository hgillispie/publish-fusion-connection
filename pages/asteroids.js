import Container from "@/components/container";
import LayoutWithTheme from "@/components/layout-with-theme";
import Header from "@/components/header";
import Head from "next/head";
import { CMS_NAME } from "@/lib/constants";
import AsteroidVisualization from "@/components/nasa/AsteroidVisualization";

export default function AsteroidsPage({ preview }) {
  return (
    <>
      <LayoutWithTheme preview={preview}>
        <Head>
          <title>{`NASA Asteroid Visualization | ${CMS_NAME}`}</title>
          <meta
            name="description"
            content="Visual representation of NASA's Asteroids NeoWs (Near Earth Object Web Service) data"
          />
        </Head>
        <Container>
          <Header />
          <AsteroidVisualization />
        </Container>
      </LayoutWithTheme>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  return {
    props: { preview },
  };
}
