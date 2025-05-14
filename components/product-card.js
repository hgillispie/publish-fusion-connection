import Link from "next/link";
import BuilderImage from "./builder-image";

export default function ProductCard({ title, image, price, slug }) {
  return (
    <Link
      href={`/products/${slug}`}
      className="group block overflow-hidden rounded-md border border-gray-200 transition-all hover:shadow-lg"
    >
      <div className="relative h-[200px] sm:h-[300px]">
        {image ? (
          <BuilderImage
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            width={600}
            height={600}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-100">
            <p className="text-gray-400">No image</p>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium">{title}</h3>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-lg font-bold">${price}</p>
          <button className="rounded bg-black px-3 py-1 text-xs text-white transition-colors hover:bg-gray-800">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
}
