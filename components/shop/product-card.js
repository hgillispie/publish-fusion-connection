import Image from "next/image";

export default function ProductCard({ image, productName, price, color }) {
  return (
    <div className="flex min-w-[240px] flex-col items-stretch justify-start flex-1 flex-shrink-1 flex-basis-0">
      <div className="rounded-md relative flex w-full">
        <Image
          src={
            image ||
            "https://cdn.builder.io/api/v1/image/assets/TEMP/2380b67c5f144df98916f11a6d5121a15dd6af2f9b7f01c2b9db2c79f10c6ab5?apiKey=8f6bae86bfa3487eb1a18f263118c832&"
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
