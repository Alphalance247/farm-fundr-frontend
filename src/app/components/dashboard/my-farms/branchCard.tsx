import React from "react";
import Image from "next/image";
import Button from "../../common/Buttons";
import Link from "next/link";

interface BranchFarmCardProps {
  branchName: string;
  farmName: string;
  address: string;
  projectsCount: string;
  openingHours: string;
  status: "Active" | "Inactive";
  imageUrl: string;
  onViewProjects?: () => void;
  href: string;
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
}) => {
  return (
    <div className="bg-white rounded-xl w-full shadow-lg">
      <div className="relative">
        <Image
          src={imageUrl}
          alt={branchName}
          className="w-full h-36 object-cover rounded-tr-lg rounded-tl-lg"
          width={335}
          height={142}
        />
        <div
          className={`absolute bottom-4 right-4 px-3 py-1 flex items-center gap-x-1 border border-[#B0EECA] rounded-[8px] text-xs font-semibold bg-white text-[#00C853]`}
        >
          <Image
            src="/assets/my-farms/7.svg"
            alt="status"
            width={16}
            height={16}
          />
          <span>{status || "Active"}</span>
        </div>
        <button className="absolute top-3 right-3 bg-[#F6F6F6] rounded-xl w-11 h-9 p-1 shadow">
          <span className="text-xl text-[#7C7C7C]">⋯</span>
        </button>
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
        <Link href={`/farmer-dashboard/my-farms/projects/${href}`}>
          <Button className="mt-6 w-full"> View All Projects</Button>
        </Link>
      </div>
    </div>
  );
};

export default BranchFarmCard;
