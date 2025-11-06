"use client";
import Image from "next/image";
import { getFarmListStore } from "@/stores/farms/getFarmList";
import Spinner from "@/app/components/common/modals/spinner";
import Button from "@/app/components/common/Buttons";
import { MdAssignment } from "react-icons/md";
import AgencyLayout from "@/app/components/common/agency/agencyLayout";
import GrantApplicationTable from "@/app/components/agency/GrantApplication/grantApplicationTable";
import WalletOverviewManagent from "@/app/components/agency/disbursement/wallet";
import DisburseTable from "@/app/components/agency/disbursement/disburseTable";

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

        <div className="grid grid-cols-2 gap-4 mt-10 lg:grid-cols-1">
          <WalletOverviewManagent />
          <div className="bg-white rounded-lg px-6 py-4 md:px-3">
            <div className="flex items-center gap-x-2 mb-3">
              <Image
                src="/assets/Agency/disburse/1.svg"
                width={54}
                height={50}
                alt="farm"
                className=""
              />
            </div>

            <div className="flex flex-col items-start justify-between gap-y-2  border-b border-[#F2F2F3] pb-3 md:flex-col md:items-start">
              <h3 className="text-sm font-poppinsRegular text-[#34474E] mb-2 md:hidden">
                Funds Disbursed
              </h3>
              <p className="text-3xl font-poppinsSemiBold text-[#5F5F5F]">
                ₦2,000,000
              </p>
            </div>
          </div>
        </div>

        <DisburseTable />
      </main>
    </AgencyLayout>
  );
};

export default GrantDisbursement;
