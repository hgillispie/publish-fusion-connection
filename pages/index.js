import { useState, useEffect } from "react";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import Layout from "../components/layout";
import BuilderImage from "../components/builder-image";
import Head from "next/head";
import { CMS_NAME, BUILDER_CONFIG } from "@/lib/constants";
import Link from "next/link";
import Navbar from "../components/navbar";
import { getPage } from "../lib/api";

// Initialize Builder with API key
builder.init(BUILDER_CONFIG.apiKey);

export default function Index({ page, preview }) {
  const isPreviewing = useIsPreviewing();
  const [hydrated, setHydrated] = useState(false);

  // This effect is needed to ensure proper client-side hydration
  useEffect(() => {
    setHydrated(true);
  }, []);

  // Show the Builder component if we have a page, otherwise fallback to default UI
  const showBuilderContent = Boolean(page) || isPreviewing;

  // Default HomePage UI that matches the current design
  const DefaultHomePage = () => (
    <div
      className="bg-white flex flex-col overflow-hidden items-stretch font-poppins justify-center"
      style={{
        fontFamily: "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
      }}
    >
      <Navbar />
      <div className="self-center flex w-full max-w-[1200px] flex-col items-center justify-center">
        <div className="flex w-full flex-col items-stretch font-semibold leading-normal">
          <div className="relative rounded-lg overflow-hidden w-full min-h-[588px]">
            <BuilderImage
              src="https://cdn.builder.io/api/v1/image/assets/24272629d2bd4d1a8956cce15af1b3dc/f5f486a35a80c0e8aea6037c50a5571ee46cf816"
              alt="Essential Accessories"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center pl-20 pr-4 py-[237px] items-end md:pl-20 md:py-[237px] sm:pl-5 sm:py-[100px]">
              <div className="text-white text-[34px] tracking-[7.14px] relative">
                ESSENTIAL ACCESSORIES
              </div>
              <Link href="/products">
                <div className="bg-white flex mt-5 mr-[22px] -mb-[46px] px-5 py-[10px] items-center gap-[10px] text-[15px] text-black tracking-[3.15px] justify-center cursor-pointer sm:mr-[10px] sm:mb-[10px]">
                  Shop Now
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full flex mt-[50px] items-center gap-[10px] text-[25px] text-[#1F1F1F] font-semibold text-center tracking-[5.25px] leading-normal justify-center sm:mt-10">
          STEP INTO FRESH STYLES
        </div>

        <div className="flex mt-[50px] w-full items-start gap-[25px] overflow-x-auto text-[15px] text-center tracking-[0.75px] pb-4 sm:mt-10">
          {/* Product 1 */}
          <div className="flex min-w-[240px] flex-col items-stretch justify-start w-[339px]">
            <div
              className="relative rounded-lg overflow-hidden"
              style={{ width: "339px", paddingBottom: "80.5%" }}
            >
              <BuilderImage
                src="https://cdn.builder.io/api/v1/image/assets/24272629d2bd4d1a8956cce15af1b3dc/6fbe3eec1b440f317788d099eda9885923a7fbc6"
                alt="Checker Fleece"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="flex mt-5 flex-col items-stretch justify-start">
              <div className="flex items-start justify-between">
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

          {/* Product 2 */}
          <div className="flex min-w-[240px] flex-col items-stretch justify-start w-[339px]">
            <div
              className="relative rounded-lg overflow-hidden"
              style={{ width: "339px", paddingBottom: "80.5%" }}
            >
              <BuilderImage
                src="https://cdn.builder.io/api/v1/image/assets/24272629d2bd4d1a8956cce15af1b3dc/9fa19dc6c196122771befb5d5a0bcb79569a45f2"
                alt="Fog Linen Jacket"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="flex mt-5 w-full max-w-[339px] flex-col items-stretch justify-start">
              <div className="flex w-full items-start justify-between">
                <div className="text-black font-normal leading-normal">
                  Fog Linen Jacket
                </div>
                <div className="text-black font-semibold">$134</div>
              </div>
              <div className="text-[#656565] font-normal leading-normal self-start mt-[7px]">
                Soft Blue
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="flex min-w-[240px] flex-col items-stretch justify-start w-[339px]">
            <div
              className="relative rounded-lg overflow-hidden"
              style={{ width: "339px", paddingBottom: "80.5%" }}
            >
              <BuilderImage
                src="https://cdn.builder.io/api/v1/image/assets/24272629d2bd4d1a8956cce15af1b3dc/cba3d52ac13d5e895b713537f0b523e5fd3e374a"
                alt="Angular Sunglasses"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="flex mt-5 w-full max-w-[339px] flex-col items-stretch justify-start">
              <div className="flex w-full items-start justify-between">
                <div className="text-black font-normal leading-normal">
                  Angular Sunglasses
                </div>
                <div className="text-black font-semibold">$31</div>
              </div>
              <div className="text-[#656565] font-normal leading-normal self-start mt-[7px]">
                Rose
              </div>
            </div>
          </div>

          {/* Product 4 */}
          <div className="flex min-w-[240px] flex-col items-stretch justify-start w-[339px]">
            <div
              className="relative rounded-lg overflow-hidden"
              style={{ width: "339px", paddingBottom: "80.5%" }}
            >
              <BuilderImage
                src="https://cdn.builder.io/api/v1/image/assets/24272629d2bd4d1a8956cce15af1b3dc/6ea3eb23e6b0b7d902fffd400c23d0a13b90284d"
                alt="Checker Fleece"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="flex mt-5 flex-col items-stretch justify-start">
              <div className="flex items-start justify-between">
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
        </div>

        {/* Sustainability Section */}
        <div className="flex mt-[50px] items-center gap-[40px_43px] text-black font-semibold leading-normal justify-start flex-wrap sm:mt-10">
          <div className="flex-1 min-w-[240px] my-auto flex flex-col items-stretch justify-start md:max-w-[685px]">
            <div className="text-[25px] tracking-[5.25px]">
              OUR COMMITMENT TO SUSTAINABILITY
            </div>
            <div className="text-[18px] font-normal mt-[46px] sm:mt-10">
              At Shopaholic, we believe fashion can be both stylish and
              eco-friendly. That's why we craft our clothing using sustainable
              materials like organic cotton, recycled fibers, and eco-friendly
              dyes. Our jeans are designed with the planet in mind—using
              water-saving technologies and ethical manufacturing processes.
            </div>
            <div className="self-start bg-[#C8E2EE] flex mt-[46px] px-5 py-[10px] items-center gap-[10px] text-[15px] tracking-[3.15px] justify-center cursor-pointer sm:mt-10">
              Learn More
            </div>
          </div>
          <div
            className="relative rounded-lg overflow-hidden flex-1 min-w-[240px] my-auto md:max-w-[470px]"
            style={{ paddingBottom: "105%" }}
          >
            <BuilderImage
              src="https://cdn.builder.io/api/v1/image/assets/24272629d2bd4d1a8956cce15af1b3dc/d954ad608a20840cd3a81f29461c95c988371492"
              alt="Sustainable Jeans"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        {/* Shop Favorites Section */}
        <div className="flex mt-[50px] min-h-[655px] w-full max-w-[1200px] flex-col items-center text-[15px] justify-between sm:mt-10">
          <div className="w-full flex items-center gap-[10px] text-[25px] text-[#1F1F1F] font-semibold text-center tracking-[5.25px] leading-normal justify-center">
            SHOP OUR FAVORITES
          </div>

          <div className="w-full flex mt-10 items-center gap-[40px_89px] text-center tracking-[0.75px] justify-between flex-wrap">
            {/* Product Card 1 */}
            <div className="flex-1 min-w-[240px] my-auto flex flex-col items-stretch justify-center md:max-w-[339px]">
              <div
                className="relative rounded-lg overflow-hidden"
                style={{ width: "100%", paddingBottom: "80.5%" }}
              >
                <BuilderImage
                  src="https://cdn.builder.io/api/v1/image/assets/24272629d2bd4d1a8956cce15af1b3dc/6fbe3eec1b440f317788d099eda9885923a7fbc6"
                  alt="Checker Fleece"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="flex mt-5 flex-col items-stretch justify-start">
                <div className="flex items-start justify-between">
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

            {/* Product Card 2 */}
            <div className="flex-1 min-w-[240px] my-auto flex flex-col items-center justify-center md:max-w-[339px]">
              <div
                className="relative rounded-lg overflow-hidden"
                style={{ width: "100%", paddingBottom: "80.5%" }}
              >
                <BuilderImage
                  src="https://cdn.builder.io/api/v1/image/assets/24272629d2bd4d1a8956cce15af1b3dc/000e6998788e0d6a03d576303978f317a3db9a18"
                  alt="Checker Fleece"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="flex mt-5 flex-col items-stretch justify-start">
                <div className="flex items-start justify-between">
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

            {/* Product Card 3 */}
            <div className="flex-1 min-w-[240px] my-auto flex flex-col items-end justify-center md:max-w-[339px]">
              <div
                className="relative rounded-lg overflow-hidden"
                style={{ width: "100%", paddingBottom: "80.5%" }}
              >
                <BuilderImage
                  src="https://cdn.builder.io/api/v1/image/assets/24272629d2bd4d1a8956cce15af1b3dc/6fbe3eec1b440f317788d099eda9885923a7fbc6"
                  alt="Checker Fleece"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="flex mt-5 flex-col items-stretch justify-start">
                <div className="flex items-start justify-between">
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
          </div>

          <Link href="/products">
            <div className="w-full bg-black flex mt-10 px-5 py-[10px] items-center gap-[10px] text-white font-semibold tracking-[3.15px] leading-normal justify-center cursor-pointer">
              SHOP ALL
            </div>
          </Link>
        </div>
      </div>

      {/* What's Different Section */}
      <div className="bg-[#FAFAFA] flex mt-[50px] w-full pt-[99px] pb-[107px] flex-col items-center text-center justify-start sm:mt-10 sm:pb-[100px]">
        <div className="flex w-full max-w-[1243px] flex-col items-stretch">
          <div className="text-black text-[25px] font-semibold leading-normal tracking-[5.25px] self-center">
            WHAT'S DIFFERENT ABOUT SHOPAHOLIC
          </div>

          <div className="flex mt-[53px] min-h-[268px] items-start gap-[40px_100px] text-[18px] justify-between flex-wrap sm:mt-10">
            {/* Icon Card 1 */}
            <div className="flex-1 min-w-[240px] min-h-[268px] flex flex-col items-center justify-between md:max-w-[341px]">
              <div className="relative w-[91px] h-[91px]">
                <BuilderImage
                  src="https://cdn.builder.io/api/v1/image/assets/24272629d2bd4d1a8956cce15af1b3dc/98cebbbd5a1dd7705e5a1fab4261f22b1208fadf"
                  alt="2-Day Shipping"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="text-black font-bold tracking-[3.78px] mt-[21px]">
                2-Day Shipping
              </div>
              <div className="text-black font-normal leading-normal mt-[21px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                posuere erat a ante vestibulum, in volutpat ligula elementum.
              </div>
            </div>

            {/* Icon Card 2 */}
            <div className="flex-1 min-w-[240px] min-h-[268px] flex flex-col items-center justify-between md:max-w-[341px]">
              <div className="relative w-[91px] h-[91px]">
                <BuilderImage
                  src="https://cdn.builder.io/api/v1/image/assets/24272629d2bd4d1a8956cce15af1b3dc/874a7ccef8a5951e026ff954e4c1b50850f22853"
                  alt="Carbon Neutral"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="text-black font-bold tracking-[3.78px] mt-[21px]">
                Carbon Neutral
              </div>
              <div className="text-black font-normal leading-normal mt-[21px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                posuere erat a ante vestibulum, in volutpat ligula elementum.
              </div>
            </div>

            {/* Icon Card 3 */}
            <div className="flex-1 min-w-[240px] min-h-[268px] flex flex-col items-center justify-between md:max-w-[341px]">
              <div className="relative w-[91px] h-[91px]">
                <BuilderImage
                  src="https://cdn.builder.io/api/v1/image/assets/24272629d2bd4d1a8956cce15af1b3dc/80f0b01486406cdbeeb2d130c77c6e1d2fb3fb2e"
                  alt="Advanced Dye Tech"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="text-black font-bold tracking-[3.78px] mt-[21px]">
                Advanced Dye Tech
              </div>
              <div className="text-black font-normal leading-normal mt-[21px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                posuere erat a ante vestibulum, in volutpat ligula elementum.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{`E-commerce Store with ${CMS_NAME}`}</title>
        </Head>

        {/* Show either Builder content or default UI */}
        {showBuilderContent ? (
          <BuilderComponent
            model={BUILDER_CONFIG.pageModel}
            content={page}
            options={{ includeRefs: true }}
          >
            {/* Fallback content will be shown when in editing mode with no content */}
            {!hydrated || !page ? <DefaultHomePage /> : null}
          </BuilderComponent>
        ) : (
          <DefaultHomePage />
        )}
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false, previewData }) {
  // Fetch Builder.io content for the homepage
  const page = await getPage("/", preview, previewData);

  return {
    props: {
      page: page || null,
      preview: preview || false,
    },
    // Revalidate content every minute
    revalidate: 60,
  };
}
