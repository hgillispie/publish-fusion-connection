import IconCard from "./icon-card";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/24272629d2bd4d1a8956cce15af1b3dc/3a580935349fc284245e2d512c16aa909e84dec2",
      title: "2-Day Shipping",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere erat a ante vestibulum, in volutpat ligula elementum.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/24272629d2bd4d1a8956cce15af1b3dc/baa8e2ee414bf4d111160df5db9d1016ef1c2beb",
      title: "Carbon Neutral",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere erat a ante vestibulum, in volutpat ligula elementum.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/24272629d2bd4d1a8956cce15af1b3dc/76b323884b5c6c2946936908a5834c023c117ec5",
      title: "Advanced Dye Tech",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere erat a ante vestibulum, in volutpat ligula elementum.",
    },
  ];

  return (
    <div className="bg-[#FAFAFA] flex mt-[93px] w-full pt-[99px] pb-[107px] flex-col items-center text-center justify-start md:max-w-full md:pb-[100px] md:mt-10">
      <div className="flex w-[1243px] max-w-full flex-col items-stretch">
        <div className="text-black text-[25px] font-semibold leading-normal tracking-[5.25px] self-center md:max-w-full">
          WHAT'S DIFFERENT ABOUT SHOPAHOLIC
        </div>
        <div className="flex mt-[113px] items-start gap-[100px] text-[18px] justify-between flex-wrap md:max-w-full md:mt-10">
          {benefits.map((benefit, index) => (
            <IconCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
