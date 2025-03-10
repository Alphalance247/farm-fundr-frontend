import HeroCommon from "../components/common/heroCommon";
import GetInTouch from "../components/ContactUs/GetInTouch";

const ContactUs = () => {
  return (
    <>
      <HeroCommon
        img="bg-cover bg-[url('/assets/ContactUs/contact.jpeg')]"
        text="Contact Us"
      />
      <GetInTouch />
    </>
  );
};

export default ContactUs;
