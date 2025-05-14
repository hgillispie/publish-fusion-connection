import React from "react";
import BuilderImage from "../components/builder-image";
import Link from "next/link";

export default function HeroWithOverlay({
  backgroundImage,
  title,
  buttonText,
  buttonLink,
}) {
  return (
    <div className="flex w-full flex-col items-stretch font-semibold leading-normal">
      <div className="relative rounded-lg overflow-hidden w-full min-h-[588px]">
        <BuilderImage
          src={backgroundImage}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center pl-20 pr-4 py-[237px] items-end md:pl-20 md:py-[237px] sm:pl-5 sm:py-[100px]">
          <div className="text-white text-[34px] tracking-[7.14px] relative">
            {title}
          </div>
          {buttonText && (
            <Link href={buttonLink || "#"}>
              <div className="bg-white flex mt-5 mr-[22px] -mb-[46px] px-5 py-[10px] items-center gap-[10px] text-[15px] text-black tracking-[3.15px] justify-center cursor-pointer sm:mr-[10px] sm:mb-[10px]">
                {buttonText}
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
