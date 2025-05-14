import React from "react";
import ProductCard from "./product-card";
import Link from "next/link";

export default function ShopSection({
  heading,
  products = [],
  buttonText,
  buttonLink,
}) {
  return (
    <div className="flex mt-[50px] min-h-[655px] w-full max-w-[1200px] flex-col items-center text-[15px] justify-between sm:mt-10">
      <div className="w-full flex items-center gap-[10px] text-[25px] text-[#1F1F1F] font-semibold text-center tracking-[5.25px] leading-normal justify-center">
        {heading}
      </div>

      <div className="w-full flex mt-10 items-center gap-[40px_89px] text-center tracking-[0.75px] justify-between flex-wrap">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
            color={product.color}
            link={product.link}
          />
        ))}
      </div>

      {buttonText && (
        <Link href={buttonLink || "#"}>
          <div className="w-full bg-black flex mt-10 px-5 py-[10px] items-center gap-[10px] text-white font-semibold tracking-[3.15px] leading-normal justify-center cursor-pointer">
            {buttonText}
          </div>
        </Link>
      )}
    </div>
  );
}
