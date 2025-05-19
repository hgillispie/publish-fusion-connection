import ProductCard from "./product-card";
import ShopaholicImage from "./shopaholic-image";

export default function ProductsSection() {
  const products = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/24272629d2bd4d1a8956cce15af1b3dc/c7c0dc80625263fcbcbb8e733ef4595b89b46dee",
      title: "Checker Fleece",
      price: "92",
      color: "Soft Blue",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/24272629d2bd4d1a8956cce15af1b3dc/b993a1035960676170c04f80f4199c598d5aa03c",
      title: "Fog Linen Jacket",
      price: "134",
      color: "Soft Blue",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/24272629d2bd4d1a8956cce15af1b3dc/faf8b65ae3d5d3dc3224b010e6a0616ee021d4ee",
      title: "Angular Sunglasses",
      price: "31",
      color: "Rose",
    },
  ];

  const featuredProducts = Array(4).fill(products[0]);

  return (
    <div className="flex flex-col items-center gap-[93px] w-full md:gap-10">
      {/* First Product Section */}
      <div>
        <div className="flex w-[1200px] max-w-full items-center gap-[10px] text-[25px] text-[#1F1F1F] font-semibold text-center tracking-[5.25px] leading-normal justify-center">
          STEP INTO FRESH STYLES
        </div>
        <div className="flex mt-[43px] w-[1198px] max-w-full items-start gap-[25px] overflow-hidden text-[15px] text-center tracking-[0.75px] justify-start flex-wrap md:mt-10">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              price={product.price}
              color={product.color}
            />
          ))}
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="flex flex-col items-center">
        <div className="flex w-[1200px] max-w-full items-center gap-[10px] text-[25px] text-[#1F1F1F] font-semibold text-center tracking-[5.25px] leading-normal justify-center">
          SHOP OUR FAVORITES
        </div>
        <div className="flex mt-[63px] items-start gap-[33px] text-center tracking-[0.75px] justify-start flex-wrap md:max-w-full md:mt-10">
          {featuredProducts.map((product, index) => (
            <div
              key={index}
              className="flex min-w-[240px] flex-col items-stretch justify-start w-[339px]"
            >
              <div className="relative w-[339px] max-w-full">
                <ShopaholicImage
                  src="https://cdn.builder.io/api/v1/image/assets/24272629d2bd4d1a8956cce15af1b3dc/000e6998788e0d6a03d576303978f317a3db9a18"
                  alt="Product"
                  width={339}
                  height={273}
                  className="rounded-md w-full"
                />
              </div>
              <div className="flex mt-5 flex-col items-stretch justify-start">
                <div className="flex items-start gap-[184px] justify-start">
                  <div className="text-black font-normal leading-normal">
                    Checker Fleece
                  </div>
                  <div className="text-black font-semibold">$92</div>
                </div>
                <div className="text-[#656565] font-normal leading-normal self-start mt-[7px]">
                  Soft Blue
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="self-stretch bg-black flex mt-[63px] px-5 py-[10px] items-center gap-[10px] text-white text-[15px] font-semibold tracking-[3.15px] leading-normal justify-center md:mt-10">
          SHOP ALL
        </div>
      </div>
    </div>
  );
}
