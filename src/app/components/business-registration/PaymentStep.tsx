"use client";
import { useState } from "react";
import Button from "../common/Buttons";
import { FaArrowRightLong, FaArrowLeftLong, FaCopy } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { toast } from "react-hot-toast";
import Image from "next/image";
import StepProgressBar from "../common/stepProgressBar";
import ModalOverlay from "../common/modals/modalOverlay";
import Input from "../common/input";
import Label from "../common/label";
import businessInfo from "../../../../public/assets/image 96.png";
import pay from "../../../../public/assets/image 110.png";
import paystack from "../../../../public/assets/paystack_symbol.svg (1).png";
import bank from "../../../../public/assets/paystack_symbol.svg (2).png";
import { RiBankFill } from "react-icons/ri";
import success from "../../../../public/assets/image 109.png";

interface PaymentStepProps {
  onNext: () => void;
  onBack: () => void;
  onComplete: () => void;
  currentStep: number;
  totalSteps: number;
}

const PaymentStep: React.FC<PaymentStepProps> = ({
  onNext,
  onBack,
  onComplete,
  currentStep,
  totalSteps
}) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("card");
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handlePayment = () => {
    toast.success("Payment processed successfully!");
    onComplete();
  };

  const handlePaymentMethodSelect = (methodId: string) => {
    setSelectedPaymentMethod(methodId);
    if (methodId === "transfer") {
      setShowTransferModal(true);
    }
  };

  const copyAccountNumber = async () => {
    try {
      await navigator.clipboard.writeText("1234567890");
      toast.success("Account number copied to clipboard!");
    } catch {
      toast.error("Failed to copy account number");
    }
  };

  const handleTransferPayment = () => {
    setShowTransferModal(false);
    setShowSuccessModal(true);
  };

  const handleGoToDashboard = () => {
    setShowSuccessModal(false);
    onComplete();
  };

  const handleCheckApplicationStatus = () => {
    setShowSuccessModal(false);
    // Navigate to application status page or show status
    toast.success("Redirecting to application status...");
  };

  const paymentMethods = [
    {
      id: "paystack",
      name: "Pay With Paystack",
      icon: paystack,
      description: "Pay with your debit/credit card"
    },
    {
      id: "transfer",
      name: "Make Transfer",
      icon: bank,
      description: "Direct bank transfer"
    }
  ];

  return (
    <>
      <div className="flex-1">
        <div className="text-center mb-8">
          <div className="mb-4">
            <div className="mb-4">
              <Image
                src={businessInfo}
                alt="Farm illustration"
                width={120}
                height={80}
                className="mx-auto"
              />
            </div>
          </div>
          <h1 className="text-3xl font-aristoBold text-[#303030] mb-2">
            Payment
          </h1>
          <p className="text-sm text-[#7C7C7C] font-poppinsRegular mb-4">
            Make payment to complete registration
          </p>
          <StepProgressBar currentStep={currentStep} totalSteps={totalSteps} />
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          {/* Payment Illustration */}
          <div className="bg-[#EEFEF6] border border-[#F2F2F3] rounded-lg p-8 mb-6">
            <Image
              src={pay}
              alt="Farm illustration"
              width={120}
              height={80}
              className="mx-auto"
            />
          </div>

          {/* Payment Summary */}
          <div className="mb-8 border-t border-[#F2F2F3] pt-2">
            <h3 className="font-semibold text-[#121212] mb-4">
              Payment Summary
            </h3>
            <div className="space-y-3 border-t border-[#F2F2F3] pt-2">
              <div className="flex border-b border-[#F2F2F3] pb-2 justify-between items-center py-2">
                <p className="text-sm text-[#5F5F5F] font-poppinsRegular">
                  Application Type
                </p>
                <p className="text-sm text-[#5F5F5F] font-poppinsSemiBold">
                  Business Name Registration
                </p>
              </div>
              <div className="flex border-b border-[#F2F2F3] pb-2 justify-between items-center py-2">
                <p className="text-sm text-[#5F5F5F] font-poppinsRegular">
                  Total Amount
                </p>
                <p className="text-sm text-[#5F5F5F] font-poppinsSemiBold">
                  ₦15,000.00
                </p>
              </div>
              <div className="flex border-b border-[#F2F2F3] pb-2 justify-between items-center py-2">
                <p className="text-sm text-[#5F5F5F] font-poppinsRegular">
                  Date
                </p>
                <p className="text-sm text-[#5F5F5F] font-poppinsSemiBold">
                  {new Date().toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>
          <div className="mb-8 border-t border-[#F2F2F3] pt-2">
            <h3 className="font-semibold text-[#121212] mb-4">
              Choose a payment method
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  onClick={() => handlePaymentMethodSelect(method.id)}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedPaymentMethod === method.id
                      ? "border-[#51F4A6] bg-[#FFFFFF]"
                      : "border-[#E2E2E2] bg-white"
                  }`}
                >
                  <div className="flex flex-col  text-left">
                    <div className="mb-2">
                      <Image
                        src={method.icon}
                        alt={method.name}
                        width={32} 
                        height={32}  
                      />
                    </div>
                    <p className="text-xs text-[#5F5F5F] font-poppinsSemiBold">
                      {method.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <Button
            variant="secondary"
            size="medium"
            onClick={onBack}
            className="flex items-center gap-2"
          >
            <FaArrowLeftLong size={16} />
            Go Back To Previous
          </Button>
          <Button
            variant="primary"
            size="medium"
            onClick={handlePayment}
            className="flex items-center gap-2"
          >
            Complete Payment
            <FaArrowRightLong size={16} />
          </Button>
        </div>
      </div>

      {showTransferModal && (
        <ModalOverlay onClose={() => setShowTransferModal(false)}>
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 shadow-lg z-50">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-aristoBold text-[#303030]">
                Make Transfer
              </h2>
              <button
                onClick={() => setShowTransferModal(false)}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <FaTimes className="text-gray-600" size={14} />
              </button>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="mb-4">
                <Label className="text-[#5F5F5F] text-sm mb-2">
                  Account Number
                </Label>
                <div className="relative">
                  <Input
                    type="text"
                    name="accountNumber"
                    placeholder="Enter account number"
                    variant="tertiary"
                    className="bg-[#F0F0F0] rounded-lg p-3 text-[#5F5F5F] text-sm pr-20"
                  />
                  <Button
                    onClick={copyAccountNumber}
                    variant="primary"
                    size="small"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 px-2 py-1 flex items-center gap-1 bg-[#3C4000] hover:bg-[#2E3200] text-[#E0E0E0] rounded-md text-xs"
                  >
                    Copy
                    <FaCopy size={16} />
                  </Button>
                </div>
              </div>
              <div className="mb-4">
                <Label className="text-[#5F5F5F] text-sm mb-2">
                  Account Name
                </Label>
                <Input
                  type="text"
                  name="accountName"
                  placeholder="Enter account name"
                  variant="tertiary"
                  className="bg-[#F0F0F0] rounded-lg p-3 text-[#5F5F5F] text-sm"
                />
              </div>
              <div className="mb-6">
                <Label className="text-[#5F5F5F] text-sm mb-2">Bank Name</Label>
                <div className="relative">
                  <Input
                    type="text"
                    name="bankName"
                    placeholder="Enter bank name"
                    variant="tertiary"
                    className="bg-[#F0F0F0] rounded-lg p-3 text-[#5F5F5F] text-sm pr-10"
                  />
                  <RiBankFill
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#5F5F5F]"
                    size={16}
                  />
                </div>
              </div>
              <Button
                onClick={handleTransferPayment}
                variant="primary"
                size="medium"
                className="w-full bg-[#3C4000] hover:bg-[#2E3200] text-white rounded-full"
              >
                I Have Paid
              </Button>
            </div>
          </div>
        </ModalOverlay>
      )}

      {showSuccessModal && (
        <ModalOverlay onClose={() => setShowSuccessModal(false)}>
          <div className="bg-white rounded-lg p-8 w-full max-w-2xl mx-4 shadow-lg z-50">
            <div className="bg-[#EEFEF6] rounded-lg p-8 mb-6 text-center">
              <Image
                src={success}
                alt="Farm illustration"
                width={120}
                height={80}
                className="mx-auto"
              />
            </div>

            <div className="text-center mb-8">
              <h2 className="text-2xl font-aristoBold text-[#303030] mb-2">
                Application Submitted Successfully!
              </h2>
              <p className="text-sm text-[#7C7C7C] font-poppinsRegular">
                Your application has been submitted successfully.
              </p>
            </div>

            <div className="bg-white border border-[#C9FCE3] rounded-lg px-6 pt-2 pb-6 mb-8">
              <h3 className="font-aristoBold border-b border-[#C9FCE3] pb-2 text-[#5F5F5F] text-2xl mb-6 text-center">
                Application Summary
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#5F5F5F] font-poppinsRegular">
                    Application Type
                  </span>
                  <span className="text-sm text-[#303030] font-poppinsSemiBold">
                    Business Registration
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#5F5F5F] font-poppinsRegular">
                    Amount
                  </span>
                  <span className="text-sm text-[#303030] font-poppinsSemiBold">
                    ₦15,000.00
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#5F5F5F] font-poppinsRegular">
                    Application ID
                  </span>
                  <span className="text-sm text-[#303030] font-poppinsSemiBold">
                    #BN-003192
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                onClick={handleGoToDashboard}
                variant="subprimary"
                size="medium"
                className="flex-1"
              >
                Go To Dashboard
              </Button>
              <Button
                onClick={handleCheckApplicationStatus}
                variant="primary"
                size="medium"
                className="flex-1"
              >
                Check Application Status
              </Button>
            </div>
          </div>
        </ModalOverlay>
      )}
    </>
  );
};

export default PaymentStep;
