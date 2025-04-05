import Container from "../common/container";
import HeadingTextWithSubHead from "../common/headingTextWithSubHead";
import TeamCard from "../common/teamcard";

const TeamGallery = () => {
  const team = [
    {
      img: "/assets/MeetTeam/1.png",
      name: "Samson Chris",
      role: "Founder",
    },
    {
      img: "/assets/MeetTeam/2.png",
      name: "Bonye Amakiri",
      role: "Special Adviser",
    },
    {
      img: "/assets/MeetTeam/3.png",
      name: "Tonye Otokini",
      role: "Executive Director",
    },
    {
      img: "/assets/MeetTeam/4.png",
      name: "Adeola Alade",
      role: "Farm Surveyor",
    },
    {
      img: "/assets/MeetTeam/5.png",
      name: "Yetunde Oyeleke",
      role: "Legal Expert",
    },
    {
      img: "/assets/MeetTeam/6.png",
      name: "Ibiso Wokoma",
      role: "Financial Expert",
    },
  ];
  return (
    <section>
      <Container>
        <HeadingTextWithSubHead
          className="text-center mb-10 lg:mb-6"
          alignment="text-center"
          width={300}
          height={34}
          iconImage="/assets/MeetTeam/vector.svg"
          heading={"Meet The team"}
          subhead={"Meet the brilliant minds behind our success."}
        />

        <div className="mt-16 grid grid-cols-3 gap-x-10 gap-y-8 justify-items-center lg:gap-x-4 md:grid-cols-1">
          {team.map((el, i) => (
            <TeamCard
              img={el?.img}
              alt={el?.name}
              key={i}
              name={el?.name}
              title={el?.role}
              className={`${i === 0 ? " col-span-3 lg:col-span-1" : ""} ${
                i === team.length - 2 ? "col-span-1" : ""
              } `}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TeamGallery;
