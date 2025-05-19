import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full px-[20px] py-[25px] bg-white border-b border-[#dfdfdf]">
      <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto">
        {/* Logo Text Only */}
        <Link href="/" className="text-[15px] font-semibold tracking-[3.15px]">
          SHOPAHOLIC
        </Link>

        {/* Menu Options */}
        <div className="flex items-center gap-[30px] text-[15px] font-semibold tracking-[3.15px]">
          <Link href="/women" className="hover:underline">
            WOMEN
          </Link>
          <Link href="/men" className="hover:underline">
            MEN
          </Link>
          <Link href="/collections" className="hover:underline">
            COLLECTIONS
          </Link>
          <Link href="/shop-all" className="hover:underline">
            SHOP ALL
          </Link>
          <Link href="/sale" className="text-[#B63333] hover:underline">
            SALE
          </Link>
        </div>

        {/* Sign In Button */}
        <Link
          href="/signin"
          className="bg-black text-white text-[15px] font-semibold tracking-[3.15px] px-5 py-[10px]"
        >
          SIGN IN
        </Link>
      </div>
    </div>
  );
}
