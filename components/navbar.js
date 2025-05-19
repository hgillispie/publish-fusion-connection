import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full py-4">
      <Link
        href="/"
        className="text-2xl font-bold tracking-tighter leading-tight"
      >
        SHOPAHOLIC
      </Link>

      <div className="flex items-center space-x-8 text-sm font-semibold tracking-wider">
        <Link href="/women" className="hover:underline uppercase">
          Women
        </Link>
        <Link href="/men" className="hover:underline uppercase">
          Men
        </Link>
        <Link href="/collections" className="hover:underline uppercase">
          Collections
        </Link>
        <Link href="/shop" className="hover:underline uppercase">
          Shop All
        </Link>
        <Link href="/sale" className="text-[#B63333] hover:underline uppercase">
          Sale
        </Link>
      </div>

      <div className="flex items-center">
        <button className="bg-black text-white px-5 py-2 text-sm font-semibold tracking-wider uppercase">
          Sign In
        </button>
      </div>
    </nav>
  );
}
