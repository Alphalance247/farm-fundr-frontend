"use client";
import Container from "../components/common/container";
import Image from "next/image";
import Button from "../components/common/Buttons";
import { GoArrowRight } from "react-icons/go";
import Input from "../components/common/input";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { IoEye } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { useCallback } from "react";
import axios, { AxiosError } from "axios";
import { environment } from "@/env/env.local";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface formState {
  fullname: string;
  email: string;
  password: string;
  confirm__password: string;
  user_type: string;
}

const SignUp = () => {
  const [userType, setUserType] = useState<string>("");

  useEffect(() => {
    const storedUserType = localStorage.getItem("userType");
    setUserType(storedUserType || "");
  }, []);

  console.log(userType);

  const [form, setForm] = useState<formState>({
    fullname: "",
    email: "",
    password: "",
    confirm__password: "",
    user_type: "",
  });

  // Sync userType to form.user_type
  useEffect(() => {
    if (userType) {
      setForm((prev) => ({ ...prev, user_type: userType }));
    }
  }, [userType]);

  console.log(form.user_type);

  const router = useRouter();
  const [error, setError] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState<boolean>(false);
  const passwordRegex = useMemo(
    () =>
      new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+\\-=[\\]{};':\"\\\\|,.<>/?]).{8,}$"
      ),
    []
  );

  const handleError = useCallback(
    (field: string, returnMessage?: boolean) => {
      if (returnMessage) {
        return error[field];
      } else {
        return error[field] ? "border-red-800" : "";
      }
    },
    [error]
  );

  const [showPassword, setShowPassword] = useState<{ [key: string]: boolean }>({
    password: false,
    confirm__password: false,
  });

  const togglePasswordVisibility = (field: string) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setError((prev) => ({ ...prev, [name]: "" }));
      if (name === "password" && !passwordRegex.test(value)) {
        setError((prev) => ({
          ...prev,
          [name]:
            "Password must contain at least 8 characters and must must be alphanumeric.",
        }));
      }
      // Check password match for both fields
      if (name === "confirm__password") {
        if (value !== form.password) {
          setError((prev) => ({
            ...prev,
            [name]: "Passwords don't match.",
          }));
        }
      } else if (name === "password") {
        if (form.confirm__password && form.confirm__password !== value) {
          setError((prev) => ({
            ...prev,
            confirm__password: "Passwords don't match.",
          }));
        }
      }

      setForm((prev) => ({ ...prev, [name]: value }));
    },
    [passwordRegex, form]
  );

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      for (const key in error) {
        if (error[key]) {
          return;
        }
      }

      setLoading(true);
      await axios
        .post(environment.baseUrl + environment.registerUrl, { ...form })
        .then((response) => {
          setLoading(false);
          if (response.status >= 200 && response.status < 300) {
            toast.success(
              "Registration successful, kindly check your mailbox for confirmation"
            );
            router.push("/verify-email");

            localStorage.setItem("email", form.email);
            setForm((prev) => ({ ...prev, fullname: "" }));
          } else {
            toast.error("Registration failed");
          }
        })
        .catch((err) => {
          setLoading(false);
          // Extract the error message from the response
          let errorMessage =
            "An error occurred please try again or contact Admin";
          if (err instanceof AxiosError) {
            // Check if err is an instance of AxiosError
            errorMessage = err.response?.data?.email || errorMessage;
          }

          toast.error(errorMessage);
        });
    },
    [form, error, router]
  );

  return (
    <section className="relative">
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

            <form action="" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4 mb-4 md:grid-cols-1">
                <div>
                  <label className="text-sm text-[#5F5F5F] mb-2 font-poppinsSemiBold">
                    Full Name
                  </label>
                  <Input
                    type="text"
                    name="fullname"
                    value={form?.fullname || ""}
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
                    type="email"
                    name="email"
                    value={form?.email || ""}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    variant="primary"
                  />
                </div>
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

                  <span className="text-red-800 text-sm font-normal leading-tight">
                    {handleError("password", true)}
                  </span>
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
                    Confirm Password
                  </label>
                  <Input
                    type={showPassword?.confirm__password ? "text" : "password"}
                    name="confirm__password"
                    value={form?.confirm__password || ""}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    variant="primary"
                  />

                  <span className="text-red-800 text-sm font-normal leading-tight">
                    {handleError("confirm__password", true)}
                  </span>
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

              <Button
                className="w-full flex items-center gap-x-4 justify-center text-center mx-auto"
                variant={"primary"}
                size="small"
                type="submit"
              >
                <span>{loading ? "Submitting.." : "Continue"}</span>
                <span>
                  {" "}
                  <GoArrowRight size={24} className="text-[white]" />
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
