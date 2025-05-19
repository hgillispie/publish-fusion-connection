export default function HeroSection() {
  return (
    <div className="flex w-full max-w-[1200px] flex-col items-stretch">
      <div
        className="rounded-md relative min-h-[588px] w-full px-20 py-[237px] flex flex-col items-end justify-center md:max-w-full md:px-5 md:py-[100px] sm:min-h-[400px]"
        style={{
          backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets/24272629d2bd4d1a8956cce15af1b3dc/f5f486a35a80c0e8aea6037c50a5571ee46cf816')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative flex mb-[-46px] w-[573px] max-w-full flex-col items-end justify-start md:mb-[10px]">
          <div className="text-white text-[34px] font-semibold tracking-[7.14px]">
            NEW ACCESSORIES
          </div>
          <div className="self-stretch bg-white flex mt-5 min-h-[43px] px-5 py-[10px] items-center gap-[10px] text-[15px] text-black tracking-[3.15px] font-semibold justify-center">
            Shop Now
          </div>
        </div>
      </div>
    </div>
  );
}
