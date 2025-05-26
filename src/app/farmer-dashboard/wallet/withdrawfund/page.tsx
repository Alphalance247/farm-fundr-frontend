"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "@/app/components/common/Buttons";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoPencilSharp } from "react-icons/io5";
import BidConfirmModal from "@/app/components/common/modals/bidConfirmModal";
import BackIcon from "@/app/components/common/backIcon";
import { Topbar } from "@/app/components/common/dashboard/topBar";
import DashboardLayout from "@/app/components/common/dashboardLayout";

const bankAccounts = [
  {
    id: 1,
    name: "Access Bank",
    number: "0012345678",
    holder: "Nelson Mandela",
    icon: "/assets/DashBoard/wallet/access.svg",
  },
  // Add more accounts as needed
];

const WALLET_BALANCE = 1307500; // Example balance
const CHARGE_RATE = 0.0015; // 0.15%

export default function WithdrawFundStep1() {
  const [selectedBank, setSelectedBank] = useState(bankAccounts[0]);
  const [withdrawAll, setWithdrawAll] = useState(true);
  const [amount, setAmount] = useState(WALLET_BALANCE);
  const [showTransactionDetails, setShowTransactionDetails] =
    useState("enterAmount");
  const [showBidConfirmModal, setShowBidConfirmModal] = useState(false);

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

  const handleCloseModal = () => {
    setShowBidConfirmModal(false);
  };

  const handleConfirmWithdraw = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowBidConfirmModal(true);
  };

  return (
    <DashboardLayout>
      <Topbar overview="Wallet" />
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
                Your Payout Will Be Sent Within 24 Hours
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
                        className="w-full p-3 border text-sm font-poppinsSemiBold rounded-xl text-[#5F5F5F] bg-[#F6F6F6] border-[#E2E2E2]"
                        value={amount.toLocaleString()}
                        onChange={handleAmountChange}
                        disabled={withdrawAll}
                      />
                    </div>
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
                      className="w-full flex items-center justify-center"
                      onClick={handleGotNextStep}
                    >
                      Proceed{" "}
                      <span>
                        {" "}
                        <FaArrowRightLong color="#FCFCFC" className="ml-2" />
                      </span>
                    </Button>
                    <Button variant="secondary" className="w-full">
                      Cancel
                    </Button>
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
                      <span>{selectedBank?.name}</span>
                    </p>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-b-[#F6F6F6]">
                    <p className="text-sm font-poppinsRegular text-[#7C7C7C]">
                      Account Name
                    </p>
                    <p className="text-sm font-poppinsSemiBold text-[#5F5F5F]">
                      {selectedBank?.holder}
                    </p>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-b-[#F6F6F6]">
                    <p className="text-sm font-poppinsRegular text-[#7C7C7C]">
                      Account Number
                    </p>
                    <p className="text-sm font-poppinsSemiBold text-[#5F5F5F]">
                      {selectedBank?.number}
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
                    >
                      Proceed{" "}
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
              amount={amount}
              status="Pending"
              accountName={selectedBank?.holder}
              accountNumber={selectedBank?.number}
              bank={selectedBank?.name}
              onClose={handleCloseModal}
              charges={charges.toLocaleString()}
              transactionId="1234567890"
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
