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
      image: "/assets/HowItWorks/redesign/eye.svg",
      head: "Verified Farms",
      subhed: "Every farm is CAC-certified and verified before listing.",
    },
    {
      image: "/assets/HowItWorks/redesign/verified.svg",
      head: "Transparent Projects",
      subhed: "Clear details on farm activities, funding needs, and progress.",
    },
    {
      image: "/assets/HowItWorks/redesign/business.svg",
      head: "Secure Investments",
      subhed: "Trusted platform with digital tracking and reporting.",
    },
  ];

  const learnMorelist = [
    {
      image: "/assets/HowItWorks/redesign/one.svg",
      head: "Register/Login",
      subhed:
        "Start by creating a new account or logging into your existing one to access features that simplify your investment process.",
    },
    {
      image: "/assets/HowItWorks/redesign/2.svg",
      head: "Complete KYC Verification",
      subhed:
        "To ensure security and compliance, complete the KYC (Know Your Customer) process for a secure investment experience.",
    },
    {
      image: "/assets/HowItWorks/redesign/3.svg",
      head: "Browse Projects",
      subhed:
        "Explore a curated list of bidding projects, each with detailed info to help you make smart investment choices.",
    },

    {
      image: "/assets/HowItWorks/redesign/4.svg",
      head: "Monitor your investment",
      subhed:
        "Track your investment’s progress in real-time through your dashboard. Stay updated with project milestones.",
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
            text="Invest in Verified Farms with Confidence"
            subheadText="FarmPady connects you with certified farms and transparent projects, so you can invest securely and track real growth"
            imgSrc="/assets/HowItWorks/redesign/1b.png"
            investFarmText="Invest like "
            name="Emmanuel"
            btnLink="/investor-dashboard"
            btnText="Explore Projects to Invest In"
          />
        </Container>
      </section>

      <WhyFarmPady
        list={list}
        text="Why Choose FarmPady for Your Investments?"
        className=""
        subheadText="We make agriculture investing professional, transparent, and secure."
      />
      <LearnMore
        btnLink="/farm-marketplace"
        btnText="Start Investing Today"
        list={learnMorelist}
        text="How it works"
        subheadText="Simple steps to get your farm funded"
        className=" !grid-cols-4 lg:!grid-cols-2 md:!grid-cols-1"
      />
      <FeaturedProject />
      <Faqs />
      <Overview isFarmer={false} isAgency={false} />
    </LayOuts>
  );
};

export default ForFarmers;
