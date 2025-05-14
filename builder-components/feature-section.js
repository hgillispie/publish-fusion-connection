import React from "react";
import FeatureIconCard from "./feature-icon-card";

export default function FeatureSection({
  heading,
  features = [],
  backgroundColor = "#FAFAFA",
}) {
  return (
    <div
      className="flex mt-[50px] w-full pt-[99px] pb-[107px] flex-col items-center text-center justify-start sm:mt-10 sm:pb-[100px]"
      style={{ backgroundColor }}
    >
      <div className="flex w-full max-w-[1243px] flex-col items-stretch">
        <div className="text-black text-[25px] font-semibold leading-normal tracking-[5.25px] self-center">
          {heading}
        </div>

        <div className="flex mt-[53px] min-h-[268px] items-start gap-[40px_100px] text-[18px] justify-between flex-wrap sm:mt-10">
          {features.map((feature, index) => (
            <FeatureIconCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
