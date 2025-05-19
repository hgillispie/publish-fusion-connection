import Image from "next/image";
import ProductCard from "./product-card";
import IconCard from "./icon-card";

export default function ShopHomepage() {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-stretch font-['Poppins,_-apple-system,_Roboto,_Helvetica,_sans-serif'] justify-start">
      {/* Header */}
      <div className="flex w-full flex-col items-stretch text-[15px] font-semibold tracking-[3.15px]">
        <div className="bg-white border-[#dfdfdf] border-solid border-b flex w-full px-[70px] py-[25px] flex-col items-center justify-center md:px-5">
          <div className="flex w-full max-w-[1200px] items-center gap-[100px] justify-between flex-wrap md:max-w-full">
            {/* Logo */}
            <div className="self-stretch flex mt-auto mb-auto items-center gap-[14px] text-black whitespace-nowrap justify-start md:whitespace-normal">
              <div className="self-stretch relative flex mt-auto mb-auto w-6 flex-shrink-0">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets/24272629d2bd4d1a8956cce15af1b3dc/90ce0763831319423bc24708626a2048c42a79f2"
                  alt="Logo"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <div className="self-stretch mt-auto mb-auto">SHOPAHOLIC</div>
            </div>

            {/* Menu Options */}
            <div className="self-stretch flex min-w-[240px] mt-auto mb-auto items-center gap-[30px] text-black leading-normal justify-start flex-wrap md:max-w-full">
              <div className="self-stretch mt-auto mb-auto">WOMEN</div>
              <div className="self-stretch mt-auto mb-auto">MEN</div>
              <div className="self-stretch mt-auto mb-auto">COLLECTIONS</div>
              <div className="self-stretch mt-auto mb-auto">SHOP ALL</div>
              <div className="text-[#B63333] self-stretch mt-auto mb-auto">
                SALE
              </div>
            </div>

            {/* Sign In Button */}
            <div className="self-stretch flex mt-auto mb-auto items-center gap-[30px] text-white leading-normal justify-start">
              <div className="self-stretch bg-black flex mt-auto mb-auto px-5 py-[10px] items-center gap-[10px] justify-center">
                SIGN IN
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex mt-[93px] w-full flex-col items-stretch md:max-w-full md:mt-10">
        <div className="flex w-full flex-col items-center font-semibold leading-normal justify-start md:max-w-full">
          {/* Hero */}
          <div className="flex w-[1200px] max-w-full flex-col items-stretch">
            <div className="rounded-md relative flex min-h-[588px] w-full px-20 py-[237px] flex-col items-end justify-center md:max-w-full md:px-5 md:py-[100px]">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/24272629d2bd4d1a8956cce15af1b3dc/f5f486a35a80c0e8aea6037c50a5571ee46cf816"
                alt="Hero Image"
                fill
                className="rounded-md object-cover"
              />
              <div className="relative flex -mb-[46px] w-[573px] max-w-full flex-col items-end justify-start md:mb-[10px]">
                <div className="text-white text-[34px] tracking-[7.14px]">
                  NEW ACCESSORIES
                </div>
                <div className="self-stretch bg-white flex mt-5 min-h-[43px] px-5 py-[10px] items-center gap-[10px] text-[15px] text-black tracking-[3.15px] justify-center">
                  Shop Now
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex mt-[93px] w-full flex-col items-center justify-start md:max-w-full md:mt-10">
          {/* Text Hero */}
          <div className="self-stretch w-[1200px] md:max-w-full flex max-w-full items-center gap-[10px] text-[25px] text-[#1F1F1F] font-semibold text-center tracking-[5.25px] leading-normal justify-center">
            STEP INTO FRESH STYLES
          </div>

          {/* Collection */}
          <div className="flex mt-[43px] w-[1198px] max-w-full items-start gap-[25px] overflow-hidden text-[15px] text-center tracking-[0.75px] justify-start flex-wrap md:mt-10">
            {/* Product Cards */}
            <ProductCard
              image="https://cdn.builder.io/api/v1/image/assets/24272629d2bd4d1a8956cce15af1b3dc/c7c0dc80625263fcbcbb8e733ef4595b89b46dee"
              productName="Checker Fleece"
              price="$92"
              color="Soft Blue"
            />
            <ProductCard
              image="https://cdn.builder.io/api/v1/image/assets/24272629d2bd4d1a8956cce15af1b3dc/b993a1035960676170c04f80f4199c598d5aa03c"
              productName="Fog Linen Jacket"
              price="$134"
              color="Soft Blue"
            />
            <ProductCard
              image="https://cdn.builder.io/api/v1/image/assets/24272629d2bd4d1a8956cce15af1b3dc/faf8b65ae3d5d3dc3224b010e6a0616ee021d4ee"
              productName="Angular Sunglasses"
              price="$31"
              color="Rose"
            />
          </div>

          {/* Split Hero */}
          <div className="bg-white flex mt-[43px] items-center gap-[43px] text-black font-semibold leading-normal justify-start flex-wrap md:max-w-full md:mt-10">
            <div className="self-stretch flex min-w-[240px] mt-auto mb-auto flex-col items-stretch justify-start w-[685px] md:max-w-full">
              <div className="text-[25px] tracking-[5.25px] md:max-w-full">
                OUR COMMITMENT TO SUSTAINABILITY
              </div>
              <div className="text-[18px] font-normal mt-[46px] md:max-w-full md:mt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                posuere erat a ante vestibulum, in volutpat ligula elementum.
                Mauris scelerisque, ex ac fringilla auctor, nulla erat tempus
                enim, vel tincidunt arcu turpis vel enim.
              </div>
              <div className="self-start bg-[#C8E2EE] flex mt-[46px] px-5 py-[10px] items-center gap-[10px] text-[15px] tracking-[3.15px] justify-center md:mt-10">
                Learn More
              </div>
            </div>
            <div className="rounded-md self-stretch relative flex min-w-[240px] mt-auto mb-auto w-[470px] md:max-w-full">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/24272629d2bd4d1a8956cce15af1b3dc/d954ad608a20840cd3a81f29461c95c988371492"
                alt="Jeans"
                width={470}
                height={493}
                className="rounded-md object-contain"
              />
            </div>
          </div>

          {/* Shop By Category */}
          <div className="flex mt-[43px] flex-col items-center text-[15px] justify-center md:max-w-full md:mt-10">
            <div className="self-stretch w-[1200px] md:max-w-full flex max-w-full items-center gap-[10px] text-[25px] text-[#1F1F1F] font-semibold text-center tracking-[5.25px] leading-normal justify-center">
              SHOP OUR FAVORITES
            </div>
            <div className="flex mt-[63px] items-start gap-[33px] text-center tracking-[0.75px] justify-start flex-wrap md:max-w-full md:mt-10">
              <ProductCard
                image="https://cdn.builder.io/api/v1/image/assets/24272629d2bd4d1a8956cce15af1b3dc/000e6998788e0d6a03d576303978f317a3db9a18"
                productName="Checker Fleece"
                price="$92"
                color="Soft Blue"
              />
              <ProductCard
                image="https://cdn.builder.io/api/v1/image/assets/24272629d2bd4d1a8956cce15af1b3dc/000e6998788e0d6a03d576303978f317a3db9a18"
                productName="Checker Fleece"
                price="$92"
                color="Soft Blue"
              />
              <ProductCard
                image="https://cdn.builder.io/api/v1/image/assets/24272629d2bd4d1a8956cce15af1b3dc/000e6998788e0d6a03d576303978f317a3db9a18"
                productName="Checker Fleece"
                price="$92"
                color="Soft Blue"
              />
              <ProductCard
                image="https://cdn.builder.io/api/v1/image/assets/24272629d2bd4d1a8956cce15af1b3dc/000e6998788e0d6a03d576303978f317a3db9a18"
                productName="Checker Fleece"
                price="$92"
                color="Soft Blue"
              />
            </div>
            <div className="self-stretch bg-black flex mt-[63px] px-5 py-[10px] items-center gap-[10px] text-white font-semibold tracking-[3.15px] leading-normal justify-center md:mt-10">
              SHOP ALL
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-[#FAFAFA] flex mt-[93px] w-full py-[99px] pb-[107px] flex-col items-center text-center justify-start md:max-w-full md:pb-[100px] md:mt-10">
          <div className="flex w-[1243px] max-w-full flex-col items-stretch">
            <div className="text-black text-[25px] font-semibold leading-normal tracking-[5.25px] self-center md:max-w-full">
              WHAT'S DIFFERENT ABOUT SHOPAHOLIC
            </div>
            <div className="flex mt-[113px] items-start gap-[100px] text-[18px] justify-between flex-wrap md:max-w-full md:mt-10">
              <IconCard
                icon="https://cdn.builder.io/api/v1/image/assets/24272629d2bd4d1a8956cce15af1b3dc/3a580935349fc284245e2d512c16aa909e84dec2"
                title="2-Day Shipping"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere erat a ante vestibulum, in volutpat ligula elementum."
              />
              <IconCard
                icon="https://cdn.builder.io/api/v1/image/assets/24272629d2bd4d1a8956cce15af1b3dc/776e4b573ac1ad2b0f1ef9de9e6154338dc4369c"
                title="Carbon Neutral"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere erat a ante vestibulum, in volutpat ligula elementum."
              />
              <IconCard
                icon="https://cdn.builder.io/api/v1/image/assets/24272629d2bd4d1a8956cce15af1b3dc/fc0b00807438000a3e74a82b05fa96c4ddd943d1"
                title="Advanced Dye Tech"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere erat a ante vestibulum, in volutpat ligula elementum."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
