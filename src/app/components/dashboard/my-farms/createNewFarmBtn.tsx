"use client";
import { FaAngleDown } from "react-icons/fa6";
import Image from "next/image";
import { useState } from "react";
import { HiChevronRight } from "react-icons/hi2";
import Link from "next/link";

const CreateNewFarmBtn = ({
  isBranch,
  isProject,
}: {
  isBranch: boolean;
  isProject: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const defaultOptions = [
    {
      name: "Create New Farm",
      link: "/farmer-dashboard/my-farms/add-farm",
    },
    {
      name: "Create New Branch",
      link: "/farmer-dashboard/my-farms/add-farm-branch",
    },
    {
      name: "Create New Project",
      link: "/farmer-dashboard/my-farms/add-project",
    },
  ];

  const menuOptions = isBranch
    ? defaultOptions?.slice(1, 3)
    : isProject
    ? defaultOptions?.slice(2, 3)
    : defaultOptions;

  return (
    <div
      onClick={() => {
        setIsOpen((prev) => !prev);
      }}
      className="relative"
    >
      <button className="bg-[#282A03] rounded-[40px] text-[#FCFCFC] p-4 flex items-center gap-x-2 font-poppinsSemiBold xl:text-sm xl:py-3 md:text-xs md:px-2 md:py-2">
        <span>
          <Image
            src="/assets/my-farms/plus.svg"
            width={18}
            height={18}
            alt="plus"
            className="xl:w-[14px] xl:h-[14px]"
          />
        </span>
        Create New
        <span>
          <FaAngleDown size={24} color="white" className="xl:text-[10px]" />
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 bg-[white] rounded-lg shadow-md z-10 mt-2">
          {menuOptions.map((el, i) => (
            <Link href={el?.link || "/"} key={i}>
              <div className="px-4 py-3 text-[#7C7C7C] cursor-pointer w-full text-xs justify-between font-poppinsRegular flex gap-x-[10px] items-center hover:bg-[#EEFEF6] lg:px-2 md:px-1 md:text-[10px] md:gap-x-1 md:py-2">
                {/* <span>
                  <FiPlus size={20} color="#0000008A" />
                </span> */}
                <button className="" key={i}>
                  {el?.name}
                </button>
                <HiChevronRight size={20} color="#0000008A" />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CreateNewFarmBtn;
