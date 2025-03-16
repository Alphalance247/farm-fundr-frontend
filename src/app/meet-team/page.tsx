import HeroCommon from "../components/common/heroCommon";
import Contact from "../components/How It Works/contact";
import TeamGallery from "../components/meetTeam/teamGallery";

const MeetOurTeam = () => {
  return (
    <>
      <HeroCommon
        text="Meet Our Team"
        img="bg-cover bg-[url('/assets/MeetTeam/TeamHero.png')]"
      />
      <TeamGallery />
      <Contact
        bg="bg-[linear-gradient(90deg,#2D865B_0%,#12482F_100%)]"
        text="Ready to collaborate with farmers to build sustainable wealth?"
        btnText="Get Started with FarmFundr"
        textColor="text-[white]"
      />
      <Contact
        bg="bg-[#EEFEF6]"
        text="Got any questions?"
        btnText="Meet team"
        url="/meet-team"
        textColor="text-[#5F5F5F]"
      />
    </>
  );
};

export default MeetOurTeam;
