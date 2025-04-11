import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { PiDotsThree } from "react-icons/pi";
import SubHead from "../common/sectionHeading";
import Image from "next/image";

interface data {
  weatherType?: string;
  weatherValue?: string;
  weatherIcon?: string;
}

const WeatherReport: React.FC = ({}) => {
  const data: data[] = [
    {
      weatherType: "Wind",
      weatherValue: "12km/h",
      weatherIcon: "/assets/DashBoard/overview/wind.svg",
    },
    {
      weatherType: "Humidity",
      weatherValue: "65%",
      weatherIcon: "/assets/DashBoard/overview/humidity.svg",
    },
    {
      weatherType: "Rainfall",
      weatherValue: "30%",
      weatherIcon: "/assets/DashBoard/overview/rainfall.svg",
    },
    {
      weatherType: "Pressure",
      weatherValue: "1013 hPa",
      weatherIcon: "/assets/DashBoard/overview/pressure.svg",
    },
  ];
  return (
    <section className="mt-6 px-[22px] py-8 border border-[#E4E7EC] bg-[white] rounded-xl ">
      <div className="flex justify-between  items-center mb-5">
        <SubHead text="Weather Report" />
        <div className="relative flex items-center gap-x-4">
          <div
            className="flex items-center gap-x-2 p-2 bg-white border border-[#d9d9d9] rounded-xl cursor-pointer w-fit"
            // onClick={handleOpen}
          >
            <p className="">
              <span className="text-sm font-poppinsRegular text-[#7C7C7C]">
                Today
              </span>{" "}
              <span className="font-medium text-[15px] leading-5 text-[#262626] ">
                {""}
              </span>
            </p>
            <FaCaretDown size={20} color="#7C7C7C" />
          </div>

          <div
            className=" p-2 bg-white border border-[#d9d9d9]  rounded-xl cursor-pointer w-fit"
            // onClick={handleOpen}
          >
            <PiDotsThree size={20} color="#7C7C7C" />
          </div>
        </div>
      </div>

      <div className="flex gap-x-4 flex-wrap gap-y-4">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="px-3 py-4 border border-[#F6F6F6] bg-[#FCFCFC] rounded-md flex-1 w-fit"
            >
              <div className="flex items-center gap-x-2 mb-4">
                <Image
                  width={32}
                  height={32}
                  src={item.weatherIcon}
                  alt="weather icons"
                />
                <p className="text-xs font-poppinsRegular text-[#5F5F5F]">
                  {item.weatherType}
                </p>
              </div>
              <p className="text-xl text-[#5F5F5F] font-poppinsSemiBold">
                {item.weatherValue}
              </p>
            </div>
          );
        })}
        <div className="px-3 py-4 border border-[#F6F6F6] bg-[#FCFCFC] rounded-md flex-3">
          <div className="flex items-center gap-x-2 mb-4">
            <Image
              width={32}
              height={32}
              src="/assets/DashBoard/overview/sunset.svg"
              alt="weather icon"
            />
            <p className="text-xs font-poppinsRegular text-[#5F5F5F]">
              SunRise & SunSet
            </p>
          </div>

          <div className="flex items-center gap-x-3">
            <div className="flex items-center gap-x-1">
              <Image
                width={32}
                height={32}
                src="/assets/DashBoard/overview/ups.svg"
                alt="weather icon"
              />
              <p className="text-xs text-[#5F5F5F] font-poppinsSemiBold">
                6:25 AM{" "}
                <span className="text-xs font-poppinsRegular ">Sunrise</span>
              </p>
            </div>

            <div className="flex items-center gap-x-1">
              <Image
                width={32}
                height={32}
                src="/assets/DashBoard/overview/ups.svg"
                alt="weather icon"
              />
              <p className="text-xs text-[#5F5F5F] font-poppinsSemiBold">
                7:25 AM
                <span className="text-xs font-poppinsRegular ">Sunset</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherReport;
