import Container from "./container";
import cn from "classnames";

export default function Alert({ preview }) {
  if (!preview) return null;

  return (
    <div className="bg-accent-7 border-accent-7 border-b text-white">
      <Container>
        <div className="py-2 text-center text-sm">
          This page is a preview.{" "}
          <a
            href="/api/exit-preview"
            className="underline hover:text-cyan duration-200 transition-colors"
          >
            Click here
          </a>{" "}
          to exit preview mode.
        </div>
      </Container>
    </div>
  );
}
