import { LiaTimesSolid } from "react-icons/lia";
import { MdOutlineFileCopy } from "react-icons/md";
import { RiBankLine } from "react-icons/ri";
import Button from "../../common/Buttons";
import React from "react";

const TransferPopUP: React.FC<{
  onClick: () => void;
  handlePaidTansfer: React.MouseEventHandler<HTMLButtonElement>;
}> = ({ onClick, handlePaidTansfer }) => {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Account number copied to clipboard!"); // Optional: Show a confirmation message
    });
  };

  return (
    <div className="fixed top-0 left-0 w-[100vw] h-[100vh] flex items-center justify-center z-50 m-auto">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50 z-40"
        onClick={onClick} // Close modal when clicking on the overlay
      ></div>
      <div className="px-6 py-10 bg-white shadow-lg w-full max-w-[500px] rounded-xl relative z-50">
        <div className=" border-b border-b-[#E2E2E2] flex justify-between pb-3">
          <p className="text-2xl font-aristoBold text-[#5F5F5F]">
            Make Transfer
          </p>

          <span
            className="w-8 h-8 rounded-full bg-[#F0F2F5] flex flex-col justify-center items-center cursor-pointer"
            onClick={onClick}
          >
            <LiaTimesSolid size={15} color="#0F172A" />
          </span>
        </div>

        <div className="flex flex-col gap-y-6 mt-6">
          <div>
            <p className="text-sm font-poppinsRegular text-[#7C7C7C] mb-1">
              Account Number
            </p>

            <div className="border border-[#E2E2E2] rounded-[6px] bg-[#FCFCFC] p-4 flex justify-between items-center">
              <p className="text-sm font-poppinsSemiBold text-[#5F5F5F]">
                1234567890
              </p>

              <div
                className="bg-[#282A03] cursor-pointer rounded-[8px] px-2 py-1 flex items-center gap-x-2"
                onClick={() => handleCopy("1234567890")}
              >
                <p className="text-[#EEFEF6] font-poppinsRegular text-sm">
                  copy
                </p>
                <span>
                  {" "}
                  <MdOutlineFileCopy size={15} color="#EEFEF6" />
                </span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-poppinsRegular text-[#7C7C7C] mb-1">
              Account Name
            </p>

            <div className="border border-[#E2E2E2] rounded-[6px] bg-[#FCFCFC] p-4 ">
              <p className="text-sm font-poppinsSemiBold text-[#5F5F5F]">
                Farmpady Group
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-poppinsRegular text-[#7C7C7C] mb-1">
              Bank Name
            </p>

            <div className="border border-[#E2E2E2] rounded-[6px] bg-[#FCFCFC] p-4 flex justify-between">
              <p className="text-sm font-poppinsSemiBold text-[#5F5F5F]">
                Palmpay
              </p>

              <span>
                {" "}
                <RiBankLine size={15} color="#0000008A" />
              </span>
            </div>
          </div>

          <div className="border-t-[#E2E2E2] border-t pt-5">
            <Button
              size="medium"
              className="w-full flex items-center justify-center"
              onClick={handlePaidTansfer}
            >
              I have Paid
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferPopUP;
