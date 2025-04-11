"use client";
import { BiSearch } from "react-icons/bi";
import { FaTimesCircle } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { useState } from "react";
import Input from "../input";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

export function Topbar() {
  const [search, setSearch] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <header className="flex items-center justify-between gap-x-6 h-[93px] px-10 py-5 bg-white shadow-sm sticky top-0 z-10">
      <h1 className="text-2xl font-aristoBold text-[#5F5F5F]">Overview</h1>

      <div className="relative">
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
          className="pl-8 w-[329px]"
          variant="primary"
        />
      </div>

      <div className="rounded-full bg-[#F6F6F6] w-16 h-16 flex items-center justify-center relative cursor-pointer ">
        <IoNotificationsOutline size={38} color="#4E4E4E" />
        <p className="w-4 h-4 text-[10px] flex flex-col items-center justify-center rounded-full absolute bg-[#EA5455] text-white top-3 right-4">
          4
        </p>
      </div>

      <div>
        <Input
          type="date"
          name="search"
          placeholder="Search"
          onChange={handleDateChange}
          value={date}
          className="w-[246px]"
          variant="primary"
        />
      </div>

      <div className="flex justify-between gap-x-4 items-center py-[5px] px-6 bg-[#F6F6F6] rounded-2xl cursor-pointer">
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
