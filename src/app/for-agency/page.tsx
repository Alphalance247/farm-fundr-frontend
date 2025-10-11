import Container from "@/app/components/common/container";
import LayOuts from "@/app/components/common/Layouts";
import Overview from "@/app/components/Home-Page-Redesign/overview";
import Faqs from "@/app/components/Home/faqs";
import FeaturedProject from "@/app/components/Home/FeaturedProjects";
import FarmerInvestorHero from "@/app/components/How It Works/common/farmerInvestorHero";
import LearnMore from "@/app/components/How It Works/common/learnMore";
import WhyFarmPady from "@/app/components/How It Works/common/whyFarmPady";
import Image from "next/image";

const ForFarmers = () => {
  const list = [
    {
      image: "/assets/HowItWorks/redesign/verified.svg",
      head: "Verified Farms",
      subhed: "Work only with certified farms you can trust.",
    },
    {
      image: "/assets/HowItWorks/redesign/clip.svg",
      head: "Seamless Grant management",
      subhed: "Create, review, and approve applications digitally.",
    },
    {
      image: "/assets/HowItWorks/redesign/trend.svg",
      head: "Impact Tracking",
      subhed: "Monitor the results of your grants with data and reports.",
    },
  ];

  const learnMorelist = [
    {
      image: "/assets/HowItWorks/redesign/one.svg",
      head: "Register/Login",
      subhed:
        "Create an account or log in to access the tools for Creating and managing your grant.",
    },
    {
      image: "/assets/HowItWorks/redesign/2.svg",
      head: "Complete KYC Verification",
      subhed:
        "To ensure security and compliance, complete the KYC (Know Your Customer) process for a secure experience.",
    },
    {
      image: "/assets/HowItWorks/redesign/3.svg",
      head: "Create Grant",
      subhed: "Create a grant opportunity with your funding criteria.",
    },

    {
      image: "/assets/HowItWorks/redesign/4.svg",
      head: "Receive applications",
      subhed:
        "Farmers apply directly through their Dashboard or agency customized public grantpage.",
    },

    {
      image: "/assets/HowItWorks/redesign/5.svg",
      head: "Review Applications",
      subhed: "Review farmers applications and approve selected farms.",
    },
    {
      image: "/assets/HowItWorks/redesign/6.svg",
      head: "Disburse/Track",
      subhed: "Disburse funds and track project outcomes.",
    },
  ];
  return (
    <LayOuts>
      <section className="bg-[#EEFEF6] relative">
        <div className="absolute z-[0] top-0 right-0 bottom-0 left-0">
          <Image
            src="/assets/Homepage-Redesign/background.png"
            width={2000}
            height={1505}
            className="w-full h-full"
            alt="positionlogo"
          />
        </div>
        <div className="absolute z-[7] top-0 left-0 right-0 opacity-50">
          <Image
            src="/assets/Homepage-Redesign/s1.png"
            width={1581}
            height={967}
            className="w-full h-full"
            alt="positionlogo"
          />
        </div>
        <Container>
          <FarmerInvestorHero
            text="Empower Farmers. Create Real Impact"
            subheadText="Post grants, reach verified farmers, and track how your funding changes lives — all in one digital platform."
            imgSrc="/assets/HowItWorks/redesign/1c.png"
            investFarmText="Create Impact like "
            name="FarmPady"
            btnLink="/user-select"
            btnText="Create a Grant"
          />
        </Container>
      </section>
      <WhyFarmPady
        list={list}
        text="Why Agencies Choose FarmPady"
        className=""
        subheadText="We make it simple for agencies to find verified farmers, manage grants, and measure real outcomes."
      />
      <LearnMore
        btnLink="/user-select"
        btnText="Start Creating Grant"
        list={learnMorelist}
        text="How it works"
        subheadText="Simple steps to get your farm funded"
      />
      <FeaturedProject />
      <Faqs />
      <Overview isFarmer={false} isAgency={true} isInvestor={false} />
    </LayOuts>
  );
};

export default ForFarmers;
