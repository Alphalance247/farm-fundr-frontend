"use client";

import LayOuts from "../components/common/Layouts";
import Container from "../components/common/container";
import Button from "../components/common/Buttons";
import Link from "next/link";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import {
  FaUsers,
  FaAward,
  FaHandshake,
  FaChartLine,
  FaStar,
  FaLeaf,
  FaTractor,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import SlideInSection from "../components/common/slideInSection";

export default function FarmerDirectoryHome() {
  const stats = [
    { number: "500+", label: "Verified Farmers" },
    { number: "36", label: "States Covered" },
    { number: "95%", label: "Success Rate" },
    { number: "1,200+", label: "Projects Completed" },
  ];

  const topFarmers = [
    {
      id: 1,
      name: "Adebayo Johnson",
      title: "Rice & Maize Specialist",
      location: "Lagos State",
      experience: "15 years",
      projects: 42,
      successRate: 95,
      verified: true,
      rating: 4.8,
    },
    {
      id: 2,
      name: "Chioma Okafor",
      title: "Organic Vegetable Farmer",
      location: "Enugu State",
      experience: "10 years",
      projects: 38,
      successRate: 98,
      verified: true,
      rating: 4.9,
    },
  ];

  const categories = [
    "Rice & Grains",
    "Vegetables",
    "Livestock",
    "Poultry",
    "Cassava & Tubers",
    "Fruits",
    "Cash Crops",
    "Aquaculture",
  ];

  return (
    <LayOuts>
      {/* Hero Section */}
      <SlideInSection>
        <section className="bg-gradient-to-br from-[#EEFEF6] via-[#F9FAFB] to-white relative overflow-hidden">
          <div className="absolute z-[0] top-0 right-0 bottom-0 left-0 opacity-40">
            <Image
              src="/assets/Homepage-Redesign/background.png"
              width={2000}
              height={1505}
              className="w-full h-full"
              alt="background"
            />
          </div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-20 w-72 h-72 bg-[#2D865B]/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#51F4A6]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <Container>
            <div className="relative z-10 md:py-16">
              <div className="grid grid-cols-2 gap-x-16 items-center lg:grid-cols-1 lg:gap-y-12">
                <div>
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2D865B] to-[#51F4A6] text-white px-4 py-2 rounded-full mb-6 shadow-lg">
                    <FaUsers size={16} />
                    <span className="font-poppinsSemiBold text-sm">
                      Verified Farmer Network
                    </span>
                  </div>

                  <h1 className="text-6xl font-poppinsBold text-[#282A03] mb-6 xl:text-5xl md:text-4xl leading-tight">
                    Connect with{" "}
                    <span className="text-[#2D865B] relative">
                      Nigeria&apos;s Best Farmers
                      <svg
                        className="absolute -bottom-2 left-0 w-full"
                        height="8"
                        viewBox="0 0 200 8"
                        fill="none"
                      >
                        <path
                          d="M1 5.5C50 1.5 100 1.5 199 5.5"
                          stroke="#51F4A6"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </h1>

                  <p className="text-xl font-poppinsRegular text-[#5F5F5F] mb-8 xl:text-lg leading-relaxed">
                    Discover and network with{" "}
                    <span className="font-poppinsSemiBold text-[#2D865B]">
                      500+ verified farmers
                    </span>{" "}
                    across Nigeria. Learn from their success stories, track
                    their project performance, and collaborate on agricultural
                    ventures.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <Link href="/farmer-directory/explore">
                      <Button className="flex gap-x-2 items-center justify-center text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all">
                        Explore Farmers
                        <GoArrowRight size={20} />
                      </Button>
                    </Link>
                    <Link href="/signup">
                      <button className="flex gap-x-2 items-center justify-center text-lg px-8 py-4 border-2 border-[#2D865B] text-[#2D865B] rounded-xl font-poppinsSemiBold hover:bg-[#EEFEF6] transition-all">
                        <FaUsers size={20} />
                        Join as Farmer
                      </button>
                    </Link>
                  </div>

                  {/* Stats */}
                  <div className="flex gap-6 pt-6 border-t border-[#E4E7EC] flex-wrap">
                    {stats.map((stat, index) => (
                      <div key={index}>
                        <p className="text-3xl font-poppinsBold text-[#2D865B]">
                          {stat.number}
                        </p>
                        <p className="text-sm font-poppinsRegular text-[#7C7C7C]">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  {/* Feature Card */}
                  <div className="bg-white rounded-2xl shadow-2xl p-8 border border-[#E4E7EC]">
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E4E7EC]">
                      <div className="bg-gradient-to-br from-[#2D865B] to-[#51F4A6] p-3 rounded-full">
                        <FaAward size={24} color="white" />
                      </div>
                      <div>
                        <h3 className="font-poppinsSemiBold text-[#282A03]">
                          Top Performing Farmers
                        </h3>
                        <p className="text-xs text-[#7C7C7C]">
                          Verified Success Stories
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {topFarmers.map((farmer) => (
                        <div
                          key={farmer.id}
                          className="bg-[#F9FAFB] rounded-xl p-4 hover:bg-[#EEFEF6] transition-colors"
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#2D865B]/10 flex items-center justify-center flex-shrink-0">
                              <FaUsers size={20} className="text-[#2D865B]" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-poppinsSemiBold text-[#282A03]">
                                  {farmer.name}
                                </h4>
                                {farmer.verified && (
                                  <MdVerified
                                    size={16}
                                    className="text-blue-500"
                                  />
                                )}
                              </div>
                              <p className="text-sm text-[#5F5F5F] mb-2">
                                {farmer.title}
                              </p>
                              <div className="flex items-center gap-4 text-xs text-[#7C7C7C]">
                                <span className="flex items-center gap-1">
                                  <FaStar
                                    className="text-yellow-400"
                                    size={12}
                                  />
                                  {farmer.rating}
                                </span>
                                <span>{farmer.projects} Projects</span>
                                <span className="text-green-600 font-poppinsSemiBold">
                                  {farmer.successRate}% Success
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Link href="/farmer-directory/explore">
                      <button className="w-full mt-4 py-3 bg-[#EEFEF6] text-[#2D865B] rounded-xl font-poppinsSemiBold hover:bg-[#2D865B] hover:text-white transition-all">
                        View All Farmers
                      </button>
                    </Link>
                  </div>

                  {/* Floating Stats */}
                  <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-[#E4E7EC]">
                    <div className="flex items-center gap-2">
                      <MdVerified size={20} className="text-blue-500" />
                      <span className="text-sm font-poppinsSemiBold text-[#282A03]">
                        100% Verified
                      </span>
                    </div>
                  </div>

                  <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-[#E4E7EC]">
                    <div className="flex items-center gap-2">
                      <BsGraphUpArrow size={20} className="text-green-500" />
                      <span className="text-sm font-poppinsSemiBold text-[#282A03]">
                        95% Avg Success
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </SlideInSection>

      {/* Features Section */}
      <section className="py-15 md:py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #2D865B 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <Container>
          <div className="text-center mb-20 relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#EEFEF6] px-4 py-2 rounded-full mb-4">
              <div className="w-2 h-2 bg-[#2D865B] rounded-full"></div>
              <span className="text-sm font-poppinsSemiBold text-[#2D865B]">
                Why Choose Our Platform
              </span>
            </div>
            <h2 className="text-5xl font-poppinsBold text-[#282A03] mb-6 xl:text-4xl md:text-3xl">
              Everything You Need to Connect & Grow
            </h2>
            <p className="text-xl font-poppinsRegular text-[#5F5F5F] max-w-3xl mx-auto">
              Access comprehensive farmer profiles, track performance metrics,
              and build meaningful agricultural partnerships
            </p>
          </div>

          {/* Feature 1: Verified Farmers */}
          <div className="relative z-10 mb-24 md:mb-16">
            <div className="grid grid-cols-2 gap-12 items-center md:grid-cols-1">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#EEFEF6] rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#51F4A6]/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-[#E4E7EC]">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-[#2D865B] rounded-full"></div>
                      <span className="text-sm font-poppinsSemiBold text-[#282A03]">
                        Verified Profiles
                      </span>
                    </div>
                    <MdVerified size={24} className="text-blue-500" />
                  </div>
                  <div className="space-y-4">
                    <div className="bg-[#F9FAFB] rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-full bg-[#2D865B]/10 flex items-center justify-center">
                          <FaUsers size={20} className="text-[#2D865B]" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <p className="font-poppinsSemiBold text-[#282A03]">
                              Adebayo Johnson
                            </p>
                            <MdVerified size={16} className="text-blue-500" />
                          </div>
                          <p className="text-xs text-[#7C7C7C]">
                            Rice & Maize Specialist
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-3 pt-3 border-t border-[#E4E7EC]">
                        <div className="text-center">
                          <p className="text-lg font-poppinsBold text-[#2D865B]">
                            4.8
                          </p>
                          <p className="text-xs text-[#7C7C7C]">Rating</p>
                        </div>
                        <div className="text-center">
                          <p className="text-lg font-poppinsBold text-[#2D865B]">
                            42
                          </p>
                          <p className="text-xs text-[#7C7C7C]">Projects</p>
                        </div>
                        <div className="text-center">
                          <p className="text-lg font-poppinsBold text-green-600">
                            95%
                          </p>
                          <p className="text-xs text-[#7C7C7C]">Success</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#EEFEF6] rounded-xl p-4 border border-[#2D865B]/20">
                      <p className="text-xs text-[#7C7C7C] mb-2">
                        Authentication Status
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-white rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-[#2D865B] to-[#51F4A6] h-full rounded-full"
                            style={{ width: "100%" }}
                          ></div>
                        </div>
                        <span className="text-sm font-poppinsSemiBold text-[#2D865B]">
                          100%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-gradient-to-br from-[#EEFEF6] to-[#F9FAFB] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  <FaUsers size={32} color="#2D865B" />
                </div>
                <h3 className="text-3xl font-poppinsBold text-[#282A03] mb-4">
                  Verified Farmers
                </h3>
                <p className="text-lg font-poppinsRegular text-[#5F5F5F] leading-relaxed mb-6">
                  Connect with authenticated farmers with proven track records
                  and verified credentials. Every profile is thoroughly vetted
                  to ensure authenticity and reliability.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#EEFEF6] flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[#2D865B]"></div>
                    </div>
                    <span className="text-base font-poppinsRegular text-[#5F5F5F]">
                      100% authenticated farmer profiles
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#EEFEF6] flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[#2D865B]"></div>
                    </div>
                    <span className="text-base font-poppinsRegular text-[#5F5F5F]">
                      Verified credentials and certifications
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#EEFEF6] flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[#2D865B]"></div>
                    </div>
                    <span className="text-base font-poppinsRegular text-[#5F5F5F]">
                      Detailed performance metrics and ratings
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Feature 2: Success Stories */}
          <div className="relative z-10 mb-24 md:mb-16">
            <div className="grid grid-cols-2 gap-12 items-center md:grid-cols-1">
              <div className="md:order-2">
                <div className="bg-gradient-to-br from-[#EEFEF6] to-[#F9FAFB] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  <FaAward size={32} color="#2D865B" />
                </div>
                <h3 className="text-3xl font-poppinsBold text-[#282A03] mb-4">
                  Success Stories
                </h3>
                <p className="text-lg font-poppinsRegular text-[#5F5F5F] leading-relaxed mb-6">
                  Learn from experienced farmers who have achieved measurable
                  success in their agricultural ventures. Access real case
                  studies and proven strategies.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#EEFEF6] flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[#2D865B]"></div>
                    </div>
                    <span className="text-base font-poppinsRegular text-[#5F5F5F]">
                      Real-world agricultural success stories
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#EEFEF6] flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[#2D865B]"></div>
                    </div>
                    <span className="text-base font-poppinsRegular text-[#5F5F5F]">
                      Documented project outcomes and yields
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#EEFEF6] flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[#2D865B]"></div>
                    </div>
                    <span className="text-base font-poppinsRegular text-[#5F5F5F]">
                      95% average success rate across projects
                    </span>
                  </li>
                </ul>
              </div>
              <div className="relative md:order-1">
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#EEFEF6] rounded-full blur-3xl animate-pulse"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-[#E4E7EC]">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-[#2D865B] rounded-full"></div>
                      <span className="text-sm font-poppinsSemiBold text-[#282A03]">
                        Success Metrics
                      </span>
                    </div>
                    <BsGraphUpArrow size={24} className="text-green-600" />
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-poppinsSemiBold text-[#282A03]">
                          Rice Cultivation Project
                        </span>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-poppinsSemiBold">
                          Completed
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <p className="text-xs text-[#7C7C7C] mb-1">
                            Yield Achieved
                          </p>
                          <p className="text-lg font-poppinsBold text-green-600">
                            8 tons/ha
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-[#7C7C7C] mb-1">ROI</p>
                          <p className="text-lg font-poppinsBold text-green-600">
                            +125%
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-[#F9FAFB] rounded-xl p-3 text-center">
                        <p className="text-2xl font-poppinsBold text-[#2D865B] mb-1">
                          42
                        </p>
                        <p className="text-xs text-[#7C7C7C]">Projects</p>
                      </div>
                      <div className="bg-[#F9FAFB] rounded-xl p-3 text-center">
                        <p className="text-2xl font-poppinsBold text-green-600 mb-1">
                          95%
                        </p>
                        <p className="text-xs text-[#7C7C7C]">Success</p>
                      </div>
                      <div className="bg-[#F9FAFB] rounded-xl p-3 text-center">
                        <p className="text-2xl font-poppinsBold text-[#2D865B] mb-1">
                          4.8
                        </p>
                        <p className="text-xs text-[#7C7C7C]">Rating</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Network & Collaborate */}
          <div className="relative z-10 mb-24 md:mb-16">
            <div className="grid grid-cols-2 gap-12 items-center md:grid-cols-1">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#EEFEF6] rounded-full blur-3xl animate-pulse"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-[#E4E7EC]">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-[#2D865B] rounded-full"></div>
                      <span className="text-sm font-poppinsSemiBold text-[#282A03]">
                        Network Activity
                      </span>
                    </div>
                    <FaHandshake size={24} className="text-[#2D865B]" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-[#F9FAFB] rounded-xl">
                      <div className="w-10 h-10 rounded-full bg-[#2D865B]/10 flex items-center justify-center">
                        <FaUsers size={18} className="text-[#2D865B]" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-poppinsSemiBold text-[#282A03]">
                          New Connection
                        </p>
                        <p className="text-xs text-[#7C7C7C]">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-[#EEFEF6] rounded-xl border border-[#2D865B]/20">
                      <div className="w-10 h-10 rounded-full bg-[#2D865B]/10 flex items-center justify-center">
                        <FaHandshake size={18} className="text-[#2D865B]" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-poppinsSemiBold text-[#282A03]">
                          Collaboration Started
                        </p>
                        <p className="text-xs text-[#7C7C7C]">5 hours ago</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 pt-3 border-t border-[#E4E7EC]">
                      <div className="text-center">
                        <p className="text-2xl font-poppinsBold text-[#2D865B]">
                          356
                        </p>
                        <p className="text-xs text-[#7C7C7C]">Connections</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-poppinsBold text-[#2D865B]">
                          28
                        </p>
                        <p className="text-xs text-[#7C7C7C]">Active</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-poppinsBold text-[#2D865B]">
                          12
                        </p>
                        <p className="text-xs text-[#7C7C7C]">Projects</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-gradient-to-br from-[#EEFEF6] to-[#F9FAFB] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  <FaHandshake size={32} color="#2D865B" />
                </div>
                <h3 className="text-3xl font-poppinsBold text-[#282A03] mb-4">
                  Network & Collaborate
                </h3>
                <p className="text-lg font-poppinsRegular text-[#5F5F5F] leading-relaxed mb-6">
                  Build meaningful connections with farmers across Nigeria for
                  knowledge sharing and partnerships. Collaborate on projects
                  and grow your agricultural network.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#EEFEF6] flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[#2D865B]"></div>
                    </div>
                    <span className="text-base font-poppinsRegular text-[#5F5F5F]">
                      Connect with 500+ verified farmers nationwide
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#EEFEF6] flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[#2D865B]"></div>
                    </div>
                    <span className="text-base font-poppinsRegular text-[#5F5F5F]">
                      Share knowledge and best practices
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#EEFEF6] flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[#2D865B]"></div>
                    </div>
                    <span className="text-base font-poppinsRegular text-[#5F5F5F]">
                      Collaborate on agricultural ventures
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Feature 4: Track Performance */}
          <div className="relative z-10">
            <div className="grid grid-cols-2 gap-12 items-center md:grid-cols-1">
              <div className="md:order-2">
                <div className="bg-gradient-to-br from-[#EEFEF6] to-[#F9FAFB] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  <FaChartLine size={32} color="#2D865B" />
                </div>
                <h3 className="text-3xl font-poppinsBold text-[#282A03] mb-4">
                  Track Performance
                </h3>
                <p className="text-lg font-poppinsRegular text-[#5F5F5F] leading-relaxed mb-6">
                  Access detailed profiles showing farm metrics, project
                  history, and success rates. Make data-driven decisions with
                  comprehensive performance analytics.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#EEFEF6] flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[#2D865B]"></div>
                    </div>
                    <span className="text-base font-poppinsRegular text-[#5F5F5F]">
                      Comprehensive project tracking and analytics
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#EEFEF6] flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[#2D865B]"></div>
                    </div>
                    <span className="text-base font-poppinsRegular text-[#5F5F5F]">
                      Historical performance data and trends
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#EEFEF6] flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[#2D865B]"></div>
                    </div>
                    <span className="text-base font-poppinsRegular text-[#5F5F5F]">
                      Success rate monitoring and benchmarks
                    </span>
                  </li>
                </ul>
              </div>
              <div className="relative md:order-1">
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#51F4A6]/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-[#E4E7EC]">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-[#2D865B] rounded-full"></div>
                      <span className="text-sm font-poppinsSemiBold text-[#282A03]">
                        Performance Dashboard
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-8 h-2 bg-[#E4E7EC] rounded"></div>
                      <div className="w-8 h-2 bg-[#2D865B] rounded"></div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-32 flex items-end gap-2">
                      <div className="flex-1 bg-gradient-to-t from-[#2D865B]/20 to-[#2D865B]/5 rounded-t-lg h-[50%]"></div>
                      <div className="flex-1 bg-gradient-to-t from-[#2D865B]/20 to-[#2D865B]/5 rounded-t-lg h-[70%]"></div>
                      <div className="flex-1 bg-gradient-to-t from-[#2D865B]/20 to-[#2D865B]/5 rounded-t-lg h-[85%]"></div>
                      <div className="flex-1 bg-gradient-to-t from-[#2D865B] to-[#51F4A6] rounded-t-lg h-[100%] shadow-lg"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#E4E7EC]">
                      <div>
                        <div className="text-xs text-[#7C7C7C] mb-1">
                          Projects
                        </div>
                        <div className="text-lg font-poppinsBold text-[#2D865B]">
                          42
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-[#7C7C7C] mb-1">
                          Success
                        </div>
                        <div className="text-lg font-poppinsBold text-green-600">
                          95%
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-[#7C7C7C] mb-1">
                          Rating
                        </div>
                        <div className="text-lg font-poppinsBold text-[#282A03]">
                          4.8
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Categories Section */}
      <section className="py-15 md:py-16 bg-gradient-to-br from-white via-[#F9FAFB] to-[#EEFEF6] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #2D865B 2px, transparent 0)`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-20 w-32 h-32 bg-[#51F4A6]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-40 h-40 bg-[#2D865B]/10 rounded-full blur-3xl"></div>

        <Container>
          <SlideInSection>
            <div className="text-center mb-16 relative z-10">
              <div className="inline-flex items-center gap-2 bg-white border border-[#E4E7EC] shadow-sm px-4 py-2 rounded-full mb-6">
                <FaLeaf size={16} className="text-[#2D865B]" />
                <span className="text-sm font-poppinsSemiBold text-[#2D865B]">
                  Specializations
                </span>
              </div>
              <h2 className="text-5xl font-poppinsBold text-[#282A03] mb-4 xl:text-4xl md:text-3xl">
                Browse by{" "}
                <span className="relative text-[#2D865B]">
                  Specialization
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="8"
                    viewBox="0 0 200 8"
                    fill="none"
                  >
                    <path
                      d="M1 5C50 2 100 2 199 5"
                      stroke="#51F4A6"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>
              <p className="text-xl text-[#5F5F5F] font-poppinsRegular max-w-2xl mx-auto">
                Discover expert farmers in various agricultural sectors across
                Nigeria
              </p>
            </div>

            <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 relative z-10">
              {categories.map((category, index) => {
                const icons = [
                  <FaLeaf
                    size={32}
                    className="text-[#2D865B] group-hover:text-white transition-colors"
                    key={index}
                  />,
                  <FaLeaf
                    size={32}
                    className="text-[#2D865B] group-hover:text-white transition-colors"
                    key={index}
                  />,
                  <FaTractor
                    size={32}
                    className="text-[#2D865B] group-hover:text-white transition-colors"
                    key={index}
                  />,
                  <FaLeaf
                    size={32}
                    className="text-[#2D865B] group-hover:text-white transition-colors"
                    key={index}
                  />,
                  <FaLeaf
                    size={32}
                    className="text-[#2D865B] group-hover:text-white transition-colors"
                    key={index}
                  />,
                  <FaLeaf
                    size={32}
                    className="text-[#2D865B] group-hover:text-white transition-colors"
                    key={index}
                  />,
                  <FaLeaf
                    size={32}
                    className="text-[#2D865B] group-hover:text-white transition-colors"
                    key={index}
                  />,
                  <FaLeaf
                    size={32}
                    className="text-[#2D865B] group-hover:text-white transition-colors"
                    key={index}
                  />,
                ];

                return (
                  <Link
                    key={index}
                    href={`/farmer-directory/explore?category=${encodeURIComponent(
                      category
                    )}`}
                  >
                    <div className="relative bg-white rounded-2xl p-8 border border-[#E4E7EC] hover:border-[#2D865B] hover:shadow-2xl transition-all duration-300 group cursor-pointer overflow-hidden">
                      {/* Hover Gradient Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#2D865B] to-[#1a5238] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Content */}
                      <div className="relative z-10">
                        <div className="w-20 h-20 bg-gradient-to-br from-[#EEFEF6] to-[#F9FAFB] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300 shadow-md group-hover:scale-110">
                          {icons[index]}
                        </div>
                        <h3 className="text-lg font-poppinsBold text-[#282A03] group-hover:text-white transition-colors text-center mb-2">
                          {category}
                        </h3>
                        <p className="text-sm text-[#7C7C7C] group-hover:text-white/80 transition-colors text-center">
                          Expert farmers
                        </p>
                      </div>

                      {/* Decorative Arrow */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <GoArrowRight size={20} className="text-white" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* View All Button */}
            <div className="text-center mt-16 relative z-10">
              <Link href="/farmer-directory/explore">
                <button className="inline-flex gap-x-3 items-center justify-center text-lg px-10 py-5 bg-gradient-to-r from-[#2D865B] to-[#238553] text-white rounded-xl font-poppinsSemiBold hover:shadow-2xl hover:scale-105 transition-all shadow-lg">
                  <FaUsers size={22} />
                  View All Farmers
                  <GoArrowRight size={22} />
                </button>
              </Link>
              <p className="text-sm text-[#7C7C7C] mt-4 font-poppinsRegular">
                500+ verified farmers across all specializations
              </p>
            </div>
          </SlideInSection>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-20 bg-gradient-to-br from-[#2D865B] via-[#238553] to-[#1a5238] relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#51F4A6]/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#2D865B]/30 rounded-full blur-[100px] animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px]"></div>
        </div>

        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.07]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1.5px, transparent 0)`,
              backgroundSize: "48px 48px",
            }}
          ></div>
        </div>

        {/* Decorative Shapes */}
        <div className="absolute top-20 left-20 w-20 h-20 border-2 border-white/20 rounded-2xl rotate-12 animate-pulse"></div>
        <div className="absolute bottom-20 right-32 w-16 h-16 border-2 border-white/20 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-white/20 rounded-2xl -rotate-12 animate-pulse delay-700"></div>

        <Container>
          <SlideInSection>
            <div className="text-center relative z-10 max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full mb-6 shadow-lg">
                <div className="w-2 h-2 bg-[#51F4A6] rounded-full animate-pulse"></div>
                <span className="font-poppinsSemiBold text-sm">
                  Join Our Community
                </span>
              </div>

              <h2 className="text-6xl font-poppinsBold text-white mb-6 xl:text-5xl md:text-4xl leading-tight">
                Ready to Start{" "}
                <span className="relative">
                  Networking?
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="12"
                    viewBox="0 0 200 12"
                    fill="none"
                  >
                    <path
                      d="M1 8C50 3 100 3 199 8"
                      stroke="#51F4A6"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>

              <p className="text-2xl text-white/90 font-poppinsRegular mb-12 max-w-3xl mx-auto leading-relaxed xl:text-xl">
                Join our community of{" "}
                <span className="font-poppinsSemiBold text-[#51F4A6]">
                  500+ verified farmers
                </span>{" "}
                and start building meaningful agricultural partnerships today.
              </p>

              {/* Stats */}
              <div className="flex justify-center gap-12 mb-12 flex-wrap md:gap-8">
                <div className="text-center">
                  <p className="text-5xl font-poppinsBold text-[#51F4A6] mb-2 xl:text-4xl">
                    500+
                  </p>
                  <p className="text-sm text-white/80 font-poppinsRegular">
                    Active Farmers
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-5xl font-poppinsBold text-[#51F4A6] mb-2 xl:text-4xl">
                    36
                  </p>
                  <p className="text-sm text-white/80 font-poppinsRegular">
                    States Covered
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-5xl font-poppinsBold text-[#51F4A6] mb-2 xl:text-4xl">
                    95%
                  </p>
                  <p className="text-sm text-white/80 font-poppinsRegular">
                    Success Rate
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/farmer-directory/explore">
                  <button className="flex gap-x-3 items-center justify-center text-lg px-10 py-5 bg-white text-[#2D865B] rounded-xl font-poppinsSemiBold hover:bg-[#F9FAFB] hover:scale-105 transition-all shadow-2xl hover:shadow-3xl">
                    <FaUsers size={22} />
                    Explore Farmers
                    <GoArrowRight size={22} />
                  </button>
                </Link>
                <Link href="/signup">
                  <button className="flex gap-x-3 items-center justify-center text-lg px-10 py-5 border-2 border-white/50 backdrop-blur-sm bg-white/10 text-white rounded-xl font-poppinsSemiBold hover:bg-white/20 hover:border-white hover:scale-105 transition-all shadow-xl">
                    Join the Network
                    <GoArrowRight size={22} />
                  </button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center gap-6 mt-12 text-white/70 text-sm font-poppinsRegular flex-wrap">
                <div className="flex items-center gap-2">
                  <MdVerified size={20} className="text-[#51F4A6]" />
                  <span>100% Verified</span>
                </div>
                <div className="w-1 h-1 bg-white/30 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <FaStar size={16} className="text-[#51F4A6]" />
                  <span>4.8 Average Rating</span>
                </div>
                <div className="w-1 h-1 bg-white/30 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <BsGraphUpArrow size={16} className="text-[#51F4A6]" />
                  <span>1,200+ Projects</span>
                </div>
              </div>
            </div>
          </SlideInSection>
        </Container>
      </section>
    </LayOuts>
  );
}
