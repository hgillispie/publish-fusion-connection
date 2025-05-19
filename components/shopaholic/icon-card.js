import ShopaholicImage from "./shopaholic-image";

export default function IconCard({ icon, title, description }) {
  return (
    <div className="flex min-w-[240px] min-h-[268px] flex-col items-center justify-between w-[341px]">
      <div className="relative w-[91px]">
        <ShopaholicImage src={icon} alt={title} width={91} height={91} />
      </div>
      <div className="text-black font-bold tracking-[3.78px] mt-[21px]">
        {title}
      </div>
      <div className="text-black font-normal text-[18px] mt-[21px] text-center">
        {description}
      </div>
    </div>
  );
}
