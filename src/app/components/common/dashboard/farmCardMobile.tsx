"use client";
import { useState } from "react";
import Link from "next/link";
import { PiDotsThreeVertical } from "react-icons/pi";
import { MdDelete, MdOutlineEdit, MdOutlineRemoveRedEye } from "react-icons/md";

const FarmCardMobile = ({
  viewDetailsLink,
  cac_no,
  status,
  farmName,
  farmerLogo,
  onClickDetails,
  onDelete,
  onEdit,
}: {
  viewDetailsLink: string;
  farmerLogo: string;
  cac_no: string;
  status: string;
  farmName: string;
  onClickDetails?: () => void;
  onDelete?: () => void;
  onEdit?: () => void;
}) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className="border rounded-2xl bg-white shadow-sm overflow-hidden relative">
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-2">
          <img
            src={farmerLogo}
            alt="farmlogo"
            width={40}
            height={40}
            className="h-[40px] w-[40px] rounded-full"
          />
          <h3 className="text-[#0B222A] font-medium text-sm">{farmName}</h3>
        </div>

        {/* Dots menu */}
        <div className="relative">
          <button
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#2D865B] bg-[#EEFEF6]"
            onClick={() => setOpenDropdown(!openDropdown)}
          >
            <PiDotsThreeVertical
              size={18}
              className="text-[#2D865B] bg-[#EEFEF6]"
            />
          </button>

          {openDropdown && (
            <>
              {/* Click outside to close */}
              <div
                className="fixed inset-0 z-10"
                onClick={() => setOpenDropdown(false)}
              />
              <div className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg border border-gray-200 z-20">
                <ul className="py-1 text-sm text-gray-700">
                  <li>
                    <Link
                      href={viewDetailsLink}
                      onClick={onClickDetails}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-[#EEFEF6]"
                    >
                      <MdOutlineRemoveRedEye className="text-gray-500" /> View
                      Farm Details
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={onEdit}
                      className="w-full flex items-center gap-2 px-4 py-2 hover:bg-[#EEFEF6] text-left"
                    >
                      <MdOutlineEdit className="text-gray-500" /> Update Farm
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={onDelete}
                      className="w-full flex items-center gap-2 px-4 py-2 hover:bg-[#EEFEF6] text-left text-[#5F5F5F]"
                    >
                      <MdDelete className="text-red-500" /> Delete Farm
                    </button>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>

      <hr className="border-gray-100" />
      <div className="p-4 bg-[#F6F6F6] m-2 space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-sm text-[#5F5F5F]">CAC Number</p>
          <p className="text-[#7C7C7C] text-xs">{cac_no || "N/A"}</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">Status</p>
          <span
            className={`inline-block mt-1 px-4 py-1.5 rounded-full text-xs text-white ${
              status !== "published" ? "bg-[#DEA304]" : "bg-[#00C853]"
            }`}
          >
            {status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FarmCardMobile;
