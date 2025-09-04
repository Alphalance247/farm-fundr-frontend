"use client";
import { usePathname, useSearchParams } from "next/navigation";
import LayOuts from "./components/common/Layouts";
import About from "./components/Home/about";
import Benefits from "./components/Home/Benefits";
// import CustomersFeedbacks from "./components/Home/CustomersFeedback";
import Faqs from "./components/Home/faqs";
import FeaturedProject from "./components/Home/FeaturedProjects";
import Hero from "./components/Home/hero";
import HowItWorks from "./components/Home/HowItWorks";
import { useEffect } from "react";
// import MeetTeam from "./components/Home/MeetTeam";

export default function Home() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#faq") {
      const faqSection = document.getElementById("faq");
      faqSection?.scrollIntoView({ behavior: "smooth" });
    }
  }, [pathname, searchParams]);
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
