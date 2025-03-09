import MissionVision from "../components/About-Us/MissionVission";
import WhatWeOffer from "../components/About-Us/WhatweOffer";
import AboutUsCommon from "../components/common/AboutUsCommon";
import HeroCommon from "../components/common/heroCommon";

const AboutUs = () => {
  return (
    <>
      <HeroCommon img="bg-cover bg-[url('/assets/about/hero.png')]" />
      <AboutUsCommon
        alignment="items-center"
        paragraphHeading={true}
        btnAvailable={false}
      />
      <MissionVision />
      <WhatWeOffer />
    </>
  );
};

export default AboutUs;
