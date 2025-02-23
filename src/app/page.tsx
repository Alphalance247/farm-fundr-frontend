import Footer from "./components/common/footer";
import Header from "./components/common/header";
import About from "./components/Home/about";
import Benefits from "./components/Home/Benefits";
import CustomersFeedbacks from "./components/Home/CustomersFeedback";
import Faqs from "./components/Home/faqs";
import FeaturedProject from "./components/Home/FeaturedProjects";
import Hero from "./components/Home/hero";
import HowItWorks from "./components/Home/HowItWorks";
import MeetTeam from "./components/Home/MeetTeam";

export default function Home() {
  return (
    <section>
      <Header />
      <Hero />
      <About />
      <Benefits />
      <HowItWorks />
      <FeaturedProject />
      <MeetTeam />
      <CustomersFeedbacks />
      <Faqs />
      <Footer />
      {/* <Button variant="secondary">Login</Button>
      <Button>Get Started</Button>

      <Button
        size="medium"
        className="flex items-center gap-x-4 justify-center"
      >
        <span>Learn More </span>
        <span>
          <GoArrowRight size={24} />
        </span>
      </Button>

      <Button
        size="medium"
        variant="tertiary"
        className="flex items-center gap-x-4 justify-center"
      >
        <span>Get started for free</span>
        <span>
          <GoArrowRight size={24} className="text-black" />
        </span>
      </Button> */}
      {/* <HeadingTextWithSubHead
        heading={"About us"}
        subhead={
          "FarmFundr is a platform designed to connect farmers and investors, fostering  collaboration and innovation in the agricultural sector. The platform aims to drive  agricultural growth and sustainability while providing mutual benefits to farmers  and investors"
        }
      /> */}
    </section>
  );
}
