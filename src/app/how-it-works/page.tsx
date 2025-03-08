import AboutUsCommon from "../components/common/AboutUsCommon";
import HeroCommon from "../components/common/heroCommon";
import Contact from "../components/How It Works/contact";
import Process from "../components/How It Works/process";

const HowItWorks = () => {
  return (
    <>
      <HeroCommon
        text="How it works"
        img="bg-cover bg-[url('/assets/HowItWorks/howitworks.jpeg')]"
      />
      <Process />
      <Contact />
      <AboutUsCommon
        btnAvailable={true}
        alignment="items-center"
        imgUrl="/assets/HowItWorks/3.png"
        btnText="Get started for free"
        heading="Empowering farmers through collaboration"
        subhead="We provide farmers with the resources, support, and networks they need to thrive. Through collaboration, we empower them to boost productivity, improve livelihoods, and create sustainable growth for their communities."
      />
    </>
  );
};

export default HowItWorks;
