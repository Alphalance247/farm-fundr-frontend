"use client";
import Image from "next/image";
import ModalOverlay from "../../common/modals/modalOverlay";
import BackIcon from "../../common/backIcon";
import Label from "../../common/label";
import Input from "../../common/input";
import { useState } from "react";
import Button from "../../common/Buttons";
import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { AxiosError } from "axios";

const FundWallet = ({ onCloseModal }: { onCloseModal: () => void }) => {
  const [amount, setAmount] = useState("");
  const [loading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleFundWallet = async () => {
    setIsLoading(true);
    try {
      const res = await axiosInstance.post("/investment/fund-wallet/", {
        amount: amount,
      });

      if (res.status === 200 || res.status === 201) {
        toast.success(res?.data?.statusmessage);
        router.push(res?.data?.payment_link);
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

  return (
    <ModalOverlay
      onClose={() => {
        onCloseModal();
      }}
    >
      <div className="bg-white w-full max-w-[600px] mx-auto rounded-[10px] shadow-lg z-50">
        <div className="py-4 px-8 bg-[#EEFEF6] rounded-tr-[10px] rounded-tl-[10px] flex items-center justify-between">
          <div className="flex items-center gap-x-4">
            <Image
              src="/assets/DashBoard/wallet/deactivate.svg"
              width={40}
              height={40}
              alt="deactivate"
            />

            <h4 className="text-lg font-poppinsSemiBold text-[#0B222A]">
              Fund Wallet
            </h4>
          </div>

          <BackIcon onCloseLink={onCloseModal} />
        </div>

        <div className="px-6 pb-6">
          <div className="mb-6 pt-6">
            <Label className="mb-2">Wallet</Label>

            <Input
              type="number"
              value={amount}
              name="amount"
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <div className="flex flex-col justify-end items-end">
            <Button
              className={`${
                amount === "" ? " cursor-not-allowed opacity-60" : ""
              }`}
              onClick={handleFundWallet}
              disabled={amount === ""}
            >
              {loading ? "Funding..." : "Fund Wallet"}
            </Button>
          </div>
        </div>
      </div>
    </ModalOverlay>
  );
};

export default FundWallet;
