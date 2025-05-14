import React from "react";
import ProductCard from "./product-card";

export default function ProductsRow({ heading, products = [] }) {
  return (
    <div className="w-full">
      {heading && (
        <div className="w-full flex mt-[50px] items-center gap-[10px] text-[25px] text-[#1F1F1F] font-semibold text-center tracking-[5.25px] leading-normal justify-center sm:mt-10">
          {heading}
        </div>
      )}

      <div className="flex mt-[50px] w-full items-start gap-[25px] overflow-x-auto text-[15px] text-center tracking-[0.75px] pb-4 sm:mt-10">
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
    </div>
  );
}
