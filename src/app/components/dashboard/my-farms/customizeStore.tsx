"use client";
import { IoCheckmarkCircle } from "react-icons/io5";
import Input from "../../common/input";
import { RiPencilFill } from "react-icons/ri";
import StoreFrontHeading from "../common/storeFrontHeading";
import { color } from "@/app/components/data";
import { useTab } from "@/context/TabContext";
import { useState } from "react";
import Button from "../../common/Buttons";

const CustomizeStore = () => {
  const { activeTab, setActiveTab } = useTab();
  const [address, setAddress] = useState("");
  const [address1, setAddress1] = useState("");

  return (
    <div>
      <div className="flex justify-between border-b border-[#E4E7EC] pb-3 mb-8">
        <div className="flex flex-col">
          <h3 className="text-sm font-poppinsSemiBold text-[#5F5F5F] mb-3">
            StoreFront Settings
          </h3>
          <p className="text-sm text-[#7C7C7C] font-poppinsRegular">
            Customise your store front to fit your preference
          </p>
        </div>
        <Button type="button" variant="primary" className="w-[160px]">
          Save
        </Button>
      </div>

      <div className="flex gap-x-4">
        <StoreFrontHeading
          color={color[activeTab]?.color}
          textColor={color[activeTab]?.textColor}
          badgeColor={color[activeTab]?.badgeColor}
          iconColor={color[activeTab]?.iconColor}
        />

        <div className="flex flex-col items-center gap-y-[7px] justify-between">
          {color?.map((item, index) => (
            <div
              key={index}
              className={`w-14 h-[52px] ${item?.color} rounded-xl p-1 flex flex-col items-end justify-end cursor-pointer`}
              onClick={() => setActiveTab(index)}
            >
              {activeTab === index && (
                <IoCheckmarkCircle size={16} color="#E9EAE6" fill="#E9EAE6" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* input address */}
      <div className="mt-8 grid grid-cols-2 gap-x-8">
        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-poppinsSemiBold text-[#5F5F5F]">
              Address
            </p>
            <p className="text-sm font-poppinsSemiBold text-[#226646] flex items-center gap-x-1">
              Change{" "}
              <span>
                <RiPencilFill size={16} color="#226646" />
              </span>
            </p>
          </div>
          <Input
            placeholder="Enter your address"
            type="text"
            name="address"
            value="Lagos, Nigeria"
            variant="primary"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-poppinsSemiBold text-[#5F5F5F]">
              Address
            </p>
            <p className="text-sm font-poppinsSemiBold text-[#226646] flex items-center gap-x-1">
              Change{" "}
              <span>
                <RiPencilFill size={16} color="#226646" />
              </span>
            </p>
          </div>
          <Input
            placeholder="Enter your address"
            type="text"
            name="address"
            value="Lagos, Nigeria"
            variant="primary"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomizeStore;
