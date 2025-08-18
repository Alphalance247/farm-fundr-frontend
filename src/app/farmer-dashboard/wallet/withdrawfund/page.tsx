"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/app/components/common/Buttons";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoPencilSharp } from "react-icons/io5";
import BidConfirmModal from "@/app/components/common/modals/bidConfirmModal";
import BackIcon from "@/app/components/common/backIcon";
import DashboardLayout from "@/app/components/common/dashboardLayout";
import { getUserBankStore } from "@/stores/settings/getBankDetails";
import toast from "react-hot-toast";
import axiosInstance from "@/lib/axios";
import { AxiosError } from "axios";
import { getFarmerBalanceStore } from "@/stores/wallet/getFarmerBalance";
import Link from "next/link";

interface tranactionData {
  data: {
    amount: number;
    bank_details: {
      account_name: string;
      account_number: string;
      bank_name: string;
    };
    id: string;
    status: string;
  };
}

export default function WithdrawFundStep1() {
  const { data, fetchUserBank } = getUserBankStore();
  const { data: farmerBalanceData, fetchFarmerBalance } =
    getFarmerBalanceStore();
  const [transactionDetails, setTranactionDetails] =
    useState<tranactionData | null>(null);

  useEffect(() => {
    fetchUserBank();
    fetchFarmerBalance();
  }, [fetchUserBank, fetchFarmerBalance]);

  const bankData = data?.bank_details || null;
  const details = transactionDetails?.data || null;

  const bankAccounts = [
    {
      id: 1,
      name: bankData?.bank_name || "N/A",
      number: bankData?.account_number || "N/A",
      holder: bankData?.account_name || "N/A",
      icon: "/assets/DashBoard/wallet/access.svg",
    },
  ];

  const [selectedBank, setSelectedBank] = useState(bankAccounts[0]);
  const [withdrawAll, setWithdrawAll] = useState(false);
  const [loading, setIsLoading] = useState(false);

  const [showTransactionDetails, setShowTransactionDetails] =
    useState("enterAmount");
  const [showBidConfirmModal, setShowBidConfirmModal] = useState(false);
  const WALLET_BALANCE = farmerBalanceData?.wallet?.balance || 0; // Example balance
  const [amount, setAmount] = useState(WALLET_BALANCE);
  const CHARGE_RATE = 0.0015; // 0.15%
  const charges = Math.round(amount * CHARGE_RATE);
  const expectedCredit = amount - charges;
  const handleGotNextStep = () => {
    setShowTransactionDetails("nextStep");
  };

  const handleGoBack = () => {
    setShowTransactionDetails("enterAmount");
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value.replace(/[^0-9]/g, ""));
    setAmount(value);
    setWithdrawAll(value === WALLET_BALANCE);
  };

  const handleConfirmWithdraw = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const res = await axiosInstance.post(`farms/wallet/withdraw`, {
        amount,
      });

      if (res.status === 201) {
        setShowBidConfirmModal(true);
        setTranactionDetails(res?.data);
      }

      setIsLoading(false);
    } catch (err) {
      // Extract the error message from the response
      let errorMessage = "An error occurred please try again or contact Admin";
      if (err instanceof AxiosError) {
        // Check if err is an instance of AxiosError
        errorMessage = err.response?.data?.statusmessage || errorMessage;
      }

      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <main className="overflow-auto bg-gray-50">
        <section className="bg-white grid grid-cols-[40%_auto] rounded-xl">
          <div className="bg-[#EEFEF6] justify-center flex items-center">
            <Image
              src="/assets/DashBoard/wallet/withdraw.png"
              width={269}
              height={167}
              alt="withdrawfund"
            />
          </div>

          <div className="bg-white shadow p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="mb-2 font-aristoBold text-3xl text-[#5F5F5F]">
                Withdraw Funds From Wallet
              </h2>

              <BackIcon link="/farmer-dashboard/wallet" />
            </div>

            <div className="mb-6">
              <p className="text-center text-sm mb-4 font-poppinsSemiBold text-[#303030]">
                Step {showTransactionDetails === "enterAmount" ? "1" : "2"} / 2
              </p>

              <div className="flex items-center gap-2">
                <p className="w-full h-[3px] bg-[#51F4A6] rounded-[12px]"></p>
                <p
                  className={`w-full h-[3px]  rounded-[12px] ${
                    showTransactionDetails === "nextStep"
                      ? "bg-[#51F4A6]"
                      : "bg-[#E2E2E2]"
                  }`}
                ></p>
              </div>
            </div>

            {showTransactionDetails === "enterAmount" ? (
              <p className="text-lg text-center font-poppinsSemiBold text-[#5F5F5F] mb-4">
                Enter withdrawal details
              </p>
            ) : (
              <p className="text-lg text-center font-poppinsSemiBold text-[#5F5F5F] mb-4">
                Withdrawal Review
              </p>
            )}

            <div className="bg-[#FFFAE6] text-[#B29301] w-fit mx-auto p-2 rounded mb-4 text-center text-xs">
              <span> Security measure:</span>{" "}
              <span className="font-poppinsSemiBold">
                Your Payout Will Be Sent Within 24 Hours.
              </span>
            </div>

            <form action="" className="mt-6">
              {showTransactionDetails === "enterAmount" ? (
                <div className="flex flex-col gap-y-8">
                  <div className="">
                    <label className="block mb-2 font-poppinsSemiBold text-[#5F5F5F]">
                      Bank Account
                    </label>
                    <select
                      className="w-full p-3 border text-sm font-poppinsSemiBold rounded-xl text-[#5F5F5F] bg-[#F6F6F6] border-[#E2E2E2]"
                      value={selectedBank.id}
                      onChange={(e) =>
                        setSelectedBank(
                          bankAccounts.find(
                            (b) => b.id === Number(e.target.value)
                          )!
                        )
                      }
                    >
                      {bankAccounts.map((bank) => (
                        <option key={bank.id} value={bank.id}>
                          {bank.name} - {bank.number} - {bank.holder}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <div>
                      <label className="block mb-2 font-poppinsSemiBold text-[#5F5F5F]">
                        Withdrawal Amount
                      </label>
                      <input
                        type="text"
                        className={`w-full p-3 border text-sm font-poppinsSemiBold rounded-xl text-[#5F5F5F] bg-[#F6F6F6]  outline-none ${
                          amount > WALLET_BALANCE
                            ? "border-red-600"
                            : "border-[#E2E2E2]"
                        }`}
                        value={amount.toLocaleString()}
                        onChange={handleAmountChange}
                        disabled={withdrawAll}
                      />
                      {amount > WALLET_BALANCE ? (
                        <p className="text-red-600 text-sm">
                          withdrawal amount cannot exceed wallet balance{" "}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                    {/*  */}
                    <div className="flex items-center mt-2">
                      <input
                        type="checkbox"
                        checked={withdrawAll}
                        onChange={() => {
                          setWithdrawAll(!withdrawAll);
                          setAmount(!withdrawAll ? WALLET_BALANCE : 0);
                        }}
                      />
                      <span className="ml-2 text-[#282A03] text-xs font-poppinsRegular">
                        Withdraw all balance
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="block mb-2 font-poppinsSemiBold text-sm text-[#5F5F5F]">
                        Charges (0.15%)
                      </p>
                      <div className="w-full p-3 border text-sm font-poppinsSemiBold rounded-xl text-[#5F5F5F] bg-[#F6F6F6] border-[#E2E2E2]">
                        ₦{charges.toLocaleString()}
                      </div>
                    </div>

                    <div>
                      <div className="block mb-2 font-poppinsSemiBold text-sm text-[#5F5F5F]">
                        Expected Credit Amount
                      </div>
                      <div className="w-full p-3 border text-sm font-poppinsSemiBold rounded-xl text-[#5F5F5F] bg-[#F6F6F6] border-[#E2E2E2]">
                        ₦{expectedCredit.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-4">
                    <Button
                      className={`w-full flex items-center justify-center  ${
                        amount > WALLET_BALANCE
                          ? " cursor-not-allowed opacity-60"
                          : "cursor-pointer"
                      }`}
                      onClick={handleGotNextStep}
                      disabled={amount > WALLET_BALANCE}
                      variant={
                        amount > WALLET_BALANCE ? "googleBtn" : "primary"
                      }
                    >
                      Proceed{" "}
                      <span>
                        {" "}
                        <FaArrowRightLong color="#FCFCFC" className="ml-2" />
                      </span>
                    </Button>
                    <Link href={"/farmer-dashboard/wallet"}>
                      <Button variant="secondary" className="w-full">
                        Cancel
                      </Button>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className=" flex flex-col gap-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-b-[#F6F6F6]">
                    <p className="text-sm font-poppinsRegular text-[#7C7C7C]">
                      Bank Name
                    </p>
                    <p className="text-sm font-poppinsSemiBold text-[#5F5F5F] flex items-center gap-x-2">
                      <Image
                        src={selectedBank?.icon}
                        width={22}
                        height={22}
                        alt="bank"
                      />{" "}
                      <span>{bankAccounts[0]?.name}</span>
                    </p>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-b-[#F6F6F6]">
                    <p className="text-sm font-poppinsRegular text-[#7C7C7C]">
                      Account Name
                    </p>
                    <p className="text-sm font-poppinsSemiBold text-[#5F5F5F]">
                      {bankAccounts[0]?.holder}
                    </p>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-b-[#F6F6F6]">
                    <p className="text-sm font-poppinsRegular text-[#7C7C7C]">
                      Account Number
                    </p>
                    <p className="text-sm font-poppinsSemiBold text-[#5F5F5F]">
                      {bankAccounts[0]?.number}
                    </p>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-b-[#F6F6F6]">
                    <p className="text-sm font-poppinsRegular text-[#7C7C7C]">
                      Amount
                    </p>
                    <p className="text-sm font-poppinsSemiBold text-[#5F5F5F]">
                      ₦{amount.toLocaleString()}
                    </p>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-b-[#F6F6F6]">
                    <p className="text-sm font-poppinsRegular text-[#7C7C7C]">
                      Charges
                    </p>
                    <p className="text-sm font-poppinsSemiBold text-[#5F5F5F]">
                      0.5% (₦{charges.toLocaleString()})
                    </p>
                  </div>

                  <div className="">
                    <Button
                      variant="subsecondary"
                      className="w-fit flex items-center justify-center gap-x-2 mx-auto"
                      onClick={handleGoBack}
                    >
                      Edit Withdrawal Details
                      <span>
                        {" "}
                        <IoPencilSharp color="#2D865B" className="text-sm" />
                      </span>
                    </Button>
                  </div>

                  <div className="flex flex-col gap-y-4 mt-5">
                    <Button
                      className="w-full flex items-center justify-center"
                      onClick={handleConfirmWithdraw}
                      type="button"
                    >
                      {loading ? "Withdrawing...." : "Proceed"}{" "}
                      <span>
                        {" "}
                        <FaArrowRightLong color="#FCFCFC" className="ml-2" />
                      </span>
                    </Button>
                    <Button
                      variant="secondary"
                      className="w-full"
                      onClick={handleGoBack}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </div>
          {showBidConfirmModal && (
            <BidConfirmModal
              amount={details?.amount || 0}
              status={details?.status || ""}
              accountName={details?.bank_details?.account_name || ""}
              accountNumber={details?.bank_details?.account_number || ""}
              bank={details?.bank_details?.bank_name || ""}
              onClose={() => {}}
              charges={charges.toLocaleString()}
              transactionId={details?.id || ""}
              transactionDate="2021-01-01"
              paymentMethod="Bank Transfer"
              img={selectedBank?.icon}
            />
          )}
        </section>
      </main>
    </DashboardLayout>
  );
}
