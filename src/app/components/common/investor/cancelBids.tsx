"use client";
import Image from "next/image";
import ModalOverlay from "../../common/modals/modalOverlay";
import BackIcon from "../../common/backIcon";
import { useState } from "react";
import Button from "../../common/Buttons";
import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

import { AxiosError } from "axios";

const CancelBids = ({
  onCloseModal,
  pendingId,
}: {
  onCloseModal: () => void;
  pendingId: string;
}) => {
  const [loading, setIsLoading] = useState(false);

  const handleReleaseFunds = async () => {
    setIsLoading(true);
    try {
      const res = await axiosInstance.post(
        `investment/bids/${pendingId}/cancel/`
      );

      if (res.status === 200 || res.status === 201) {
        toast.success(res?.data?.statusmessage);
        onCloseModal();
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
              Cancel Bid?
            </h4>
          </div>

          <BackIcon onCloseLink={onCloseModal} />
        </div>

        <div className="px-6 pb-6">
          <div className="mb-10 pt-6">
            <p className="text-sm font-poppinsRegular text-[#5C6C71]">
              Are you absolutely certain that you wish to cancel this bid?
              Please keep in mind that this action is irreversible and cannot be
              undone once completed.
            </p>
          </div>

          <div className="flex gap-x-4">
            <Button
              variant="secondary"
              onClick={onCloseModal}
              className="w-full"
            >
              Don’t Cancel
            </Button>
            <Button onClick={handleReleaseFunds} className="w-full">
              {loading ? "Cancelling..." : "Yes, Cancel Bid"}
            </Button>
          </div>
        </div>
      </div>
    </ModalOverlay>
  );
};

export default CancelBids;
