"use client";
import StoreFrontHeading from "../common/storeFrontHeading";
import { color } from "@/app/components/data";
import { useTab } from "@/context/TabContext";
import Button from "../../common/Buttons";

const CustomizeStore = () => {
  const { activeTab, setActiveTab } = useTab();
  console.log(setActiveTab);

  return (
    <div>
      <div className="flex justify-between border-b border-[#E4E7EC] pb-3 mb-8 md:flex-col md:gap-y-6">
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

        {/* <div className="flex flex-col items-center gap-y-[7px] justify-between">
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
        </div> */}
      </div>
    </div>
  );
};

export default CustomizeStore;
