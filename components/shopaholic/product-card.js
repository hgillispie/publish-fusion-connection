import Image from "next/image";

export default function ProductCard({ image, title, price, color }) {
  return (
    <div className="flex min-w-[240px] flex-col items-stretch justify-start flex-1 flex-shrink-1 flex-basis-0">
      <div className="relative w-full">
        <Image
          src={image}
          alt={title}
          width={339}
          height={308}
          className="rounded-md w-full"
        />
      </div>
      <div className="flex mt-5 flex-col items-stretch justify-start">
        <div className="flex items-start justify-between">
          <div className="text-black font-normal">{title}</div>
          <div className="text-black font-semibold">${price}</div>
        </div>
        <div className="text-[#656565] font-normal mt-[7px]">{color}</div>
      </div>
    </div>
  );
}
