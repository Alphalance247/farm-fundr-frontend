import MissionVision from "../components/About-Us/MissionVission";
import WhatWeOffer from "../components/About-Us/WhatweOffer";
import AboutUsCommon from "../components/common/AboutUsCommon";
import HeroCommon from "../components/common/heroCommon";

const AboutUs = () => {
  return (
    <>
      <HeroCommon />
      <AboutUsCommon paragraphHeading={true} btnAvailable={false} />
      <MissionVision />
      <WhatWeOffer />
    </>
  );
};

export default AboutUs;
