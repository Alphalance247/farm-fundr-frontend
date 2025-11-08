"use client";
import Image from "next/image";
import AgencyLayout from "@/app/components/common/agency/agencyLayout";
import WalletOverviewManagent from "@/app/components/agency/disbursement/wallet";
import RecentTransaction from "@/app/components/agency/wallet/recentTransaction";
import { useState } from "react";
import { HiChevronRight } from "react-icons/hi2";
import { FiPlus } from "react-icons/fi";
import WithdrawFundModal from "@/app/components/common/modals/withdrawFundModal";
import FundWallet from "@/app/components/dashboard/common/fundWallet";

interface data {
  id: number;
  name: string;
  image: string;
  totalFarms: number;
  color: string;
}
const Wallet = () => {
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [showFundWallet, setShowFundWallet] = useState(false);

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

  const [isOpen, setIsOpen] = useState(false);
  const defaultOptions = [
    {
      name: "Fund Wallet",
    },
    {
      name: "Withdraw",
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

          <div
            className="relative"
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          >
            <button className="bg-[#282A03] hidden rounded-[40px] text-[#FCFCFC] p-4 font-poppinsSemiBol md:py-[6px] md:px-4 md:block">
              <Image
                src="/assets/my-farms/plus.svg"
                width={24}
                height={24}
                alt="plus"
                className="xl:w-[14px] xl:h-[14px]"
              />
            </button>

            {isOpen && (
              <div className="absolute top-full w-[180px] right-0 bg-[white] rounded-lg shadow-md z-10 mt-2">
                {defaultOptions.map((el, i) => (
                  <div
                    className="px-4 py-3 text-[#7C7C7C] cursor-pointer w-full text-xs justify-between font-poppinsRegular flex gap-[10px] items-center hover:bg-[#EEFEF6] lg:px-2 md:px-1 md:text-[10px] md:gap-x-1 md:py-2"
                    key={i}
                  >
                    <button
                      className="flex items-center gap-x-2"
                      key={i}
                      onClick={() =>
                        el?.name === "Fund Wallet"
                          ? setShowFundWallet(true)
                          : setShowWithdrawModal(true)
                      }
                    >
                      <span>
                        <FiPlus size={20} color="#0000008A" />
                      </span>
                      {el?.name}
                    </button>
                    <HiChevronRight size={20} color="#0000008A" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <WithdrawFundModal
          isOpen={showWithdrawModal}
          onClose={() => setShowWithdrawModal(false)}
        />
        {showFundWallet && (
          <FundWallet onCloseModal={() => setShowFundWallet(false)} />
        )}

        <div className="grid grid-cols-1 gap-4 mt-10">
          <WalletOverviewManagent
            isAgency={true}
            setShowFundWallet={setShowFundWallet}
            setShowWithdrawModal={setShowWithdrawModal}
          />
        </div>

        <RecentTransaction />
      </main>
    </AgencyLayout>
  );
};

export default Wallet;
