import AboutUsCommon from "../components/common/AboutUsCommon";
import HeroCommon from "../components/common/heroCommon";
import LayOuts from "../components/common/Layouts";
// import Contact from "../components/How It Works/contact";
import Process from "../components/How It Works/process";

const HowItWorks = () => {
  return (
    <LayOuts>
      <HeroCommon
        text="How it works"
        img="bg-cover bg-[url('/assets/HowItWorks/howitworks.png')]"
      />
      <Process />
      {/* <Contact
        bg="bg-[#EEFEF6]"
        text="Got any questions?"
        btnText="Meet team"
        url="/meet-team"
        textColor="text-[#5F5F5F]"
      /> */}
      <AboutUsCommon
        btnAvailable={true}
        alignment="items-center"
        btnText="Get started for free"
        heading="Empowering farmers through collaboration"
        subhead="We provide farmers with the resources, support, and networks they need to thrive. Through collaboration, we empower them to boost productivity, improve livelihoods, and create sustainable growth for their communities."
      />
    </LayOuts>
  );
};

export default HowItWorks;
