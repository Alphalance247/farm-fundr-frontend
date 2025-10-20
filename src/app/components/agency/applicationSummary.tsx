import Image from "next/image";
import SubHead from "../dashboard/common/sectionHeading";

const ApplicationSummary = () => {
  return (
    <div className="mt-6 px-[22px] w-full py-[22px] border border-[#E4E7EC] bg-[white] rounded-xl">
      <div className="flex justify-between  gap-x-14 items-center mb-4 pb-6 border-b border-[#E4E7EC]">
        <SubHead text="Applications Summary" />
      </div>

      <div className="pt-3">
        <p className="text-4xl text-[#5F5F5F] font-poppinsSemiBold">207</p>
        <p className=" font-poppinsRegular text-sm text-[#7C7C7C]">
          Applications
        </p>
      </div>

      <div className="grid grid-cols-4 gap-6 mt-6">
        <div className="flex flex-col gap-y-2 justify-end">
          <div className="h-[120px] max-h-[100%] bg-[#C9FCE3] w-full rounded-lg"></div>
          <p className="text-xs text-[#7C7C7C] text-center">Week 1</p>
        </div>
        <div className="flex flex-col gap-y-2 justify-end">
          <div className="h-[150px] max-h-[100%] bg-[#C9FCE3] w-full rounded-lg"></div>
          <p className="text-xs text-[#7C7C7C] text-center">Week 2</p>
        </div>
        <div className="flex flex-col gap-y-2 justify-end">
          <div className="h-[200px] max-h-[100%] bg-[#C9FCE3] w-full rounded-lg"></div>
          <p className="text-xs text-[#7C7C7C] text-center">Week 3</p>
        </div>
        <div className="flex flex-col gap-y-2 justify-end">
          <div className="h-[170px] max-h-[100%] bg-[#51F4A6] w-full rounded-lg"></div>
          <p className="text-xs text-[#7C7C7C] text-center">Week 2</p>
        </div>
      </div>

      <div className="flex items-center gap-x-2 mt-6">
        <Image
          src="/assets/Agency/landing/trend.svg"
          width={24}
          height={24}
          alt="trend"
        />

        <p className="text-sm font-poppinsRegular text-[#7C7C7C]">
          {" "}
          <span className="text-[#00C853]">18% increase</span> compared to
          previous month
        </p>
      </div>
    </div>
  );
};

export default ApplicationSummary;
