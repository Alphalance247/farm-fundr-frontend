import ModalOverlay from "./modalOverlay";
import { FaRegCopy } from "react-icons/fa";
import Image from "next/image";
import Button from "../Buttons";

interface BidConfirmModalProps {
  onClose: () => void;
  amount: number;
  status: string;
  accountName: string;
  accountNumber: string;
  bank: string;
  charges: string;
  transactionId: string;
  transactionDate: string;
  paymentMethod: string;
  img: string;
}

const BidConfirmModal = ({
  onClose,
  amount,
  status,
  accountName,
  accountNumber,
  bank,
  charges,
  transactionId,
  transactionDate,
  paymentMethod,
  img,
}: BidConfirmModalProps) => {
  return (
    <ModalOverlay onClose={onClose}>
      <div className="bg-white rounded-lg p-6 w-full max-w-[626px] h-[700px] overflow-y-scroll mx-auto shadow-lg z-50">
        <div className="flex flex-col items-center">
          <Image
            src="/assets/DashBoard/wallet/withdraw-success.svg"
            width={578}
            height={173}
            alt="withdrawfund"
          />
          <p className="text-sm text-[#5F5F5F] mt-4 font-poppinsSemiBold">
            Withdrawal Amount
          </p>
          <div className="text-4xl font-poppinsSemiBold text-[#E4BC01] mt-2 mb-2">
            ₦{amount.toLocaleString()}
          </div>
          <p
            className={`p-2 rounded text-xs mb-4 ${
              status === "Pending" ? "bg-[#FFFAE6] text-yellow-700" : ""
            }`}
          >
            Status: <span className="font-poppinsSemiBold"> {status}</span>
          </p>
        </div>
        <div className="bg-[#EEFEF6] rounded-xl border border-[#51F4A6] p-4 mt-2">
          <h4 className="text-center mb-2 font-aristoBold text-[#5F5F5F] border-b border-b-[#51F4A6] pb-1">
            Transaction Details
          </h4>

          <div className="flex flex-col gap-y-3">
            <div className="text-sm mb-1 flex justify-between border-b border-b-[#E2E2E2] pb-3">
              <p className="font-poppinsRegular text-[#7C7C7C] text-sm">
                Account Details
              </p>
              <div className="text-[#5F5F5F] text-sm text-right">
                <div className="flex items-center gap-x-2 justify-end">
                  <Image width={20} height={20} src={img || ""} alt="" />
                  <span className="font-poppinsSemiBold">{bank}</span>
                </div>
                {accountNumber} - {accountName}
              </div>
            </div>
            <div className="text-sm mb-1 flex justify-between border-b border-b-[#E2E2E2] pb-3">
              <p className="font-poppinsRegular text-[#7C7C7C] text-sm">
                Withdrawal Amount
              </p>
              <p className="text-[#5F5F5F] text-sm text-right">
                <span className="font-poppinsSemiBold">
                  ₦{amount.toLocaleString()}
                </span>
              </p>
            </div>
            <div className="text-sm mb-1 flex justify-between border-b border-b-[#E2E2E2] pb-3">
              <p className="font-poppinsRegular text-[#7C7C7C] text-sm">
                Withdrawal Amount
              </p>
              <p className="text-[#5F5F5F] text-sm text-right">
                <span className="font-poppinsSemiBold">
                  ₦{amount.toLocaleString()}
                </span>
              </p>
            </div>
            <div className="text-sm mb-1 flex justify-between border-b border-b-[#E2E2E2] pb-3">
              <p className="font-poppinsRegular text-[#7C7C7C] text-sm">
                Charges
              </p>
              <p className="text-[#5F5F5F] text-sm text-right">
                <span className="font-poppinsSemiBold">{charges}</span>
              </p>
            </div>
            <div className="text-sm mb-1 flex justify-between border-b border-b-[#E2E2E2] pb-3">
              <p className="font-poppinsRegular text-[#7C7C7C] text-sm">
                Transaction ID
              </p>
              <p className="flex items-center gap-1 text-[#5F5F5F] font-poppinsSemiBold text-sm text-right">
                {transactionId}
                <FaRegCopy className="cursor-pointer" title="Copy" />
              </p>
            </div>
            <div className="text-sm mb-1 flex justify-between border-b border-b-[#E2E2E2] pb-3">
              <p className="font-poppinsRegular text-[#7C7C7C] text-sm">
                Transaction date
              </p>
              <p className="text-[#5F5F5F] text-sm text-right">
                <span className="font-poppinsSemiBold">{transactionDate}</span>
              </p>
            </div>
            <div className="text-sm mb-1 flex justify-between border-b border-b-[#E2E2E2] pb-3">
              <p className="font-poppinsRegular text-[#7C7C7C] text-sm">
                Payment Method
              </p>
              <p className="text-[#5F5F5F] text-sm text-right">
                <span className="font-poppinsSemiBold">{paymentMethod}</span>
              </p>
            </div>
          </div>
        </div>
        {/* <Link href="/farmer-dashboard/wallet"> */}
        <Button className="w-full mt-8" onClick={onClose}>
          Okay, Thank You
        </Button>
        {/* </Link> */}
      </div>
    </ModalOverlay>
  );
};

export default BidConfirmModal;
