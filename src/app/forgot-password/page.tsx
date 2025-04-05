"use client";
import Image from "next/image";
import OnBoardNav from "../components/common/onBoardNav";
import Button from "../components/common/Buttons";
import { GoArrowRight } from "react-icons/go";
import Input from "../components/common/input";
import { useState } from "react";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import UserVerification from "../components/common/userVerification";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [activeComponent, setActiveComponent] = useState("forgot-password");

  return (
    <section className="bg-[#FCFCFC] pb-20 relative">
      <div className="absolute bottom-0 z-[1] lg:hidden">
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
      <OnBoardNav />
      <div className="md:px-4">
        <div className="p-10 shadow-md border-[#CECECE] border bg-white w-[600px] mx-auto rounded-[20px] mt-12 md:w-full md:p-3">
          <Image
            width={519}
            height={189}
            src={"/assets/forgot-password/1.svg"}
            alt="verify-mail"
            className="mb-20 md:mb-6"
          />
          {activeComponent === "forgot-password" ? (
            <div>
              <UserVerification
                heading="Forgot Password?"
                subhead=" Enter your registered email address to receive password reset
                link."
              />

              <div className="mt-8 mb-10">
                <label className="text-sm text-[#5F5F5F] mb-2 font-poppinsSemiBold">
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  variant="primary"
                />
              </div>

              <div>
                <Button
                  className={`w-full flex items-center gap-x-4 justify-center text-center mx-auto  ${
                    email.length === 0 ? "cursor-not-allowed" : ""
                  }`}
                  variant={email.length === 0 ? "search" : "primary"}
                  size="small"
                  disabled={email.length === 0}
                  onClick={() => setActiveComponent("reset-password")}
                >
                  Send Reset Link
                  <span>
                    {" "}
                    <GoArrowRight size={24} className="text-[#7C7C7C]" />
                  </span>
                </Button>
              </div>
            </div>
          ) : (
            <div>
              <UserVerification
                heading="We have sent you reset link."
                subhead="   We sent a reset password link to the email address you provided.
              If you didn’t get the email, check your spam folder or try again."
              />

              <div className="mt-10">
                <Link href={"/verify-email"}>
                  <Button
                    className={`w-full flex items-center gap-x-4 justify-center text-center mx-auto  ${
                      email.length === 0 ? "cursor-not-allowed" : ""
                    }`}
                    variant={"primary"}
                    size="small"
                  >
                    Go to Gmail
                    <span>
                      {" "}
                      <GoArrowRight size={24} className="text-[#7C7C7C]" />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className="mt-12 flex flex-col items-center">
          <Link href={"/signup"}>
            <button className="text-[#7C7C7C] px-2 py-1 rounded-xl bg-[#F6F6F6] flex items-center gap-x-3 text-lg font-poppinsRegular hover:text-[#51F4A6]">
              <span className=" bg-white rounded-full p-2 hover:bg-[#51F4A6]">
                <IoIosArrowBack size={14} color="#7C7C7C" />
              </span>{" "}
              Go Back{" "}
              <span className="text-[#2D865B] font-poppinsSemiBold">
                Sign Up
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
