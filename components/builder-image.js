import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const builderLoader = ({ src, width, quality }) => {
  return `${src}?width=${width}&quality=${quality || 75}`;
};

const BuilderImage = (props) => {
  const imgRef = useRef(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    // Remove builder-inline-styles attribute that causes hydration mismatch
    if (imgRef.current) {
      imgRef.current.removeAttribute("builder-inline-styles");

      // Apply any inline styles directly to ensure consistency
      const style = props.style || {};
      Object.keys(style).forEach((key) => {
        imgRef.current.style[key] = style[key];
      });
    }

    // Mark as loaded to trigger any conditional rendering if needed
    setHasLoaded(true);
  }, [props.style]);

  // Extract builder-specific props to prevent them from passing to the Image component
  const {
    "builder-id": builderId,
    "builder-inline-styles": builderInlineStyles,
    builderAttributes,
    builderCss,
    ...safeProps
  } = props;

  // Ensure we have width and height to prevent layout shifts
  const imageProps = {
    ...safeProps,
    width: safeProps.width || 500,
    height: safeProps.height || 300,
    alt: safeProps.alt || "",
    ref: imgRef,
    // Add onLoad handler to ensure all resources are properly loaded
    onLoad: () => {
      if (props.onLoad) props.onLoad();
    },
  };

  return <Image loader={builderLoader} {...imageProps} />;
};

export default BuilderImage;
