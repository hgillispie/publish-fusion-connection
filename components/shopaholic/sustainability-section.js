import Image from "next/image";

export default function SustainabilitySection() {
  return (
    <div className="flex mt-[43px] items-center gap-[43px] text-black font-semibold leading-normal justify-start flex-wrap md:max-w-full md:mt-10">
      <div className="self-stretch flex min-w-[240px] my-auto flex-col items-stretch justify-start w-[685px] md:max-w-full">
        <div className="text-[25px] tracking-[5.25px] md:max-w-full">
          OUR COMMITMENT TO SUSTAINABILITY
        </div>
        <div className="text-[18px] font-normal mt-[46px] md:max-w-full md:mt-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          posuere erat a ante vestibulum, in volutpat ligula elementum. Mauris
          scelerisque, ex ac fringilla auctor, nulla erat tempus enim, vel
          tincidunt arcu turpis vel enim.
        </div>
        <div className="self-start bg-[#C8E2EE] flex mt-[46px] px-5 py-[10px] items-center gap-[10px] text-[15px] tracking-[3.15px] justify-center md:mt-10">
          Learn More
        </div>
      </div>
      <div className="self-stretch relative flex min-w-[240px] my-auto w-[470px] md:max-w-full">
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/24272629d2bd4d1a8956cce15af1b3dc/d954ad608a20840cd3a81f29461c95c988371492"
          alt="Sustainable Jeans"
          width={470}
          height={493}
          className="rounded-md w-full"
        />
      </div>
    </div>
  );
}
