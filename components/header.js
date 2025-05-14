import Link from "next/link";

export default function Header() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        <Link href="/" className="hover:underline">
          Content
        </Link>
      </h1>
      <div className="flex flex-col md:flex-row items-center">
        <h4 className="text-center md:text-left text-lg mt-5 md:pl-8 md:mr-6">
          A statically generated site with Next.js and Builder.io
        </h4>
        <Link
          href="/asteroids"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md mt-4 md:mt-0 transition-colors"
        >
          Asteroid Visualization
        </Link>
      </div>
    </section>
  );
}
