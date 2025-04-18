"use client";
import Button from "../components/common/Buttons";
import OnBoardNav from "../components/common/onBoardNav";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { GoArrowRight } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import UserVerification from "../components/common/userVerification";

const VerifyEmail = () => {
  const [tab, setTab] = useState<string>("verifyOtp");
  const [timer, setTimer] = useState<number>(30); // Countdown timer in seconds
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleEmailOtp = () => {
    setTab("verifyOtp");
    setTimer(30); // Reset the timer when switching to OTP verification
  };

  const handleSendEmailOtp = () => {
    setTab("success");
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (tab === "verifyOtp" && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }

    if (timer === 0 && interval) {
      clearInterval(interval); // Clear the interval when the timer reaches 0
    }

    return () => {
      if (interval) clearInterval(interval); // Cleanup the interval on component unmount
    };
  }, [tab, timer]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; // Only allow numbers
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Keep only last digit
    setOtp(newOtp);

    // Move to the next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <section className="bg-[#FCFCFC] pb-20 relative">
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
      <OnBoardNav />

      <div className="md:px-4">
        <div className="p-10 shadow-md border-[#CECECE] border bg-white w-[600px] mx-auto rounded-[20px] mt-12 md:w-full md:px-4">
          <Image
            width={519}
            height={189}
            src={
              tab === "verifyOtp"
                ? "/assets/verify-email/2.svg"
                : tab === "success"
                ? "/assets/verify-email/3.svg"
                : "/assets/verify-email/1.svg"
            }
            alt="verify-mail"
            className="mb-20 md:mb-6"
          />

          {tab === "verifyOtp" ? (
            <>
              <div>
                <UserVerification
                  heading="OTP Verification"
                  subhead="Enter the 6 digit code sent to your email."
                />

                <div className="flex gap-2 mb-6 mt-4">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength={1}
                      value={digit}
                      placeholder="-"
                      ref={(el) => {
                        inputRefs.current[index] = el;
                      }}
                      onChange={(e) => handleChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className="w-full h-12 text-center border rounded-lg text-xl font-bold outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ))}
                </div>

                <div className="flex justify-between mb-10 md:flex-col md:gap-y-4">
                  <p className="text-sm font-poppinsRegular text-[#7C7C7C]">
                    Code expired in (
                    <span className="text-[#4379FF]">{timer} secs</span> )
                  </p>
                  <p className="text-sm font-poppinsRegular">
                    Didn’t receive code?{" "}
                    <span
                      className={`text-[#4379FF] font-poppinsSemiBold underline underline-offset-2 cursor-pointer ${
                        timer > 0 ? "pointer-events-none opacity-50" : ""
                      }`}
                      onClick={timer === 0 ? handleEmailOtp : undefined}
                    >
                      Resend
                    </span>
                  </p>
                </div>

                <div>
                  <Button
                    className={`w-[400px] flex items-center gap-x-4 justify-center text-center mx-auto ${
                      otp.some((digit) => digit === "")
                        ? "cursor-not-allowed opacity-50"
                        : ""
                    }`}
                    variant={
                      otp.some((digit) => digit === "") ? "search" : "primary"
                    }
                    size="small"
                    onClick={handleSendEmailOtp}
                    disabled={otp.some((digit) => digit === "")}
                  >
                    Verify Account
                    <span>
                      {" "}
                      <GoArrowRight size={24} className="text-[#7C7C7C]" />
                    </span>
                  </Button>
                </div>
              </div>

              {/* <div className="mt-12 flex flex-col items-center">
                <button
                  className="text-[#7C7C7C] px-2 py-1 rounded-xl bg-[#F6F6F6] flex items-center gap-x-3 text-lg font-poppinsRegular hover:text-[#51F4A6]"
                  onClick={() => setTab("sendOtp")}
                >
                  <span className=" bg-white rounded-full p- hover:bg-[#51F4A6]">
                    <IoIosArrowBack size={14} color="#7C7C7C" />
                  </span>{" "}
                  Go Back{" "}
                </button>
              </div> */}
            </>
          ) : tab === "success" ? (
            <div>
              <UserVerification
                heading="Email Verified!"
                subhead="Your email was successfully verified!"
              />

              <Link href={"/login"}>
                <Button
                  className={`w-full flex items-center gap-x-4 justify-center text-center mx-auto mt-4`}
                  variant={"primary"}
                  size="small"
                >
                  Continue to login
                  <span>
                    {" "}
                    <GoArrowRight size={24} className="text-white" />
                  </span>
                </Button>
              </Link>
            </div>
          ) : (
            <>
              <div>
                <p className="text-[#5F5F5F] font-aristoBold text-4xl mb-3">
                  Verify your email
                </p>
                <p className="text-lg text-[#7C7C7C] font-poppinsRegular mb-10">
                  Thank you for signing up with Farmfundr! Please click{" "}
                  <span className="font-poppinsSemiBold">“Send Code”</span>
                  button to receive a one time password for your email
                  verification.
                </p>

                <Button
                  className={`w-[400px] flex items-center gap-x-4 justify-center text-center mx-auto`}
                  variant={"primary"}
                  size="small"
                  onClick={handleEmailOtp}
                >
                  Verify Account
                  <span>
                    {" "}
                    <GoArrowRight size={24} className="text-white" />
                  </span>
                </Button>
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
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default VerifyEmail;
