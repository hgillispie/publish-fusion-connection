import Image from "next/image";
import ProductCard from "./product-card";
import IconCard from "./icon-card";
import Navbar from "./navbar";

export default function ShopHomepage() {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-stretch font-['Poppins,_-apple-system,_Roboto,_Helvetica,_sans-serif'] justify-start">
      {/* Navbar component is now imported separately */}

      {/* Body */}
      <div className="flex mt-[93px] w-full flex-col items-stretch md:max-w-full md:mt-10">
        <div className="flex w-full flex-col items-center font-semibold leading-normal justify-start md:max-w-full">
          {/* Hero */}
          <div className="flex w-[1200px] max-w-full flex-col items-stretch">
            <div className="rounded-md relative flex min-h-[588px] w-full px-20 py-[237px] flex-col items-end justify-center md:max-w-full md:px-5 md:py-[100px]">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c625a9cb4fbf49a694e76ecc872a4fc79f92fa7c76be5d731d9329a79df6a15?apiKey=8f6bae86bfa3487eb1a18f263118c832&"
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
              image="https://cdn.builder.io/api/v1/image/assets/TEMP/2380b67c5f144df98916f11a6d5121a15dd6af2f9b7f01c2b9db2c79f10c6ab5?apiKey=8f6bae86bfa3487eb1a18f263118c832&"
              productName="Checker Fleece"
              price="$92"
              color="Soft Blue"
            />
            <ProductCard
              image="https://cdn.builder.io/api/v1/image/assets/TEMP/1f0bb6e5bbf0f5c9eca3c599ec5aec5ca2b3491199d8e2fed35a6a0ce1fddaf3?apiKey=8f6bae86bfa3487eb1a18f263118c832&"
              productName="Fog Linen Jacket"
              price="$134"
              color="Soft Blue"
            />
            <ProductCard
              image="https://cdn.builder.io/api/v1/image/assets/TEMP/bf14f3cc8fa340e7b8ec6fdc08d2bcce7c40e0dc3fbccea38b8bad3ac8a83a84?apiKey=8f6bae86bfa3487eb1a18f263118c832&"
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
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c69b43fa7cd58d97a7acdea1fa3fdee9ef415a9b24295ffbcef69b3d9b5c7c2?apiKey=8f6bae86bfa3487eb1a18f263118c832&"
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
                image="https://cdn.builder.io/api/v1/image/assets/TEMP/cd00347bf9d40ef35eadda73ce6a65e1d1a94c36deb01b5ed24fa68bc3c8f041?apiKey=8f6bae86bfa3487eb1a18f263118c832&"
                productName="Checker Fleece"
                price="$92"
                color="Soft Blue"
              />
              <ProductCard
                image="https://cdn.builder.io/api/v1/image/assets/TEMP/08bc431c5da86ce70a3d31dc5fffad40eadee3e76f35f7c7da9dc8ff1c3f62ae?apiKey=8f6bae86bfa3487eb1a18f263118c832&"
                productName="Checker Fleece"
                price="$92"
                color="Soft Blue"
              />
              <ProductCard
                image="https://cdn.builder.io/api/v1/image/assets/TEMP/4a58e6b1d9ce1a22e9cbfcb83ce5e09b551c7f37c9bdb14a4bc2da1edbb661a2?apiKey=8f6bae86bfa3487eb1a18f263118c832&"
                productName="Checker Fleece"
                price="$92"
                color="Soft Blue"
              />
              <ProductCard
                image="https://cdn.builder.io/api/v1/image/assets/TEMP/35a55e88c9ccf3a8ecaec3fcf559eb71a79a6bd83b01f7cda13d28c08a96d729?apiKey=8f6bae86bfa3487eb1a18f263118c832&"
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
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/c1f57ea5a40a36e9e9f3dfbde32c8c86c8a1df0c70b8d0cff131c0a2975ba0c9?apiKey=8f6bae86bfa3487eb1a18f263118c832&"
                title="2-Day Shipping"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere erat a ante vestibulum, in volutpat ligula elementum."
              />
              <IconCard
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/1fe0d30b8b96e97be4ea83f656d9ad5f66fc70cee8c50a94e1ef3584a0f06fa8?apiKey=8f6bae86bfa3487eb1a18f263118c832&"
                title="Carbon Neutral"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere erat a ante vestibulum, in volutpat ligula elementum."
              />
              <IconCard
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/2b7a84fbb7b78c4fa2dbf446254eb7bc8a42a72b94f83f2d4c2d9d94d33032b3?apiKey=8f6bae86bfa3487eb1a18f263118c832&"
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
