import ShopaholicHeader from "./shopaholic-header";
import HeroSection from "./hero-section";
import SustainabilitySection from "./sustainability-section";
import BenefitsSection from "./benefits-section";
import ProductsSection from "./products-section";

export default function ShopaholicHomepage() {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-stretch font-['Poppins,_-apple-system,_Roboto,_Helvetica,_sans-serif'] justify-start">
      {/* Header */}
      <ShopaholicHeader />

      {/* Body */}
      <div className="flex mt-[93px] w-full flex-col items-stretch md:max-w-full md:mt-10">
        {/* Main Content */}
        <div className="flex w-full flex-col items-center font-semibold leading-normal justify-start md:max-w-full">
          <HeroSection />
        </div>

        {/* Products & Sections */}
        <div className="flex mt-[93px] w-full flex-col items-center justify-start md:max-w-full md:mt-10">
          <ProductsSection />
          <SustainabilitySection />
          <BenefitsSection />
        </div>
      </div>
    </div>
  );
}
