"use client";
import GoBackBtn from "../common/goBack";
import Header from "./header";
import Footer from "./footer";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import { FaCheckCircle } from "react-icons/fa";
import Button from "../common/Buttons";

const PublicDetails = ({ detailsId }: { detailsId: string }) => {
  const farmDetailsConfirmation = [
    {
      name: "Grant Title",
      details: "Youth in Farm 2025",
    },
    {
      name: "Grant category",
      details: "Live Stock, Crop",
    },
    {
      name: "Funding Type",
      details: "Grant",
    },
    {
      name: "Funding Type",
      details: "Grant",
    },
    {
      name: "Funding Type",
      details: "Grant",
    },
    {
      name: "Funding Type",
      details: "Grant",
    },
  ];

  return (
    <section>
      <Header />
      <main className="px-10 py-14 max-w-[1400px] mx-auto xl:px-4 xl:py-6">
        <GoBackBtn href="/agency-dashboard/my-grants" />

        <div className="mt-9">
          <div className="bg-white border border-[#F6F6F6] rounded-[20px] py-[30px] px-6 flex gap-x-8 items-center shadow-md">
            <Image
              width={115}
              height={115}
              src="/assets/Grant-page/nnm.png"
              alt="grant logo"
            />
            <div className="text-sm font-poppinsRegular text-[#7C7C7C]">
              <p className=" font-poppinsSemiBold text-[#5F5F5F] text-2xl mb-2">
                Youth in agri 2025
              </p>
              <p className="text-base font-poppinsRegular text-[#7C7C7C]">
                Lagos, Nigeria.
              </p>
              <div className="flex gap-x-2 items-center mt-3">
                <p>Published 2 weeks ago</p>
                <span className="text-[#D9D9D9]">
                  <GoDotFill fill="#D9D9D9" size={6} />
                </span>
                <p>Over 9 applicants</p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-[2fr_1fr] gap-6">
            <div className="bg-white border border-[#F6F6F6] rounded-xl p-6">
              <div className="border-[#E2E2E2] pb-6 border-b">
                <p className="py-2 px-3 w-fit font-poppinsSemiBold text-lg text-[#5F5F5F] bg-[#EEFEF6] mb-3 rounded-md">
                  Program Description
                </p>
                <p className="bg-[#F6F6F6] p-4 rounded-xl font-poppinsRegular text-sm text-[#7C7C7C]">
                  This grant aims to empower young farmers with the resources to
                  boost productivity and adopt sustainable practices.
                  <br /> <br />
                  This comprehensive grant program is designed to support
                  farmers and agricultural enterprises in implementing
                  innovative, environmentally sustainable farming practices. The
                  initiative focuses on promoting techniques that maintain or
                  increase productivity while reducing environmental impact.
                </p>
              </div>

              <div className="pt-6">
                <p className="py-2 px-3 w-fit font-poppinsSemiBold text-lg text-[#5F5F5F] bg-[#EEFEF6] mb-3 rounded-md">
                  Eligibility Criteria
                </p>

                <div className="flex flex-col gap-y-2">
                  {farmDetailsConfirmation?.map((el) => (
                    <p className="bg-[#F6F6F6] p-4 rounded-xl font-poppinsSemiBold text-sm text-[#5F5F5F] flex gap-x-2 items-center">
                      <FaCheckCircle fill="#2D865B" size={24} /> Registered
                      farming business or cooperative
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#F6F6F6] rounded-xl p-6 shadow-md h-fit">
              <div className="pb-4 border-[#E2E2E2] border-b">
                <p className="text-[#2D865B] font-poppinsSemiBold text-2xl mb-3">
                  ₦250,000
                </p>
                <p className=" font-poppinsRegular text-[#DE4204] text-sm">
                  {" "}
                  Deadline: Aug 15, 2025
                </p>
              </div>

              <div className="pt-4">
                <Button className=" w-full block">Apply Now</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
};

export default PublicDetails;
