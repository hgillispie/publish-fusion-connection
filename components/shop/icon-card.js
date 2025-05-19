import Image from "next/image";

export default function IconCard({ icon, title, description }) {
  return (
    <div className="flex min-w-[240px] min-h-[268px] flex-col items-center justify-between w-[341px]">
      <div className="relative flex w-[91px]">
        <Image
          src={
            icon ||
            "https://cdn.builder.io/api/v1/image/assets/TEMP/c1f57ea5a40a36e9e9f3dfbde32c8c86c8a1df0c70b8d0cff131c0a2975ba0c9?apiKey=8f6bae86bfa3487eb1a18f263118c832&"
          }
          alt={title || "Feature Icon"}
          width={91}
          height={91}
          className="object-contain"
        />
      </div>
      <div className="text-black font-bold tracking-[3.78px] mt-[21px]">
        {title || "2-Day Shipping"}
      </div>
      <div className="text-black font-normal leading-normal mt-[21px] text-center">
        {description ||
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere erat a ante vestibulum, in volutpat ligula elementum."}
      </div>
    </div>
  );
}
