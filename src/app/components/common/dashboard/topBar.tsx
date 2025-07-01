"use client";
import { BiSearch } from "react-icons/bi";
import { FaTimesCircle } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { useState } from "react";
import Input from "../input";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { useEffect } from "react";
import Heading from "./heading";
import { IoIosMenu } from "react-icons/io";

export function Topbar({ overview }: { overview: string }) {
  // const [search, setSearch] = useState<string>("");
  const [dateTime, setDateTime] = useState<string>("21-02-2025. 12:02:00 PM");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
      const formattedTime = now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setDateTime(`${formattedDate} ${formattedTime}`);
    };

    updateDateTime(); // Set initial date and time
    const interval = setInterval(updateDateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <header className="flex items-center justify-between gap-x-6 h-[93px] px-10 py-5 bg-white shadow-sm sticky top-0 z-10 md:p-4">
      <div className="hidden xl:block">
        <Image
          src="/assets/DashBoard/overview/mobile-logo.svg"
          width={32}
          height={35}
          alt="alluviumlogo"
        />
      </div>

      <div className="hidden items-center gap-x-3 xl:flex">
        <Image
          src="/assets/DashBoard/overview/profile.svg"
          width={32}
          height={32}
          alt="profile"
        />

        <div className="rounded-full bg-[#F6F6F6] w-10 h-10 flex items-center justify-center relative cursor-pointer hover:bg-[#cac6c6]">
          <IoNotificationsOutline size={24} color="#4E4E4E" />
          <p className="w-3 h-3 text-[10px] flex flex-col items-center justify-center rounded-full absolute bg-[#EA5455] text-white top-3 right-2">
            4
          </p>
        </div>

        <div className="w-10 h-10 rounded-full bg-[#F6F6F6] flex items-center justify-center cursor-pointer">
          <IoIosMenu color="#0000008A" fill="#0000008A" />
        </div>
      </div>

      <Heading overview={overview} className="lg:hidden" />

      <div className="relative lg:hidden">
        <BiSearch
          className="absolute top-4 left-2"
          size={20.28}
          color="#226646"
        />
        <FaTimesCircle
          className="absolute top-5 right-2"
          size={14}
          color="white"
          fill="#F63232"
        />
        <Input
          type="text"
          name="search"
          placeholder="Search"
          onChange={handleChange}
          value=""
          className="pl-8 w-[329px] bg-[#F6F6F6] lg:w-full"
          variant="primary"
          withWidth={false}
        />
      </div>

      <div className="rounded-full bg-[#F6F6F6] w-16 h-16 flex items-center justify-center relative cursor-pointer hover:bg-[#cac6c6] md:lg:hidden">
        <IoNotificationsOutline size={38} color="#4E4E4E" />
        <p className="w-4 h-4 text-[10px] flex flex-col items-center justify-center rounded-full absolute bg-[#EA5455] text-white top-3 right-4">
          4
        </p>
      </div>

      <div className="px-6 py-4 rounded-xl bg-[#F6F6F6] w-[full] xl:hidden">
        <p className="text-sm font-poppinsRegular text-[#5F5F5F]">{dateTime}</p>
      </div>

      <div className="flex justify-between gap-x-4 items-center py-[5px] px-6 bg-[#F6F6F6] rounded-2xl cursor-pointer hover:bg-[#cac6c6] xl:hidden">
        <div className="flex items-center gap-x-3">
          <Image
            src="/assets/DashBoard/overview/avatar.svg"
            width={40}
            height={40}
            alt="avatar"
          />
          <div>
            <p className="text-[#282A03] text-sm font-poppinsSemiBold mb-1">
              Nelson Ade
            </p>
            <p className="text-[#7C7C7C] text-xs font-poppinsRegular">
              Nelson@gmail.com
            </p>
          </div>
        </div>
        <span>
          <FaChevronDown color="#7C7C7C" size={20} />
        </span>
      </div>
    </header>
  );
}
