import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

export interface ProjectCardProps {
  projectName: string;
  investedAmount: string;
  status: string;
  image?: string;
  detailsLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectName,
  investedAmount,
  status,
  image = "/default-project.png",
  detailsLink = "#",
}) => {
  const getStatusBadge = () => {
    switch (status.toLowerCase()) {
      case "ongoing":
        return "bg-[#DEA304]";
      case "active":
        return "bg-[#00C853]";
      case "completed":
        return "bg-[#1E88E5]";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div className="border border-[#E4E7EC] rounded-xl bg-white p-2 shadow-sm">
      {/* Header */}
      <div className="flex justify-between border-b border-[#E4E7EC] pb-2 items-center mb-4">
        <div className="flex items-center gap-2">
          <Image
            src={image}
            alt={projectName}
            width={32}
            height={32}
            className="rounded-full"
          />
          <h3 className="text-[#5F5F5F] font-medium text-sm">{projectName}</h3>
        </div>
        <Link
          href={detailsLink}
          className="text-[#2D865B] text-xs font-medium gap-1 flex items-center"
        >
          View Details{" "}
          <span className="">
            <IoIosArrowForward />
          </span>
        </Link>
      </div>

      {/* Body */}
      <div className="space-y-3 bg-[#F6F6F6] p-2 text-sm">
        <div className="flex justify-between">
          <p className="text-[#5F5F5F]">Invested Amount</p>
          <p className="font-poppinsSemiBold  text-[#5F5F5F]">
            ₦{investedAmount.toLocaleString()}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[#5F5F5F]">Status</p>
          <span
            className={`px-4 py-1 rounded-full text-white text-xs ${getStatusBadge()}`}
          >
            {status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
