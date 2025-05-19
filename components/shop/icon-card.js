import Image from "next/image";

export default function IconCard({ icon, title, description }) {
  return (
    <div className="flex min-w-[240px] min-h-[268px] flex-col items-center justify-between w-[341px]">
      <div className="relative flex w-[91px]">
        <Image
          src={
            icon ||
            "https://cdn.builder.io/api/v1/image/assets/24272629d2bd4d1a8956cce15af1b3dc/3a580935349fc284245e2d512c16aa909e84dec2"
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
