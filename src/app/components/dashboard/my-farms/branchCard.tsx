"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "../../common/Buttons";
import Link from "next/link";
import { FiEdit } from "react-icons/fi";
import { useRouter } from "next/navigation";

interface BranchFarmCardProps {
  branchName: string;
  farmName: string;
  address: string;
  projectsCount: string;
  openingHours: string;
  status: boolean;
  imageUrl: string;
  onViewProjects?: () => void;
  href: string;
  id: string;
}

const BranchFarmCard: React.FC<BranchFarmCardProps> = ({
  branchName,
  farmName,
  address,
  projectsCount,
  openingHours,
  status,
  imageUrl,
  href,
  id,
}) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const router = useRouter();
  const handleDropdownToggle = (farmId: string) => {
    setOpenDropdown(openDropdown === farmId ? null : farmId);
  };
  const handleEditBranch = (branchId: string) => {
    localStorage.setItem("slectedEditBranchId", branchId);
    router?.push("/farmer-dashboard/my-farms/update-branch");
  };

  return (
    <div className="bg-white rounded-xl w-full shadow-lg">
      <div className="relative">
        <img
          src={imageUrl}
          alt={branchName}
          className="w-full h-36 object-cover rounded-tr-lg rounded-tl-lg"
          width={335}
          height={142}
        />
        <div
          className={`absolute bottom-4 right-4 px-3 py-1 flex items-center gap-x-1 border  rounded-[8px] text-xs font-semibold bg-white  ${
            status
              ? "text-[#00C853] border-[#B0EECA]"
              : " border-red-600 text-red-700"
          }`}
        >
          {status && (
            <Image
              src="/assets/my-farms/7.svg"
              alt="status"
              width={16}
              height={16}
            />
          )}
          <span>{status ? "Active" : "Inactive"}</span>
        </div>

        <div>
          <button
            className="absolute top-3 right-3 bg-[#F6F6F6] rounded-xl w-11 h-9 p-1 shadow"
            onClick={() => handleDropdownToggle(id)}
          >
            <span className="text-xl text-[#7C7C7C]">⋯</span>
          </button>

          {openDropdown === id && (
            <div className="absolute right-0 bottom-0 mt-2 w-28 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
              <div className="py-1">
                <button
                  onClick={() => handleEditBranch(id)}
                  className="w-full px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                >
                  <FiEdit size={14} />
                  Edit
                </button>
                {/* <button
                  // onClick={() => handleDeleteFarm(emp?.id, emp?.name)}
                  className="w-full px-2 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center gap-2"
                >
                  <FiTrash2 size={14} />
                  Delete
                </button> */}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className=" px-3 py-4 border border-[#F6F6F6]">
        <h3 className="text-xl font-aristoBold text-[#5F5F5F] mb-2">
          {branchName}
        </h3>
        <p className="text-sm text-[#7C7C7C] font-poppinsRegular">
          Farm name: <span className=" font-poppinsSemiBold">{farmName}</span>
        </p>
        <div className="flex items-center text-sm text-[#7C7C7C] mt-3 font-poppinsRegular mb-3">
          <span className="mr-1">
            <Image
              src="/assets/my-farms/5.svg"
              alt="location"
              width={24}
              height={24}
            />
          </span>
          {address}
        </div>
        <div className="flex items-center text-sm font-poppinsRegular text-[#7C7C7C] mt-1">
          <span className="mr-1">
            {" "}
            <Image
              src="/assets/my-farms/3.svg"
              alt="location"
              width={24}
              height={24}
            />
          </span>
          {projectsCount}
        </div>
        <div className="flex items-center text-sm font-poppinsRegular text-[#7C7C7C] mt-3">
          <span className="mr-1">
            <Image
              src="/assets/my-farms/6.svg"
              alt="time"
              width={24}
              height={24}
            />
          </span>
          {openingHours}
        </div>
        <Link
          href={`${href}`}
          onClick={() => localStorage.setItem("slectedEditBranchId", id)}
        >
          <Button className="mt-6 w-full"> View All Projects</Button>
        </Link>
      </div>
    </div>
  );
};

export default BranchFarmCard;
