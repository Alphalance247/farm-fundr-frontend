"use client";
import BackIcon from "@/app/components/common/backIcon";
import Button from "@/app/components/common/Buttons";
import ModalOverlay from "@/app/components/common/modals/modalOverlay";
import RequestPayoutModal from "@/app/components/common/modals/requestPayoutModal";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const RequestPayoutUser = ({
  handleRequestPayoutModal,
}: {
  handleRequestPayoutModal: () => void;
}) => {
  const [successPayout, setPayOutSuccess] = useState("initial");

  const handleCloseModal = () => {
    // setPayOutSuccess("success");
  };

  return (
    <ModalOverlay onClose={handleCloseModal}>
      {successPayout === "initial" && (
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
                Request Payout
              </h4>
            </div>

            <BackIcon link="/farmer-dashboard/wallet" />
          </div>

          <div className="px-8 py-6 bg-white rounded-br-[10px] rounded-bl-[10px]">
            <p className="text-sm font-poppinsRegular text-[#5C6C71] mb-10">
              A notification will be sent to farmpady for approval of your
              withdrawal. Do you want to request for payout?
            </p>

            <div className="flex items-center gap-x-4">
              <div className="w-full">
                <Link href="/farmer-dashboard/wallet">
                  <Button variant="secondary" className="w-full">
                    Later, Thank you
                  </Button>
                </Link>
              </div>

              <Button
                className="w-full"
                onClick={() => setPayOutSuccess("success")}
              >
                Yes, Request Payout
              </Button>
            </div>
          </div>
        </div>
      )}

      {successPayout === "success" && (
        <RequestPayoutModal
          title="Payout request sent!"
          description="Your payout request has been sent to farmpady team and you will be
              notified shortly for your withdrawal on your wallet. Thank you!"
          link="/farmer-dashboard/wallet"
          img="/assets/DashBoard/wallet/success-request.svg"
          handleClose={handleRequestPayoutModal}
        />
      )}
      {successPayout === "fail" && (
        <RequestPayoutModal
          title="Payout request failed!"
          description="You don’t have enough balance on your wallet to request for payout at the moment. Make sure you have enough balance on your wallet before you request for payout."
          link="/farmer-dashboard/wallet"
          img="/assets/DashBoard/wallet/failed-request.svg"
          handleClose={handleRequestPayoutModal}
        />
      )}
    </ModalOverlay>
  );
};

export default RequestPayoutUser;
