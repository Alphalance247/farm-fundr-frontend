"use client";
import Container from "../components/common/container";
import Image from "next/image";
import Button from "../components/common/Buttons";
import { GoArrowRight } from "react-icons/go";
import Input from "../components/common/input";
import Link from "next/link";
import { useState } from "react";
import { IoEye } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";

interface formState {
  email: string;
  password: string;
}

const Login = () => {
  const [form, setForm] = useState<formState>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState<{ [key: string]: boolean }>({
    password: false,
    confirm__password: false,
  });

  const togglePasswordVisibility = (field: string) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
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
          <div className="relative lg:hidden">
            <Image
              src="/assets/UserOnboarding/login.png"
              width={580}
              height={637}
              alt="signImage"
            />
          </div>

          <div className="bg-[#FCFCFC] px-10 py-5 rounded-[2.5rem] border border-[#CECECE] md:px-4">
            <h1 className="text-[#5F5F5F] font-aristoBold text-4xl text-center md:text-2xl">
              Welcome Back!
            </h1>
            <p className="text-lg font-poppinsRegular text-[#7C7C7C] mt-2 text-center mb-8 md:text-base md:mb-4">
              We miss you!
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
              <div className="mb-4">
                <label className="text-sm text-[#5F5F5F] mb-2 font-poppinsSemiBold">
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  value={form?.email || ""}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  variant="primary"
                />
              </div>

              <div className="mb-4 relative">
                <div>
                  <label className="text-sm text-[#5F5F5F] mb-2 font-poppinsSemiBold">
                    Password
                  </label>
                  <Input
                    type={showPassword?.password ? "text" : "password"}
                    name="password"
                    value={form?.password || ""}
                    onChange={handleChange}
                    placeholder="Enter Password"
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

              <p className="text-[#2D865B] font-poppinsSemiBold mt-4 text-lg mb-10 underline underline-offset-2 flex flex-col items-end">
                <Link href="/user-select"> forgot password?</Link>
              </p>

              <Link href={"/verify-email"}>
                <Button
                  className="w-full flex items-center gap-x-4 justify-center text-center mx-auto"
                  variant={"search"}
                  size="small"
                >
                  <span>{"Login "}</span>
                  <span>
                    {" "}
                    <GoArrowRight size={24} className="text-[#7C7C7C]" />
                  </span>
                </Button>
              </Link>

              <div>
                <p className="text-lg font-poppinsRegular text-[#7C7C7C] mt-4 mb-10 text-center md:text-base">
                  Don’t have an account?
                  <span className="text-[#2D865B] font-poppinsSemiBold">
                    <Link href="/user-select"> Get Started</Link>
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

export default Login;
