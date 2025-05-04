"use client";
import DashboardLayout from "@/app/components/common/dashboardLayout";
import { Topbar } from "@/app/components/common/dashboard/topBar";
import BillingFrequency from "@/app/components/dashboard/subscription/billingFrequency";
import { useState } from "react";
import TransferPopUP from "@/app/components/dashboard/subscription/transferPopUp";
import SuccessfulSubscription from "@/app/components/dashboard/subscription/succesfulSubscription";
interface SubTier {
  planType: string;
  prices: string;
  offer: string;
}

interface data {
  heading: string;
  subhead: string;
  subTier: SubTier[];
}

const BasicPlan = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [successfulTransfer, setSuccessfulTranfer] = useState<boolean>(false);

  const data: data[] = [
    {
      heading: "Billing frequency",
      subhead: "Basic Plan",
      subTier: [
        {
          planType: "Pay monthly",
          prices: "4,500",
          offer: "",
        },
        {
          planType: "Pay quarterly",
          prices: "10,530",
          offer: "Save 22%",
        },
        {
          planType: "Pay Bi-yearly",
          prices: "21,750",
          offer: "Save 33%",
        },
        {
          planType: "Pay yearly",
          prices: "36,180",
          offer: "Save 50%",
        },
      ],
    },
  ];

  const handlePaystackPayment = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("paysta");
  };

  const handleTransferPayment = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("tranderffff");
    setShowModal(true);
  };

  const handlePaidTransfer = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("transfer successful");
    setSuccessfulTranfer(true);
  };

  const handleRemoveModal = () => {
    setShowModal(false);
    setSuccessfulTranfer(false);
  };

  return (
    // <div className="relative">
    <DashboardLayout>
      <Topbar overview="Wallet" />

      {data.map((item, i) => (
        <BillingFrequency
          heading="Billing frequency"
          planName="Basic Plan"
          subhead="Basic Plan"
          subscriptionTier={item?.subTier}
          key={i}
          onClick={handlePaystackPayment}
          onClickTranfer={handleTransferPayment}
        />
      ))}
      {/* Overlay */}

      {showModal && (
        <>
          {successfulTransfer ? (
            <SuccessfulSubscription onClick={handleRemoveModal} />
          ) : (
            <TransferPopUP
              onClick={handleRemoveModal}
              handlePaidTansfer={handlePaidTransfer}
            />
          )}
        </>
      )}
    </DashboardLayout>
    // </div>
  );
};

export default BasicPlan;
