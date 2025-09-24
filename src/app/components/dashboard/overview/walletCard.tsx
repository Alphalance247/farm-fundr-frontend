"use client";
import { useState } from "react";
import Image from "next/image";
import Button from "../../common/Buttons";
import { IoArrowDownOutline } from "react-icons/io5";
import { IoMdArrowUp } from "react-icons/io";
import RequestPayoutUser from "../wallet/requestPayoutUser";
import { getInvestorDashboardStore } from "@/stores/investor-dashboard/overview/dashboard";

export default function WalletCard() {
  const [hideBalance, setHideBalance] = useState(false);
  const [showPayoutModal, setShowPayoutModal] = useState(false);
  const { data: overviewData } = getInvestorDashboardStore();
  const walletBalance = overviewData?.wallet_balance || 0;
  const roiBalance = overviewData?.roi_total || 0;

  const handleFundWallet = () => {
    setShowPayoutModal(true);
  };

  const handleWithdrawReturns = () => {
    setShowPayoutModal(true);
  };

  const handleCloseModal = () => {
    setShowPayoutModal(false);
  };

  const handleViewTransactions = () => {
    console.log("Navigating to Transactions page...");
  };

  return (
    <>
      <section className="mt-6 px-6 md:px-4 w-[40%] xl:w-full py-8 border border-gray-200 bg-white rounded-2xl space-y-6">
        <div className="flex   justify-center bg-[#EEFEF6] border-[0.75px] text-[#2D865B] rounded-[2.5rem] border-[#2D865B] hover:opacity-[0.8] hover:transition-all hover:duration-500 py-2 px-4 w-fit mx-auto ">
          <label className="flex items-center cursor-pointer">
            <span className="mr-2 text-[#34474E] text-xs">Hide Balance</span>
            <input
              type="checkbox"
              checked={hideBalance}
              onChange={() => setHideBalance(!hideBalance)}
              className="sr-only peer"
            />
            <div className="w-8 h-4 bg-[#D1D1DB] rounded-full peer-checked:bg-[#2D865B] relative transition-colors">
              <div
                className={`absolute top-0.5 left-0.5 h-3 w-3 bg-white rounded-full shadow transition-transform ${
                  hideBalance ? "translate-x-4" : ""
                }`}
              />
            </div>
          </label>
        </div>
        <div className="flex flex-col xl:flex-row gap-4 md:flex-col">
          <div className="bg-gradient-to-r w-full from-[#2D865B] to-[#12482F] border-[#C9FCE3] border text-white rounded-xl p-4 ">
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-8">
                <Image
                  src="/assets/DashBoard/overview/wallet.svg"
                  alt="roi"
                  width={45}
                  height={45}
                />
                <Button
                  onClick={handleFundWallet}
                  variant="subprimary"
                  className="!w-fit flex items-center !py-2 !px-4 !text-center  gap-2 font-poppinsSemiBold font-semibold text-xs"
                >
                  <IoArrowDownOutline className="" /> Fund Wallet
                </Button>
              </div>
              <p className="text-sm text-[#FFFFFF]">Wallet Balance</p>
              <p className="text-2xl font-bold">
                {hideBalance
                  ? "*** ***"
                  : `₦ ${walletBalance.toLocaleString()}`}
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r w-full from-[#C9FCE3] to-[#8BBEA5] border border-[#51F4A6] text-[#34474E] rounded-xl p-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-4">
                <Image
                  src="/assets/DashBoard/overview/wallet.svg"
                  alt="roi"
                  width={45}
                  height={45}
                />
                <Button
                  onClick={handleWithdrawReturns}
                  variant="subprimary"
                  className="!w-fit flex items-center !py-2 !px-4 !text-center font-poppinsSemiBold font-semibold gap-2 text-xs"
                >
                  <IoMdArrowUp />
                  Withdraw Returns
                </Button>
              </div>
              <p className="text-sm text-[#34474E]">
                Total Return of Interest (ROI)
              </p>
              <p className="text-2xl text-[#5F5F5F] font-bold">
                {hideBalance ? "*** ***" : `₦ ${roiBalance.toLocaleString()}`}
              </p>
            </div>
          </div>
        </div>
        <div className="text-center w-full">
          <Button
            onClick={handleViewTransactions}
            variant="secondary"
            className="!w-full"
          >
            View Transactions
          </Button>
        </div>
      </section>
      {showPayoutModal && (
        <RequestPayoutUser handleRequestPayoutModal={handleCloseModal} />
      )}
    </>
  );
}
