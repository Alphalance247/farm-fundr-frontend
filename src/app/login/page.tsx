"use client";
import Container from "../components/common/container";
import Image from "next/image";
import Button from "../components/common/Buttons";
import { GoArrowRight } from "react-icons/go";
import Input from "../components/common/input";
import Link from "next/link";
import { useState, Suspense } from "react";
import { IoEye } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/context/authContext";

interface formState {
  email: string;
  password: string;
}

const Login = () => {
  // Loading component
  const LoginLoading = () => (
    <div className="bg-[#FCFCFC] px-10 py-5 rounded-[2.5rem] border border-[#CECECE] md:px-4">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded mb-4"></div>
        <div className="h-4 bg-gray-200 rounded mb-8"></div>
        <div className="h-12 bg-gray-200 rounded mb-4"></div>
        <div className="h-12 bg-gray-200 rounded mb-4"></div>
        <div className="h-12 bg-gray-200 rounded mb-10"></div>
      </div>
    </div>
  );

  const LoginForm = () => {
    const [form, setForm] = useState<formState>({
      email: "",
      password: "",
    });
    const [showPassword, setShowPassword] = useState<{
      [key: string]: boolean;
    }>({
      password: false,
      confirm__password: false,
    });
    const { login } = useAuth();
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const togglePasswordVisibility = (field: string) => {
      setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
    };

    // Get the redirect URL from query params
    const redirectTo = searchParams.get("redirect") || "/farmer-dashboard";

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
    };

    // Function to determine where to redirect based on user type and intended route
    const getRedirectPath = (
      userType: string,
      intendedRoute?: string | null
    ) => {
      // If there's a specific intended route, check if user can access it
      if (intendedRoute) {
        // If user is farmer and trying to access farmer routes, allow it
        if (
          userType === "farmer" &&
          intendedRoute.startsWith("/farmer-dashboard")
        ) {
          return intendedRoute;
        }
        // If user is investor and trying to access investor routes, allow it
        if (
          userType === "investor" &&
          intendedRoute.startsWith("/investor-dashboard")
        ) {
          return intendedRoute;
        }
        // If user type doesn't match the intended route, redirect to their dashboard
        if (userType === "farmer") {
          return "/farmer-dashboard";
        }
        if (userType === "investor") {
          return "/investor-dashboard";
        }
      }

      // Default redirects based on user type
      if (userType === "farmer") {
        return "/farmer-dashboard";
      }
      if (userType === "investor") {
        return "/investor-dashboard";
      }

      // Fallback
      return "/";
    };

    const handleUserLogin = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setLoading(true);
      await axios
        .post("/api/login", { ...form })
        .then((response) => {
          setLoading(false);

          if (response.status >= 200 && response.status < 300) {
            // Store in localStorage
            const { fullname, user_type } = response?.data;
            toast.success(`Login Successful Welcome back ${fullname}`);

            login({
              fullname,
              user_type,
              profileImage: "",
            });
            const redirectPath = getRedirectPath(user_type, redirectTo);
            router.push(redirectPath);
            setForm({ email: "", password: "" });
          } else {
            toast.error("Error login please try again or contact Admin");
          }
        })
        .catch((err) => {
          setLoading(false);
          // Extract the error message from the response
          let errorMessage =
            "An error occurred please try again or contact Admin";
          if (err instanceof AxiosError) {
            // Check if err is an instance of AxiosError
            errorMessage = err.response?.data?.message || errorMessage;
          }

          toast.error(errorMessage);
        });
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
            {/* <Suspense fallback={<LoginLoading />}> */}
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

              <form action="submit" onSubmit={handleUserLogin}>
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
                  <Link href="/forgot-password"> forgot password?</Link>
                </p>

                <Button
                  className="w-full flex items-center gap-x-4 justify-center text-center mx-auto"
                  variant={"primary"}
                  size="small"
                  type="submit"
                >
                  <span>{loading ? "Authenticating...." : "Login "}</span>
                  <span>
                    {" "}
                    <GoArrowRight size={24} className="text-[white]" />
                  </span>
                </Button>

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
            {/* </Suspense> */}
          </div>
        </Container>
      </section>
    );
  };

  return (
    <Suspense fallback={<LoginLoading />}>
      <LoginForm />
    </Suspense>
  );
};

export default Login;
