import Container from "../common/container";
import Image from "next/image";
import SlideInSection from "../common/slideInSection";

const MissionVision = () => {
  const mission = [
    {
      icons: "/assets/about/2.svg",
      heading: "Vision",
      subHead:
        "To become the foremost platform revolutionizing agriculture through seamless collaboration between farmers and investors, fostering innovation, sustainability, and economic growth in the agricultural sector.",
    },
    {
      icons: "/assets/about/1.svg",
      heading: "Mission",
      subHead:
        "To connect farmers and investors by building partnerships that empower agricultural projects, to promote sustainable farming practices, and contribute to global food security, while ensuring shared prosperity.",
    },
  ];

  return (
    <SlideInSection>
      <section className="bg-[#EEFEF6] relative">
        <div className="absolute bottom-0 right-0 z-[1]">
          <Image
            src="/assets/about/right.svg"
            width={200}
            height={400}
            alt="positionlogo"
          />
        </div>
        <Container>
          <div className="grid grid-cols-2 gap-x-16 relative z-10">
            {mission.map((items, i) => (
              <div
                key={i}
                className="bg-[linear-gradient(90deg,#2D865B_0%,#12482F_100%)] px-4 py-8 flex items-start gap-x-5 rounded-[20px] border-l-[10px] border-b-[10px] border-[#51F4A6]"
              >
                <Image width={60} height={60} src={items?.icons} alt="" />
                <div>
                  <p className="text-2xl font-aristoBold text-white mb-2">
                    {items?.heading}
                  </p>
                  <p className="text-white text-lg font-poppinsRegular">
                    {items?.subHead}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </SlideInSection>
  );
};

export default MissionVision;
