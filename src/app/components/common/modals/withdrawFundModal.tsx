"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/app/components/common/Buttons";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoPencilSharp } from "react-icons/io5";
import BidConfirmModal from "@/app/components/common/modals/bidConfirmModal";
import { getUserBankStore } from "@/stores/settings/getBankDetails";
import toast from "react-hot-toast";
import axiosInstance from "@/lib/axios";
import { AxiosError } from "axios";
import { getFarmerBalanceStore } from "@/stores/wallet/getFarmerBalance";
// import { getInvestorBalanceStore } from "@/stores/wallet/getInvestorBalance";
import ModalOverlay from "./modalOverlay";
import BackIcon from "../backIcon";

interface WithdrawFundModalProps {
  isOpen: boolean;
  onClose: () => void;
  userType: "farmer" | "investor";
}

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

export default function WithdrawFundModal({ 
  isOpen, 
  onClose, 
  userType 
}: WithdrawFundModalProps) {
  const { data, fetchUserBank } = getUserBankStore();
  const { data: farmerBalanceData, fetchFarmerBalance } = getFarmerBalanceStore();
  // const { data: investorBalanceData, fetchInvestorBalance } = getInvestorBalanceStore();
  
  const investorBalanceData = {
    wallet: {
      balance: 1500000 // 1.5M dummy balance
    }
  };
  const [transactionDetails, setTranactionDetails] = useState<tranactionData | null>(null);

  useEffect(() => {
    if (isOpen) {
      fetchUserBank();
      if (userType === "farmer") {
        fetchFarmerBalance();
      }
    }
  }, [isOpen, fetchUserBank, fetchFarmerBalance, userType]);

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

  const [showTransactionDetails, setShowTransactionDetails] = useState("enterAmount");
  const [showBidConfirmModal, setShowBidConfirmModal] = useState(false);
  
  // Get balance based on user type
  const WALLET_BALANCE = userType === "farmer" 
    ? farmerBalanceData?.wallet?.balance || 0
    : investorBalanceData?.wallet?.balance || 0;
    
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

  const handleConfirmWithdraw = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      // Use different endpoints based on user type
      const endpoint = userType === "farmer" 
        ? "farms/wallet/withdraw" 
        : "investors/wallet/withdraw";
        
      // For investors, simulate a successful response with dummy data
      if (userType === "investor") {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const dummyTransactionData = {
          data: {
            amount,
            bank_details: {
              account_name: bankData?.account_name || "John Doe",
              account_number: bankData?.account_number || "1234567890",
              bank_name: bankData?.bank_name || "Access Bank",
            },
            id: `TXN_${Date.now()}`,
            status: "pending",
          }
        };
        
        setShowBidConfirmModal(true);
        setTranactionDetails(dummyTransactionData);
        toast.success("Withdrawal request submitted successfully!");
      } else {
        const res = await axiosInstance.post(endpoint, {
          amount,
        });

        if (res.status === 201) {
          setShowBidConfirmModal(true);
          setTranactionDetails(res?.data);
        }
      }

      setIsLoading(false);
    } catch (err) {
      let errorMessage = "An error occurred please try again or contact Admin";
      if (err instanceof AxiosError) {
        errorMessage = err.response?.data?.statusmessage || errorMessage;
      }

      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setShowTransactionDetails("enterAmount");
    setShowBidConfirmModal(false);
    setTranactionDetails(null);
    setAmount(WALLET_BALANCE);
    setWithdrawAll(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <ModalOverlay onClose={handleClose}>
        <div className="md:px-2 z-50 max-w-4xl mx-auto max-h-[90vh] overflow-y-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden max-h-[85vh]">
            <div className="bg-[#226646] px-6 py-4 flex items-center justify-between">
              <h2 className="text-white text-xl font-aristoBold">
                Withdraw Funds From Wallet
              </h2>
              <BackIcon onCloseLink={handleClose} />
            </div>

            <div className="grid grid-cols-[40%_auto] md:grid-cols-1 max-h-[calc(85vh-80px)] overflow-y-auto">
              <div className="bg-[#EEFEF6] justify-center flex items-center p-6 md:p-4">
                <Image
                  src="/assets/DashBoard/wallet/withdraw.png"
                  width={200}
                  height={120}
                  alt="withdrawfund"
                  className="w-auto h-auto"
                />
              </div>
              <div className="bg-white p-6 md:p-4 overflow-y-auto">
                <div className="mb-6">
                  <p className="text-center text-sm mb-4 font-poppinsSemiBold text-[#303030]">
                    Step {showTransactionDetails === "enterAmount" ? "1" : "2"} / 2
                  </p>

                  <div className="flex items-center gap-2">
                    <p className="w-full h-[3px] bg-[#51F4A6] rounded-[12px]"></p>
                    <p
                      className={`w-full h-[3px] rounded-[12px] ${
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
                  <span>Security measure:</span>{" "}
                  <span className="font-poppinsSemiBold">
                    Your Payout Will Be Sent Within 24 Hours.
                  </span>
                </div>

                <form action="" className="mt-6">
                  {showTransactionDetails === "enterAmount" ? (
                    <div className="flex flex-col gap-y-6">
                      <div>
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
                            className={`w-full p-3 border text-sm font-poppinsSemiBold rounded-xl text-[#5F5F5F] bg-[#F6F6F6] outline-none ${
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
                              withdrawal amount cannot exceed wallet balance
                            </p>
                          ) : null}
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

                      <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
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
                          className={`w-full flex items-center justify-center ${
                            amount > WALLET_BALANCE
                              ? "cursor-not-allowed opacity-60"
                              : "cursor-pointer"
                          }`}
                          onClick={handleGotNextStep}
                          disabled={amount > WALLET_BALANCE}
                          variant={amount > WALLET_BALANCE ? "googleBtn" : "primary"}
                        >
                          Proceed{" "}
                          <span>
                            <FaArrowRightLong color="#FCFCFC" className="ml-2" />
                          </span>
                        </Button>
                        <Button variant="secondary" className="w-full" onClick={handleClose}>
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-y-3">
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
                          />
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
                          0.15% (₦{charges.toLocaleString()})
                        </p>
                      </div>

                      <div>
                        <Button
                          variant="subsecondary"
                          className="w-fit flex items-center justify-center gap-x-2 mx-auto"
                          onClick={handleGoBack}
                        >
                          Edit Withdrawal Details
                          <span>
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
            </div>
          </div>
        </div>
      </ModalOverlay>

      {showBidConfirmModal && (
        <BidConfirmModal
          amount={details?.amount || 0}
          status={details?.status || ""}
          accountName={details?.bank_details?.account_name || ""}
          accountNumber={details?.bank_details?.account_number || ""}
          bank={details?.bank_details?.bank_name || ""}
          onClose={handleClose}
          charges={charges.toLocaleString()}
          transactionId={details?.id || ""}
          transactionDate="2021-01-01"
          paymentMethod="Bank Transfer"
          img={selectedBank?.icon}
        />
      )}
    </>
  );
}
