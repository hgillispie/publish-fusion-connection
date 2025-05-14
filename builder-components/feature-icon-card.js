import React from "react";
import BuilderImage from "../components/builder-image";

export default function FeatureIconCard({ icon, title, description }) {
  return (
    <div className="flex-1 min-w-[240px] min-h-[268px] flex flex-col items-center justify-between md:max-w-[341px]">
      <div className="relative w-[91px] h-[91px]">
        <BuilderImage
          src={icon}
          alt={title}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="text-black font-bold tracking-[3.78px] mt-[21px]">
        {title}
      </div>
      <div className="text-black font-normal leading-normal mt-[21px] text-center">
        {description}
      </div>
    </div>
  );
}
