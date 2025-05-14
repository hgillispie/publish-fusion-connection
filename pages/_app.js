import "@/styles/index.css";
import "@/lib/builder-registry";
import { BuilderSsrFix } from "@/components/builder-ssr-fix";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <BuilderSsrFix />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
