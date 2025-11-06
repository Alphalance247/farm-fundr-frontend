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
import RecentTransaction from "@/app/components/agency/wallet/recentTransaction";

interface data {
  id: number;
  name: string;
  image: string;
  totalFarms: number;
  color: string;
}
const Wallet = () => {
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
          <div className="md:w-[70%]">
            <h2 className="text-xl font-poppinsSemiBold text-[#5F5F5F]">
              Agency wallet
            </h2>
            <p className="text-sm font-poppinsRegular text-[#7C7C7C] mt-3">
              manage your funds for grant disbursement
            </p>
          </div>

          <button className="bg-[#282A03] hidden rounded-[40px] text-[#FCFCFC] p-4 font-poppinsSemiBol md:py-[6px] md:px-4 md:block">
            <Image
              src="/assets/my-farms/plus.svg"
              width={24}
              height={24}
              alt="plus"
              className="xl:w-[14px] xl:h-[14px]"
            />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 mt-10">
          <WalletOverviewManagent isAgency={true} />
        </div>

        <RecentTransaction />
      </main>
    </AgencyLayout>
  );
};

export default Wallet;
