"use client";
import Button from "./Buttons";

const TabSwitch = ({
  activeTab,
  setActiveTab,
  tab1,
  tab2,
}: {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  tab1?: string;
  tab2?: string;
}) => {
  return (
    <div className="flex bg-[#C9FCE3] rounded-[50px] justify-center gap-x-2 items-center w-fit mx-auto p-2 mt-10 mb-16 md:px-2 md:py-1">
      <Button
        size="medium"
        variant={activeTab === "investors" ? "primary" : "switch"}
        className=""
        onClick={() => setActiveTab("investors")}
      >
        {tab1 || " Benefits for investors"}
      </Button>

      <Button
        size="medium"
        variant={activeTab === "farmers" ? "primary" : "switch"}
        onClick={() => setActiveTab("farmers")}
        className="border-none text-[#2D865B] "
      >
        {tab2 || "Benefits for Farmers"}
      </Button>
    </div>
  );
};

export default TabSwitch;
