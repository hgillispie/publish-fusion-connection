import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex w-full flex-col items-stretch text-[15px] font-semibold tracking-[3.15px]">
      <div className="bg-white border-[#dfdfdf] border-solid border-b flex w-full px-[70px] py-[25px] flex-col items-center justify-center md:px-5">
        <div className="flex w-full max-w-[1200px] items-center gap-[100px] justify-between flex-wrap md:max-w-full">
          {/* Logo */}
          <div className="self-stretch flex mt-auto mb-auto items-center gap-[14px] text-black whitespace-nowrap justify-start md:whitespace-normal">
            <div className="self-stretch relative flex mt-auto mb-auto w-6 flex-shrink-0">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b34ba489a9f49578eb87c294ec2ee61cd3c178febb84c7cac0ded8ea0cd4fef?apiKey=8f6bae86bfa3487eb1a18f263118c832&"
                alt="Logo"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <Link href="/" className="self-stretch mt-auto mb-auto">
              SHOPAHOLIC
            </Link>
          </div>

          {/* Menu Options */}
          <div className="self-stretch flex min-w-[240px] mt-auto mb-auto items-center gap-[30px] text-black leading-normal justify-start flex-wrap md:max-w-full">
            <Link href="/women" className="self-stretch mt-auto mb-auto">
              WOMEN
            </Link>
            <Link href="/men" className="self-stretch mt-auto mb-auto">
              MEN
            </Link>
            <Link href="/collections" className="self-stretch mt-auto mb-auto">
              COLLECTIONS
            </Link>
            <Link href="/shop-all" className="self-stretch mt-auto mb-auto">
              SHOP ALL
            </Link>
            <Link
              href="/sale"
              className="text-[#B63333] self-stretch mt-auto mb-auto"
            >
              SALE
            </Link>
          </div>

          {/* Sign In Button */}
          <div className="self-stretch flex mt-auto mb-auto items-center gap-[30px] text-white leading-normal justify-start">
            <Link
              href="/signin"
              className="self-stretch bg-black flex mt-auto mb-auto px-5 py-[10px] items-center gap-[10px] justify-center"
            >
              SIGN IN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
