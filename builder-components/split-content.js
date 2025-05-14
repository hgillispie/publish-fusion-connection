import React from "react";
import BuilderImage from "../components/builder-image";
import Link from "next/link";

export default function SplitContent({
  heading,
  content,
  buttonText,
  buttonLink,
  image,
  imagePosition = "right",
}) {
  const contentSection = (
    <div className="flex-1 min-w-[240px] my-auto flex flex-col items-stretch justify-start md:max-w-[685px]">
      <div className="text-[25px] tracking-[5.25px] text-black font-semibold">
        {heading}
      </div>
      <div className="text-[18px] font-normal mt-[46px] sm:mt-10 text-black">
        {content}
      </div>
      {buttonText && (
        <Link href={buttonLink || "#"}>
          <div className="self-start bg-[#C8E2EE] flex mt-[46px] px-5 py-[10px] items-center gap-[10px] text-[15px] tracking-[3.15px] justify-center cursor-pointer sm:mt-10">
            {buttonText}
          </div>
        </Link>
      )}
    </div>
  );

  const imageSection = (
    <div
      className="relative rounded-lg overflow-hidden flex-1 min-w-[240px] my-auto md:max-w-[470px]"
      style={{ paddingBottom: "105%" }}
    >
      <BuilderImage
        src={image}
        alt={heading}
        layout="fill"
        objectFit="contain"
      />
    </div>
  );

  return (
    <div className="flex mt-[50px] items-center gap-[40px_43px] text-black font-semibold leading-normal justify-start flex-wrap sm:mt-10">
      {imagePosition === "left" ? (
        <>
          {imageSection}
          {contentSection}
        </>
      ) : (
        <>
          {contentSection}
          {imageSection}
        </>
      )}
    </div>
  );
}
