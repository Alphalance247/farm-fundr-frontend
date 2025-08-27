import React from "react";
import Link from "next/link";
import { IoArrowDown, IoArrowUp } from "react-icons/io5";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FiChevronRight } from "react-icons/fi";

interface TransactionCardProps {
  id: string;
  type: string;
  amount: number;
  status: string;
  viewDetailsLink?: string;
}

const TransactionCard: React.FC<TransactionCardProps> = ({
  id,
  type,
  amount,
  status,
  viewDetailsLink = "#",
}) => {
  // ✅ Determine icon based on transaction type
  const getIcon = () => {
    if (type.toLowerCase().includes("payout request")) {
      return <IoMdCheckmarkCircleOutline size={20} color="#DEA304" />;
    } else if (type.toLowerCase().includes("project funded")) {
      return <IoArrowDown size={20} color="#00C853" />;
    } else if (type.toLowerCase().includes("withdrawal")) {
      return <IoArrowUp size={20} color="#E74C3C" />;
    }
    return null;
  };

  // ✅ Status + Amount shared color styles
  const getSharedColor = () => {
    switch (status.toLowerCase()) {
      case "pending":
        return "text-[#DEA304]"; // Yellow
      case "completed":
        return "text-[#00C853]"; // Green
      case "failed":
        return "text-[#E74C3C]"; // Red
      default:
        return "text-gray-700";
    }
  };

  // ✅ Status badge styles
  const getStatusBadge = () => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-[#DEA304] text-white";
      case "completed":
        return "bg-[#00C853] text-white";
      case "failed":
        return "bg-[#E74C3C] text-white";
      default:
        return "bg-gray-200 text-gray-700";
    }
  };

  // ✅ Format amount
  const formattedAmount = () => {
    const prefix = amount > 0 ? "+ " : "";
    return `${prefix}₦${Math.abs(amount).toLocaleString()}`;
  };

  return (
    <div className="border rounded-2xl bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-2">
          {getIcon()}
          <h3 className="text-[#0B222A] font-medium text-sm">{type}</h3>
        </div>
        <Link
          href={viewDetailsLink}
          className="flex items-center gap-1 text-xs text-[#00C853]"
        >
          View Details <FiChevronRight  />
        </Link>
      </div>

      <hr className="border-gray-100" />

      {/* Body */}
      <div className="p-4 bg-[#F6F6F6] m-2 space-y-3">
        <div className="flex items-center  justify-between">
          <p className="text-sm text-[#5F5F5F]">Amount</p>
          <p className={`font-semibold text-xs ${getSharedColor()}`}>
            {formattedAmount()}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">Status</p>
          <span
            className={`inline-block mt-1 px-4 py-2 rounded-full text-sm  ${getStatusBadge()}`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
