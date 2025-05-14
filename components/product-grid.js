import ProductCard from "./product-card";

export default function ProductGrid({ products }) {
  if (!products || products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 border border-gray-200 rounded-md">
        <p className="text-gray-500 italic">No products found</p>
        <p className="text-sm text-gray-400 mt-2">
          Products will appear here when added to the Builder.io CMS
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.data.title}
          image={product.data.image}
          price={product.data.price}
          slug={product.data.slug}
        />
      ))}
    </div>
  );
}
