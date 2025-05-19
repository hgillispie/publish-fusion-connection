import Link from "next/link";
import ShopaholicImage from "./shopaholic/shopaholic-image";

export default function ShopaholicNavbar() {
  return (
    <div className="flex w-full flex-col items-stretch text-[15px] font-semibold tracking-[3.15px]">
      <div className="bg-white border-[#DFDFDF] border-solid border-b flex w-full px-[70px] py-[25px] flex-col items-center justify-center md:max-w-full md:px-5">
        <div className="flex w-full max-w-[1200px] items-center gap-[100px] justify-between flex-wrap md:max-w-full">
          {/* Logo Section */}
          <div className="self-stretch flex my-auto items-center gap-[14px] text-black whitespace-nowrap justify-start md:whitespace-normal">
            <ShopaholicImage
              src="https://cdn.builder.io/api/v1/image/assets/24272629d2bd4d1a8956cce15af1b3dc/3f71918de7367067ecc9b97fce2a4a64ea7f0528"
              alt="Shopaholic Logo"
              width={24}
              height={24}
              className="self-stretch my-auto flex-shrink-0"
            />
            <Link href="/" className="self-stretch my-auto">
              SHOPAHOLIC
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="self-stretch flex min-w-[240px] my-auto items-center gap-[30px] text-black leading-normal justify-start flex-wrap md:max-w-full">
            <Link
              href="/women"
              className="self-stretch my-auto hover:underline"
            >
              WOMEN
            </Link>
            <Link href="/men" className="self-stretch my-auto hover:underline">
              MEN
            </Link>
            <Link
              href="/collections"
              className="self-stretch my-auto hover:underline"
            >
              COLLECTIONS
            </Link>
            <Link href="/shop" className="self-stretch my-auto hover:underline">
              SHOP ALL
            </Link>
            <Link
              href="/sale"
              className="text-[#B63333] self-stretch my-auto hover:underline"
            >
              SALE
            </Link>
          </div>

          {/* Sign In Button */}
          <div className="self-stretch flex my-auto items-center gap-[30px] text-white leading-normal justify-start">
            <button className="self-stretch bg-black flex my-auto px-5 py-[10px] items-center gap-[10px] justify-center cursor-pointer hover:bg-gray-800 transition-colors">
              SIGN IN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
