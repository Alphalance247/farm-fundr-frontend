"use client";
import Image from "next/image";
import { getFarmListStore } from "@/stores/farms/getFarmList";
import Spinner from "@/app/components/common/modals/spinner";
import Button from "@/app/components/common/Buttons";
import { MdAssignment } from "react-icons/md";
import AgencyLayout from "@/app/components/common/agency/agencyLayout";
import GrantApplicationTable from "@/app/components/agency/GrantApplication/grantApplicationTable";

interface data {
  id: number;
  name: string;
  image: string;
  totalFarms: number;
  color: string;
}
const GrantDisbursement = () => {
  const { data: farmList, loading, error, fetchFarmList } = getFarmListStore();

  const data: data[] = [
    {
      id: 1,
      name: "Total Applications",
      image: "/assets/Agency/Applications/1.svg",
      color: "#4379FF",
      totalFarms: 200,
    },
    {
      id: 2,
      name: "Approved Applications",
      image: "/assets/Agency/Applications/2.svg",
      color: "#00C853",
      totalFarms: 30,
    },
    {
      id: 3,
      name: "Pending Applications",
      color: "#31DBFF",
      image: "/assets/Agency/Applications/3.svg",
      totalFarms: 12,
    },
    {
      id: 4,
      name: "Rejected Applications",
      color: "#31DBFF",
      image: "/assets/Agency/Applications/4.svg",
      totalFarms: 100,
    },
  ];

  return (
    <AgencyLayout>
      <main className="px-10 py-10 bg-gray-50 overflow-y-scroll h-full xl:px-4 xl:py-6">
        <div className="flex justify-between items-center">
          <div className="">
            <h2 className="text-xl font-poppinsSemiBold text-[#5F5F5F]">
              Disbursement Management
            </h2>
            <p className="text-sm font-poppinsRegular text-[#7C7C7C] mt-3">
              Manage and release funds to approved farmer applications
            </p>
          </div>
        </div>
      </main>
    </AgencyLayout>
  );
};

export default GrantDisbursement;
