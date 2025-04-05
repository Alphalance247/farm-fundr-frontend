"use client";
import Image from "next/image";
import OnBoardNav from "../components/common/onBoardNav";
import Button from "../components/common/Buttons";
import { GoArrowRight } from "react-icons/go";
import Input from "../components/common/input";
import { useState } from "react";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import UserVerification from "../components/common/userVerification";

const PasswordReset = () => {
  const [resetPassword, setResetPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passresetSuccessful, setResetPasswordSuccessful] = useState("");
  const [showPassword, setShowPassword] = useState<{ [key: string]: boolean }>({
    password: false,
    confirm__password: false,
  });

  const togglePasswordVisibility = (field: string) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

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
        <div className="p-10 shadow-md border-[#CECECE] border bg-white w-[600px] mx-auto rounded-[20px] mt-12 md:w-full  md:px-4">
          <Image
            width={519}
            height={189}
            src={`${
              passresetSuccessful === ""
                ? "/assets/forgot-password/1.svg"
                : "/assets/forgot-password/2.svg"
            }`}
            alt="verify-mail"
            className="mb-20 w-full md:mb-6"
            layout="responsive"
          />
          {passresetSuccessful === "successfulreset" ? (
            <div>
              <UserVerification
                heading="Password Reset Successfully!"
                subhead="Your password has been reset successfully. Please click the button to login."
              />

              <div className="mt-10">
                <Link href={"/login"}>
                  <Button
                    className={`w-full flex items-center gap-x-4 justify-center text-center mx-auto `}
                    variant={"primary"}
                    size="small"
                  >
                    Continue to login
                    <span>
                      {" "}
                      <GoArrowRight size={24} className={` ${"text-white"}`} />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div>
                <UserVerification />

                <div className="mb-4 relative mt-6">
                  <div>
                    <label className="text-sm text-[#5F5F5F] mb-2 font-poppinsSemiBold">
                      Set new password
                    </label>
                    <Input
                      type={showPassword?.password ? "text" : "password"}
                      name="password"
                      value={resetPassword || ""}
                      onChange={(e) => setResetPassword(e.target.value)}
                      placeholder="******"
                      variant="primary"
                    />
                  </div>

                  <div className="absolute top-10 right-4">
                    <div onClick={() => togglePasswordVisibility("password")}>
                      {showPassword.password ? (
                        <FaRegEyeSlash size={24} className="text-[#7C7C7C]" />
                      ) : (
                        <IoEye size={24} className="text-[#7C7C7C]" />
                      )}
                    </div>
                  </div>
                </div>

                <div className="mb-6 relative">
                  <div>
                    <label className="text-sm text-[#5F5F5F] mb-2 font-poppinsSemiBold">
                      Confirm new password
                    </label>
                    <Input
                      type={
                        showPassword?.confirm__password ? "text" : "password"
                      }
                      name="confirm__password"
                      value={confirmPassword || ""}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="******"
                      variant="primary"
                    />
                  </div>

                  <div className="absolute top-10 right-4">
                    <div
                      onClick={() =>
                        togglePasswordVisibility("confirm__password")
                      }
                    >
                      {showPassword.confirm__password ? (
                        <FaRegEyeSlash size={24} className="text-[#7C7C7C]" />
                      ) : (
                        <IoEye size={24} className="text-[#7C7C7C]" />
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <Button
                    className={`w-full flex items-center gap-x-4 justify-center text-center mx-auto  ${
                      resetPassword.length === 0 || confirmPassword.length === 0
                        ? "cursor-not-allowed"
                        : ""
                    }`}
                    variant={
                      resetPassword.length === 0 || confirmPassword.length === 0
                        ? "search"
                        : "primary"
                    }
                    size="small"
                    disabled={
                      resetPassword.length === 0 || confirmPassword.length === 0
                    }
                    onClick={() =>
                      setResetPasswordSuccessful("successfulreset")
                    }
                  >
                    Set New password
                    <span>
                      {" "}
                      <GoArrowRight
                        size={24}
                        className={`${
                          resetPassword.length === 0 ||
                          confirmPassword.length === 0
                            ? "text-[#7C7C7C]"
                            : "text-white"
                        }`}
                      />
                    </span>
                  </Button>
                </div>
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

export default PasswordReset;
