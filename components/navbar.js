import Link from "next/link";
import BuilderImage from "./builder-image";

export default function Navbar() {
  return (
    <nav className="w-full py-4 border-b border-gray-100 bg-white font-poppins">
      <div className="container mx-auto px-5 max-w-[1200px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <h1 className="text-2xl font-semibold tracking-[3px]">
                SHOPAHOLIC
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link href="/">
              <span className="text-[15px] tracking-[1.5px] hover:text-gray-500 transition-colors cursor-pointer">
                HOME
              </span>
            </Link>
            <Link href="/products">
              <span className="text-[15px] tracking-[1.5px] hover:text-gray-500 transition-colors cursor-pointer">
                PRODUCTS
              </span>
            </Link>
            <Link href="/collections">
              <span className="text-[15px] tracking-[1.5px] hover:text-gray-500 transition-colors cursor-pointer">
                COLLECTIONS
              </span>
            </Link>
            <Link href="/about">
              <span className="text-[15px] tracking-[1.5px] hover:text-gray-500 transition-colors cursor-pointer">
                ABOUT
              </span>
            </Link>
          </div>

          {/* Cart and Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <Link href="/cart">
              <div className="cursor-pointer relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <span className="absolute -top-2 -right-2 bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  0
                </span>
              </div>
            </Link>
            <div className="md:hidden">
              <button className="focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Hidden by default */}
      <div className="hidden absolute top-[70px] left-0 w-full bg-white shadow-md md:hidden z-10">
        <div className="container mx-auto px-5 py-4">
          <div className="flex flex-col space-y-4">
            <Link href="/">
              <span className="text-[15px] tracking-[1.5px] block py-2 hover:bg-gray-50 transition-colors cursor-pointer">
                HOME
              </span>
            </Link>
            <Link href="/products">
              <span className="text-[15px] tracking-[1.5px] block py-2 hover:bg-gray-50 transition-colors cursor-pointer">
                PRODUCTS
              </span>
            </Link>
            <Link href="/collections">
              <span className="text-[15px] tracking-[1.5px] block py-2 hover:bg-gray-50 transition-colors cursor-pointer">
                COLLECTIONS
              </span>
            </Link>
            <Link href="/about">
              <span className="text-[15px] tracking-[1.5px] block py-2 hover:bg-gray-50 transition-colors cursor-pointer">
                ABOUT
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
