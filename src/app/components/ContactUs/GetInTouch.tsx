import Container from "../common/container";
import HeadingTextWithSubHead from "../common/headingTextWithSubHead";
import Image from "next/image";
import Form from "./form";

const GetInTouch = () => {
  return (
    <section>
      <Container>
        <HeadingTextWithSubHead
          iconImage="/assets/ContactUs/1.svg"
          width={799}
          height={34}
          heading={"Got a Question? We’d Love to Hear From You!"}
          withSubHead={false}
          className="text-center mb-16 lg:mb-8"
        />

        <section className="bg-[#2D865B] py-16 px-20 relative rounded-tl-[2.5rem] rounded-br-[2.5rem] grid grid-cols-2 lg:grid-cols-1 items-end md:px-4">
          <div className="absolute bottom-0 right-0 z-[1]">
            <Image
              src="/assets/LandingPage/icons/position3.svg"
              width={150}
              height={300}
              alt="positionlogo"
              className="rounded-br-[2.5rem]"
            />
          </div>
          <div>
            <Image
              width={468}
              height={275}
              src="/assets/ContactUs/frame.png"
              alt="contact-description"
              className="mb-11"
            />

            <div>
              <div className="flex gap-x-3 mb-5 items-center">
                <Image
                  width={40}
                  height={40}
                  src="/assets/ContactUs/3.svg"
                  alt="contact-adrress"
                />
                <p className="text-lg font-poppinsRegular text-white">
                  Ibadan, Oyo State, Nigeria.
                </p>
              </div>

              <a href="tel:+2349022291012">
                <div className="flex gap-x-3 mb-5 items-center">
                  <Image
                    width={40}
                    height={40}
                    src="/assets/ContactUs/2.svg"
                    alt="number-contact-svg"
                  />
                  <p className="text-lg font-poppinsRegular text-white">
                    09022291012
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="relative z-10">
            <h5 className="mb-12 text-4xl font-aristoBold text-white">
              Send Us a Message
            </h5>

            <div>
              <Form />
            </div>
          </div>
        </section>
        <div>
          <p className="text-2xl font-aristoBold text-[#5F5F5F] text-center my-16">
            Follow Us on our socials for more tips and updates
          </p>

          <div className="flex justify-center gap-x-20 md:grid md:grid-cols-2 md:gap-y-6 justify-items-center">
            <div className="flex items-center gap-x-[10px]">
              <a
                href="https://www.instagram.com/farmpady?igsh=MWxzMWs0ZDh3cnJldQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-[10px]"
              >
                <Image
                  src="/assets/ContactUs/instgram.svg"
                  width={40}
                  height={40}
                  alt="Instagram"
                />
                <p className="text-lg text-[#7C7C7C] font-poppinsRegular">
                  Instagram
                </p>
              </a>
            </div>

            <div className="flex items-center gap-x-[10px]">
              <a
                href="https://www.linkedin.com/company/farmpady/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-[10px]"
              >
                <Image
                  src="/assets/ContactUs/x.svg"
                  width={40}
                  height={40}
                  alt="LinkedIn"
                />
                <p className="text-lg text-[#7C7C7C] font-poppinsRegular">
                  LinkedIn
                </p>
              </a>
            </div>

            <div className="flex items-center gap-x-[10px] md:col-span-2">
              <a
                href="https://x.com/farmpady?t=EaSInmdoSp7MMoKvnacbUg&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-[10px]"
              >
                <Image
                  src="/assets/ContactUs/linkdIn.svg"
                  width={40}
                  height={40}
                  alt="X"
                />
                <p className="text-lg text-[#7C7C7C] font-poppinsRegular">X</p>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GetInTouch;
