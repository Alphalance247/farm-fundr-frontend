import Image from "next/image";

const HowItWorks = () => {
  const data: {
    id: number;
    step: string;
    image: string;
    title: string;
    description: string;
    text: string;
  }[] = [
    {
      id: 1,
      step: "Step 1",
      image: "/assets/store-front/step1.svg",
      title: "Sign Up/Login",
      text: "text-[#2D865B]",
      description:
        "Begin your journey by creating an account or logging into your existing one. This gives you access to all features designed to streamline your investment process.",
    },
    {
      id: 2,
      step: "Step 2",
      image: "/assets/store-front/step-2.svg",
      title: "Bid for Projects",
      text: "text-[#4379FF]",
      description:
        "Browse through a curated list of projects available for bidding. Each project comes with detailed information, helping you make informed investment decisions.",
    },
    {
      id: 3,
      step: "Step 3",
      image: "/assets/store-front/step-3.svg",
      title: "Monitor Your investments",
      text: "text-[#239BB5]",
      description:
        "Track your investment’s progress in real-time through your dashboard. Stay updated with project milestones, financial performance, and regular reports to ensure transparency and growth.",
    },
  ];
  return (
    <div>
      <div className="flex flex-col gap-y-10 border-b border-[#E2E2E2] pb-8">
        <p className="text-sm text-[#7C7C7C] font-poppinsRegular">
          FarmPady investors contribute to funding the cultivation, maintenance,
          and harvesting of organic apples.
        </p>
        <p className="text-sm text-[#7C7C7C] font-poppinsRegular">
          The investment covers essential costs like organic fertilizers,
          irrigation, pest control (via natural methods), labor, and packaging.
          Once harvested, the apples are sold through established channels,
          including wholesale markets, organic food stores, and
          direct-to-consumer delivery.
        </p>
        <p className="text-sm text-[#7C7C7C] font-poppinsRegular">
          Profits are distributed to investors based on their share of the
          project, with FarmPady handling the logistics, sales, and marketing to
          maximize returns.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-y-12">
        {data.map((el) => (
          <div key={el.id}>
            <p className={`text-base font-poppinsSemiBold  mb-3 ${el?.text}`}>
              {el.step}
            </p>
            <div className="flex gap-x-6">
              <Image src={el.image} alt="step1" width={100} height={100} />

              <div>
                <p className="text-base font-poppinsSemiBold text-[#5F5F5F] mb-2">
                  {el.title}
                </p>
                <p className="text-base text-[#7C7C7C] font-poppinsRegular">
                  {el.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
