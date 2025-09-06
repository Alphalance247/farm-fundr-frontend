"use client";
import LayOuts from "./components/common/Layouts";
import About from "./components/Home/about";
import Benefits from "./components/Home/Benefits";
// import CustomersFeedbacks from "./components/Home/CustomersFeedback";
import Faqs from "./components/Home/faqs";
import FeaturedProject from "./components/Home/FeaturedProjects";
import Hero from "./components/Home/hero";
import HowItWorks from "./components/Home/HowItWorks";

export default function Home() {
  return (
    <LayOuts
      title="FarmPady — Africa’s agriculture investment hub"
      description="FarmPady — Support farm projects, connect with farmers, and unlock agribusiness opportunities across Africa."
      keywords="FarmPady, Agriculture investment Nigeria, Invest in farming Africa, Farm crowdfunding platform, Support farmers Nigeria, Agriculture marketplace Africa, Farm projects funding, Farm to investor connection, Sustainable agriculture investment, Farming opportunities Nigeria, AgriTech Nigeria, Agriculture startup Africa, Farm investment platform, Nigerian farmers funding, Agribusiness investment"
    >
      <Hero />
      <About />
      <Benefits />
      <HowItWorks />
      <FeaturedProject />
      {/* <MeetTeam /> */}
      {/* <CustomersFeedbacks /> */}
      <Faqs />
    </LayOuts>
  );
}
