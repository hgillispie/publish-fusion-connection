import Image from "next/image";
import { useEffect, useState } from "react";

const builderLoader = ({ src, width, quality }) => {
  return `${src}?width=${width}&quality=${quality || 75}`;
};

const BuilderImage = (props) => {
  // Use client-side only rendering to avoid hydration mismatch
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // During SSR, render a placeholder with similar dimensions
  if (!isMounted) {
    return (
      <div
        style={{
          width: props.width,
          height: props.height,
          background: "#f0f0f0",
        }}
        aria-hidden="true"
        data-builder-image-placeholder="true"
      />
    );
  }

  // After client-side hydration, render the actual image
  return <Image loader={builderLoader} {...props} />;
};

export default BuilderImage;
