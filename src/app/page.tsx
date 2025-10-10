// import { usePathname, useSearchParams } from "next/navigation";
import LayOuts from "./components/common/Layouts";
import AgencyAction from "./components/Home-Page-Redesign/agencyAction";
import FarmerAction from "./components/Home-Page-Redesign/farmerAction";
import Hero from "./components/Home-Page-Redesign/hero";
import HowItWorks from "./components/Home-Page-Redesign/how-it-works";
import InvestorAction from "./components/Home-Page-Redesign/investorAction";
import Overview from "./components/Home-Page-Redesign/overview";
import WhyChooseUs from "./components/Home-Page-Redesign/whyChooseUs";
// import About from "./components/Home/about";
// import Benefits from "./components/Home/Benefits";
// import CustomersFeedbacks from "./components/Home/CustomersFeedback";
import Faqs from "./components/Home/faqs";
import FeaturedProject from "./components/Home/FeaturedProjects";

export default function Home() {
  return (
    <LayOuts>
      <Hero />
      <HowItWorks />
      <FarmerAction />
      <InvestorAction />
      <AgencyAction />
      <WhyChooseUs />
      {/* <Hero /> */}
      {/* <About />
      <Benefits /> */}
      {/* <HowItWorks /> */}
      <FeaturedProject />

      {/* <MeetTeam /> */}
      {/* <CustomersFeedbacks /> */}
      <Faqs />
      <Overview />
    </LayOuts>
  );
}
