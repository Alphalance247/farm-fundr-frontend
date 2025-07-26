"use client";
import DashboardLayout from "@/app/components/common/dashboardLayout";
import { Topbar } from "@/app/components/common/dashboard/topBar";
import BillingFrequency from "@/app/components/dashboard/subscription/billingFrequency";
import { useState, useEffect } from "react";
import TransferPopUP from "@/app/components/dashboard/subscription/transferPopUp";
import SuccessfulSubscription from "@/app/components/dashboard/subscription/succesfulSubscription";
import axiosInstance from "@/lib/axios";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface SubTier {
  planType: string;
  prices: string;
  offer: string;
  tier: string;
}

interface data {
  heading: string;
  subhead: string;
  subTier: SubTier[];
}

const BasicPlan = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [successfulTransfer, setSuccessfulTranfer] = useState<boolean>(false);
  const [subType, setSubType] = useState<string>("monthly");
  const [loading, setIsLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const storedUserType = localStorage.getItem("selectedPlanId");
    setSelectedPlan(storedUserType || "");
  }, []);

  const data: data[] = [
    {
      heading: "Billing frequency",
      subhead: "Basic Plan",
      subTier: [
        {
          planType: "monthly",
          prices: "4,500",
          offer: "Monthly",
          tier: "Pay monthly",
        },
        {
          planType: "quarterly",
          prices: "10,530",
          offer: "Save 22%",
          tier: "Pay quarterly",
        },

        {
          planType: "yearly",
          prices: "36,180",
          offer: "Save 50%",
          tier: "Pay yearly",
        },
      ],
    },
  ];

  const handlePaystackPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await axiosInstance.post(`/farms/subscribe-payment-link`, {
        payment_mode: subType,
        subscription_plan_id: selectedPlan,
      });

      if (res.status === 200) {
        toast.success("Payment link generated successfully, Redirecting......");
        router.push(res?.data?.payment_link);
      } else {
        toast.error(
          res?.data?.message || "Failed to send payroll confirmation message"
        );
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

  const handleTransferPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handlePaidTransfer = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessfulTranfer(true);
  };

  const handleRemoveModal = () => {
    setShowModal(false);
    setSuccessfulTranfer(false);
  };

  return (
    // <div className="relative">
    <DashboardLayout>
      <Topbar overview="Subscription" />

      {data.map((item, i) => (
        <BillingFrequency
          heading="Billing frequency"
          planName="Basic Plan"
          subhead="Basic Plan"
          subType={subType}
          setSubType={setSubType}
          subscriptionTier={item?.subTier}
          key={i}
          onClick={handlePaystackPayment}
          onClickTranfer={handleTransferPayment}
          loading={loading}
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
