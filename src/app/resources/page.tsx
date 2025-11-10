import HeroCommon from "../components/common/heroCommon";
import GetInTouch from "../components/ContactUs/GetInTouch";
import LayOuts from "../components/common/Layouts";
import Container from "../components/common/container";

const Resources = () => {
  const data = [
    {
      loom_link:
        "https://www.youtube.com/embed/omXTFnbNvrk?si=L_cRzWjtqJpP6F6C",
      subtext: "Getting started with Farmpady",
    },
    {
      loom_link:
        "https://www.youtube.com/embed/Ec57GgU70Qg?si=3My96ufMxpJhlmP4",
      subtext: "How to browse and invest in projects",
    },
    {
      loom_link:
        "https://www.youtube.com/embed/vilGUUgklYU?si=YkcUDKXPTUvS1XFM",
      subtext: "Managing your investor dashboard",
    },
    {
      loom_link:
        "https://www.youtube.com/embed/R9tvONr4cbY?si=2NKl15BM54W601GV",
      subtext: "How farmers list a project",
    },
    {
      loom_link:
        "https://www.youtube.com/embed/9EhvEBB48GU?si=mtVMkwQnJYGuSDuZ",
      subtext: "Placing bids and tracking investments",
    },
    {
      loom_link:
        "https://www.youtube.com/embed/ZQayqJffIO0?si=eKsEl0rpik185qiu",
      subtext: "Frequently asked questions & support",
    },
  ];
  return (
    <LayOuts>
      <section className="bg-[#fcfcfc] relative">
        <Container>
          <div className="max-w-3xl mx-auto text-center lg:text-left">
            <p className="text-sm font-medium text-[#2D865B] uppercase tracking-wide mb-2">
              FARMPADY RESOURCES
            </p>

            <h2 className="text-3xl md:text-4xl font-aristoBold text-[#2F444A] leading-tight mb-4">
              Farmpady Video Guides
            </h2>

            <p className="text-lg md:text-base text-[#6B7880] font-poppinsRegular">
              Learn how to use Farmpady — from onboarding and listing a farm to
              browsing investment opportunities and managing your portfolio.
              These short walkthroughs will help farmers and investors get the
              most out of the platform.
            </p>
          </div>
          <div className="bg-white border border-[#f0f0f0] p-6 rounded-lg mt-6 grid grid-cols-2 md:grid-cols-1 md:p-2 gap-x-6 gap-y-10">
            {data?.map((video, i) => (
              <div className="" key={i}>
                <iframe
                  src={video?.loom_link}
                  width="100%"
                  height="450"
                  className="rounded-lg"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />

                <div className=" text-2xl">
                  <p>{video?.subtext}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </LayOuts>
  );
};

export default Resources;
