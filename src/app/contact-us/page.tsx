import HeroCommon from "../components/common/heroCommon";
import GetInTouch from "../components/ContactUs/GetInTouch";
import LayOuts from "../components/common/Layouts";

const ContactUs = () => {
  return (
    <LayOuts>
      <HeroCommon
        img="bg-cover bg-[url('/assets/ContactUs/contact.jpeg')]"
        text="Contact Us"
      />
      <GetInTouch />
    </LayOuts>
  );
};

export default ContactUs;
