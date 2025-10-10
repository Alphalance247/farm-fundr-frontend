import Container from "@/app/components/common/container";
import LayOuts from "@/app/components/common/Layouts";
import Overview from "@/app/components/Home-Page-Redesign/overview";
import Faqs from "@/app/components/Home/faqs";
import FarmerInvestorHero from "@/app/components/How It Works/common/farmerInvestorHero";
import LearnMore from "@/app/components/How It Works/common/learnMore";
import WhyFarmPady from "@/app/components/How It Works/common/whyFarmPady";
import Image from "next/image";

const ForFarmers = () => {
  const list = [
    {
      image: "/assets/HowItWorks/redesign/eye.svg",
      head: "Access to capital",
      subhed:
        "Secure funding for your projects from trusted investors to ensure smooth execution.",
    },
    {
      image: "/assets/HowItWorks/redesign/verified.svg",
      head: "Credibility",
      subhed: "Only certified farms are listed, building credibility.",
    },
    {
      image: "/assets/HowItWorks/redesign/business.svg",
      head: "Funding Options",
      subhed: "Apply for grants or attract direct investment.",
    },
  ];

  const learnMorelist = [
    {
      image: "/assets/HowItWorks/redesign/one.svg",
      head: "Register/Login",
      subhed:
        "Create an account or log in to access the tools for publishing and managing your farm.",
    },
    {
      image: "/assets/HowItWorks/redesign/2.svg",
      head: "Setup a farm",
      subhed: "Create a farm, so you can create branches and project under it",
    },
    {
      image: "/assets/HowItWorks/redesign/3.svg",
      head: "Get Verified",
      subhed:
        "Finish the KYC (Know Your Customer) process to ensure security and compliance. This helps create a safe platform for you and potential investors.",
    },
    {
      image: "/assets/HowItWorks/redesign/4.svg",
      head: "Create and publish your project",
      subhed:
        "Post your project on the marketplace with key details like goals, timelines, and funding needs to attract the right investors.",
    },
    {
      image: "/assets/HowItWorks/redesign/5.svg",
      head: "Accept/Reject Investor Bid",
      subhed:
        "When investors express interest and bid on your project, you can evaluate their offers and choose to accept or reject them according to your goals.",
    },
    {
      image: "/assets/HowItWorks/redesign/6.svg",
      head: "Run project",
      subhed:
        "With funding in place, bring your project to life. Manage resources, stick to your plan, and hit milestones. Track progress and adjust as needed.",
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
            text=""
            subheadText=""
            imgSrc=""
            investFarmText=""
            name=""
            btnLink=""
            btnText=""
          />
        </Container>
      </section>
      <WhyFarmPady text="" subheadText="" list={list} className="" />
      <LearnMore
        btnLink="/farmer-dashboard"
        list={learnMorelist}
        text=""
        subheadText=""
        btnText=""
      />
      <Faqs />
      <Overview isInvestor={false} isAgency={false} />
    </LayOuts>
  );
};

export default ForFarmers;
