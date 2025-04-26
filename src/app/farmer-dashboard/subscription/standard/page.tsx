"use client";
import DashboardLayout from "@/app/components/common/dashboardLayout";
import { Topbar } from "@/app/components/common/dashboard/topBar";
import BillingFrequency from "@/app/components/dashboard/subscription/billingFrequency";
import { useState } from "react";
import TransferPopUP from "@/app/components/dashboard/subscription/transferPopUp";
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

const StandardPlan = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const data: data[] = [
    {
      heading: "",
      subhead: "",
      subTier: [
        {
          planType: "Pay monthly",
          prices: "6,500",
          offer: "",
        },
        {
          planType: "Pay quarterly",
          prices: "20,530",
          offer: "Save 22%",
        },
        {
          planType: "Pay Bi-yearly",
          prices: "31,750",
          offer: "Save 33%",
        },
        {
          planType: "Pay yearly",
          prices: "46,180",
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

  const handleRemoveModal = () => {
    setShowModal(false);
  };

  return (
    <div className="relative">
      <DashboardLayout>
        <Topbar overview="Wallet" />

        {data.map((item, i) => (
          <BillingFrequency
            heading="Billings"
            planName="Standard Plan"
            subhead="Standard Plan"
            subscriptionTier={item?.subTier}
            key={i}
            onClick={handlePaystackPayment}
            onClickTranfer={handleTransferPayment}
          />
        ))}
        {/* Overlay */}

        {showModal && (
          <>
            <div
              className="absolute inset-0 bg-black opacity-50 z-20"
              onClick={handleRemoveModal} // Close modal when clicking on the overlay
            ></div>
            <TransferPopUP onClick={handleRemoveModal} />
          </>
        )}
      </DashboardLayout>
    </div>
  );
};

export default StandardPlan;
