// import { usePathname, useSearchParams } from "next/navigation";
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
    <LayOuts>
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
