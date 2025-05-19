import Image from "next/image";

export default function ProductCard({ image, productName, price, color }) {
  return (
    <div className="flex min-w-[240px] flex-col items-stretch justify-start flex-1 flex-shrink-1 flex-basis-0">
      <div className="rounded-md relative flex w-full">
        <Image
          src={
            image ||
            "https://cdn.builder.io/api/v1/image/assets/24272629d2bd4d1a8956cce15af1b3dc/c7c0dc80625263fcbcbb8e733ef4595b89b46dee"
          }
          alt={productName || "Product Image"}
          width={339}
          height={308}
          className="rounded-md w-full object-contain"
        />
      </div>
      <div className="flex mt-5 flex-col items-stretch justify-start">
        <div className="flex items-start justify-between">
          <div className="text-black font-normal leading-normal">
            {productName || "Checker Fleece"}
          </div>
          <div className="text-black font-semibold">{price || "$92"}</div>
        </div>
        <div className="text-[#656565] font-normal leading-normal self-start mt-[7px]">
          {color || "Soft Blue"}
        </div>
      </div>
    </div>
  );
}
