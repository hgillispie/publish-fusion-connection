import { useTheme } from "@/lib/theme-context";
import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";

export default function LayoutWithTheme({ preview, children }) {
  const { isDarkMode } = useTheme();

  return (
    <>
      <Meta />
      <div className={`min-h-screen ${isDarkMode ? "dark-mode" : ""}`}>
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
