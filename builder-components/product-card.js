import React from "react";
import BuilderImage from "../components/builder-image";
import Link from "next/link";

export default function ProductCard({ image, name, price, color, link }) {
  return (
    <div className="flex min-w-[240px] flex-col items-stretch justify-start w-[339px]">
      <Link href={link || "#"}>
        <div
          className="relative rounded-lg overflow-hidden cursor-pointer"
          style={{ width: "100%", paddingBottom: "80.5%" }}
        >
          <BuilderImage
            src={image}
            alt={name}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </Link>
      <div className="flex mt-5 flex-col items-stretch justify-start">
        <div className="flex items-start justify-between">
          <div className="text-black font-normal leading-normal">{name}</div>
          <div className="text-black font-semibold">{price}</div>
        </div>
        {color && (
          <div className="text-[#656565] font-normal leading-normal self-start mt-[7px]">
            {color}
          </div>
        )}
      </div>
    </div>
  );
}
