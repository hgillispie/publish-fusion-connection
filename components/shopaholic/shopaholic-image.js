import Image from "next/image";

const builderLoader = ({ src, width, quality }) => {
  return `${src}?width=${width}&quality=${quality || 75}`;
};

export default function ShopaholicImage({
  src,
  alt,
  width,
  height,
  className,
  style,
}) {
  return (
    <Image
      loader={builderLoader}
      src={src}
      alt={alt || ""}
      width={width}
      height={height}
      className={className || ""}
      style={style || {}}
    />
  );
}
