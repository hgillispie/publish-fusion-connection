import Navbar from "./navbar";

export default function Header() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-8 mb-16 md:mb-12">
      <Navbar />
      <h4 className="text-center md:text-left text-lg mt-5 hidden md:block">
        A statically generated site with Next.js and Builder.io
      </h4>
    </section>
  );
}
