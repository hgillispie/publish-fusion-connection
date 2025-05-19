import Head from "next/head";
import { CMS_NAME } from "@/lib/constants";
import LayoutWithNavbar from "@/components/layout-with-navbar";
import ShopaholicHeader from "@/components/shopaholic/shopaholic-header";
import HeroSection from "@/components/shopaholic/hero-section";
import ProductsSection from "@/components/shopaholic/products-section";
import SustainabilitySection from "@/components/shopaholic/sustainability-section";
import BenefitsSection from "@/components/shopaholic/benefits-section";

export default function TestPage() {
  return (
    <>
      <Head>
        <title>{`Shopaholic Test Page | ${CMS_NAME}`}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="bg-white flex flex-col overflow-hidden items-stretch font-['Poppins,_-apple-system,_Roboto,_Helvetica,_sans-serif'] justify-start">
        {/* Navbar/Header */}
        <ShopaholicHeader />

        {/* Main Content */}
        <div className="flex mt-[93px] w-full flex-col items-stretch md:max-w-full md:mt-10 px-5">
          <div className="flex w-full flex-col items-center font-semibold leading-normal justify-start md:max-w-full">
            <HeroSection />
          </div>

          <div className="flex mt-[93px] w-full flex-col items-center justify-start md:max-w-full md:mt-10">
            {/* Step Into Fresh Styles & Product Grid */}
            <div className="mb-[93px] md:mb-10">
              <div className="flex w-full max-w-[1200px] items-center gap-[10px] text-[25px] text-[#1F1F1F] font-semibold text-center tracking-[5.25px] leading-normal justify-center">
                STEP INTO FRESH STYLES
              </div>
              <ProductsSection />
            </div>

            {/* Sustainability Section */}
            <SustainabilitySection />

            {/* Shop Our Favorites Section */}
            <div className="mt-[93px] md:mt-10 flex flex-col items-center w-full">
              <div className="flex w-full max-w-[1200px] items-center gap-[10px] text-[25px] text-[#1F1F1F] font-semibold text-center tracking-[5.25px] leading-normal justify-center">
                SHOP OUR FAVORITES
              </div>
              <ProductsSection />
              <div className="self-stretch bg-black flex mt-[63px] px-5 py-[10px] items-center gap-[10px] text-white text-[15px] font-semibold tracking-[3.15px] leading-normal justify-center md:mt-10 max-w-[200px] mx-auto">
                SHOP ALL
              </div>
            </div>

            {/* Benefits Section */}
            <BenefitsSection />
          </div>
        </div>
      </div>
    </>
  );
}
