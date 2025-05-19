import NextImage from "next/image";

export function Image({
  image,
  alt,
  aspectRatio,
  backgroundSize,
  noWebp,
  fitContent,
  ...props
}) {
  return (
    <div
      className={props.css ? "" : "relative"}
      style={{
        ...(aspectRatio && { aspectRatio: aspectRatio }),
        ...(props.css || {}),
      }}
    >
      <NextImage
        src={image}
        alt={alt || ""}
        fill={!props.width && !props.height}
        width={props.width}
        height={props.height}
        style={{
          objectFit: backgroundSize === "contain" ? "contain" : "cover",
          ...(props.style || {}),
        }}
        className={props.className || ""}
      />
    </div>
  );
}
