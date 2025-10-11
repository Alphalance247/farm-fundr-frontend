"use client";
import Button from "@/app/components/common/Buttons";
import ModalOverlay from "@/app/components/common/modals/modalOverlay";
import Image from "next/image";
import BackIcon from "../../common/backIcon";

const DeclineBidModal = ({
  onCloseBid,
  onDeclineBid,
  loading,
}: {
  onCloseBid: () => void;
  onDeclineBid: () => void;
  loading: boolean;
}) => {
  return (
    <ModalOverlay onClose={onCloseBid}>
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
              Decline Bid?
            </h4>
          </div>

          <BackIcon onCloseLink={onCloseBid} />
        </div>

        <div className="px-6 pb-6">
          <div className="mb-10 pt-6">
            <p className="text-sm font-poppinsRegular text-[#5C6C71]">
              Are you sure you want to decline this bid? This action cannot be
              undone.
            </p>
          </div>

          <div className="flex gap-x-4">
            <Button variant="secondary" onClick={onCloseBid} className="w-full">
              No, Cancel
            </Button>
            <Button
              onClick={onDeclineBid}
              variant="dangerSecondary"
              className="w-full"
            >
              {loading ? "declining..." : "Yes, Decline Bid"}
            </Button>
          </div>
        </div>
      </div>
    </ModalOverlay>
  );
};

export default DeclineBidModal;
