import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
          <Link href="/" className="hover:underline">
            Store
          </Link>
        </h2>
        <nav>
          <ul className="flex items-center space-x-8">
            <li>
              <Link href="/" className="text-lg hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-lg hover:underline">
                Products
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
