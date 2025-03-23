"use client";
import Container from "../components/common/container";
import Image from "next/image";
import Button from "../components/common/Buttons";
import { GoArrowRight } from "react-icons/go";
import Input from "../components/common/input";
import Link from "next/link";

const SignUp = () => {
  const handleChange = () => {
    console.log("no");
  };
  return (
    <section className="relative">
      <div className="absolute bottom-0  z-[1] lg:hidden">
        <Image
          src="/assets/LandingPage/icons/position1.svg"
          width={200}
          height={400}
          alt="positionlogo"
          layout="responsive"
        />
      </div>
      <div className="absolute top-0 right-0 z-[1] md:hidden">
        <Image
          src="/assets/UserOnboarding/rect.png"
          width={150}
          height={250}
          alt="positionlogo"
        />
      </div>

      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-1 relative z-10">
          <div className="h-full w-full relative lg:hidden">
            <Image
              src="/assets/UserOnboarding/signupimg.png"
              width={580}
              height={775}
              alt="signImage"
            />
          </div>

          <div className="bg-[#FCFCFC] px-10 py-5 rounded-[2.5rem] border border-[#CECECE] md:px-4">
            <h1 className="text-[#5F5F5F] font-aristoBold text-4xl text-center md:text-2xl">
              Let’s get started
            </h1>
            <p className="text-lg font-poppinsRegular text-[#7C7C7C] mt-2 text-center mb-8 md:text-base md:mb-4">
              Create your account on Farmfundr
            </p>

            <Button
              className="w-full flex items-center gap-x-4 justify-center text-center mb-3"
              variant="googleBtn"
              size="small"
            >
              <span>
                {" "}
                <Image
                  src="/assets/UserOnboarding/google.svg"
                  width={30}
                  height={30}
                  alt="google"
                />
              </span>
              <span>{"Continue with google"}</span>
            </Button>

            <div className="flex justify-center items-center gap-4 self-stretch mb-4">
              <hr className="h-[1px] w-full md:w-[174.5px] text-[#B5B5B5] " />
              <p className="font-[Inter] not-italic font-[450px] text-[16px] leading-4">
                Or
              </p>{" "}
              <hr className="h-1 w-full md:w-44" />
            </div>

            <form action="">
              <div className="grid grid-cols-2 gap-4 mb-4 md:grid-cols-1">
                <div>
                  <label className="text-sm text-[#5F5F5F] mb-2 font-poppinsSemiBold">
                    Full Name
                  </label>
                  <Input
                    type="text"
                    name=""
                    value=""
                    onChange={handleChange}
                    placeholder="Enter full name"
                    variant="primary"
                  />
                </div>

                <div>
                  <label className="text-sm text-[#5F5F5F] mb-2 font-poppinsSemiBold">
                    Email
                  </label>
                  <Input
                    type="text"
                    name=""
                    value=""
                    onChange={handleChange}
                    placeholder="Enter email address"
                    variant="primary"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="text-sm text-[#5F5F5F] mb-2 font-poppinsSemiBold">
                  Password
                </label>
                <Input
                  type="text"
                  name=""
                  value=""
                  onChange={handleChange}
                  placeholder="Enter Password"
                  variant="primary"
                />
              </div>

              <div className="mb-6">
                <label className="text-sm text-[#5F5F5F] mb-2 font-poppinsSemiBold">
                  Confirm Password
                </label>
                <Input
                  type="text"
                  name=""
                  value=""
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  variant="primary"
                />
              </div>

              <Button
                className="w-full flex items-center gap-x-4 justify-center text-center mx-auto"
                variant={"search"}
                size="small"
              >
                <span>{"Continue "}</span>
                <span>
                  {" "}
                  <GoArrowRight size={24} className="text-[#7C7C7C]" />
                </span>
              </Button>

              <div>
                <p className="text-lg font-poppinsRegular text-[#7C7C7C] mt-4 mb-10 text-center md:text-base">
                  Already have an account?
                  <span className="text-[#2D865B] font-poppinsSemiBold">
                    <Link href="/login"> Log in</Link>
                  </span>
                </p>

                <p className="p-4 bg-[#F6F6F6] text-[#7C7C7C] rounded-xl text-lg md:text-base">
                  By creating an account, you confirm that you have read and
                  agreed to our
                  <span className="text-[#2D865B] underline underline-offset-2">
                    <Link href={"/"}> Terms and Conditions</Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SignUp;
