import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";
import Navbar from "./navbar";

export default function LayoutWithNavbar({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>
          <div className="container mx-auto px-5">
            <div className="flex items-center justify-between mt-8 mb-8">
              <Navbar />
            </div>
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
