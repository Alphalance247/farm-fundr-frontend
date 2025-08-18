"use client";
import { useEffect, useState } from "react";
import DashboardLayout from "../../components/common/dashboardLayout";
import GoBackBtn from "@/app/components/common/goBack";
import { IoPerson } from "react-icons/io5";
import { IoSchoolSharp } from "react-icons/io5";
import { ReactNode } from "react";
import { MdOutlineCreditCard } from "react-icons/md";
import ProfileSettings from "@/app/components/dashboard/settings/profileSettings";
import BankDetails from "@/app/components/dashboard/settings/bankDetails";
import Certifications from "@/app/components/dashboard/settings/Cetifications";
import { useAuth } from "@/context/authContext";
import { getKYCPercentageStore } from "@/stores/settings/getKycPercentage";
import { getUserDetailsStore } from "@/stores/settings/getUserDetails";
import Image from "next/image";
import { environment } from "@/env/env.local";

const Setting = () => {
  const [activeTab, setActiveTab] = useState<string>("Profile settings");
  const { user } = useAuth();
  const { fetchUserKYC, data } = getKYCPercentageStore();
  const { fetchUserDetails, data: userDetails } = getUserDetailsStore();

  useEffect(() => {
    fetchUserKYC();
    fetchUserDetails();
  }, [fetchUserKYC, fetchUserDetails]);

  const tabs: { id: number; name: string; icon: ReactNode }[] = [
    { id: 1, name: "Profile settings", icon: <IoPerson size={20} /> },
    {
      id: 5,
      name: "Bank Details",
      icon: <MdOutlineCreditCard size={20} />,
    },
    { id: 2, name: "Award/Qualification", icon: <IoSchoolSharp size={20} /> },
    // {
    //   id: 3,
    //   name: "Account security",
    //   icon: <MdOutlineSecurity size={20} />,
    // },
    // {
    //   id: 4,
    //   name: "Notification Settings",
    //   icon: <FaGear size={20} />,
    // },
  ];

  return (
    <DashboardLayout>
      <main className="px-10 py-8 bg-gray-50 h-full overflow-auto">
        <GoBackBtn href="/farmer-dashboard" />

        <div className="mt-8">
          <div className="bg-[#226646] flex items-center gap-6 rounded-xl py-12 px-12">
            {userDetails?.user_details?.image ? (
              <Image
                src={
                  `${environment?.imgBaserUrl}${userDetails?.user_details?.image}` ||
                  ""
                }
                height={135}
                width={135}
                alt="profileImage"
                className="ml-8 h-[135px] w-[135px]  rounded-full"
              />
            ) : (
              <div className="h-[135px] w-[135px] rounded-full bg-[#EEFEF6] text-[#2D865B] flex items-center justify-center text-[54px] tracking-[0.34px] font-medium">
                {user?.fullname
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()}
              </div>
            )}

            <div>
              <h5 className="text-[#FFFFFF] text-3xl font-aristoBold mb-2">
                {user?.fullname}
              </h5>
              <div className="flex justify-between text-sm font-poppinsRegular text-[#FCFCFC] mb-4 md:text-[10px]">
                <p>Few steps to complete</p>
                <p>{data?.kyc_percentage || 0}% Complete</p>
              </div>
              <div className="w-full bg-[#F0F2F5] rounded-[20px] h-3 mb-2">
                <div
                  style={{ width: `${data?.kyc_percentage}%` }}
                  className={`bg-[#51F4A6] h-3 rounded-[20px]`}
                ></div>
              </div>

              <p className=" font-poppinsRegular mb-4 text-[white]">
                Complete your KYC and get verified on the platform.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex gap-x-5 items-center border-b border-[#E4E7EC]">
              {tabs.map((el, i) => (
                <button
                  className={`${
                    activeTab === el.name
                      ? "text-[#2D865B] border-b-[3px] border-[#2D865B] bg-white text-sm"
                      : "text-[#7C7C7C] border-transparent "
                  }   font-medium text-sm p-4 border-b-2 flex gap-x-2 items-center`}
                  onClick={() => setActiveTab(el.name)}
                  key={i}
                >
                  <span>{el?.icon}</span> {el.name}
                </button>
              ))}
            </div>

            {activeTab === "Profile settings" && (
              <>
                {userDetails && (
                  <ProfileSettings UserDetails={userDetails.user_details} />
                )}
              </>
            )}
            {activeTab === "Bank Details" && <BankDetails />}
            {activeTab === "Award/Qualification" && <Certifications />}
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
};

export default Setting;
