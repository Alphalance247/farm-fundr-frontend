import SubHead from "../dashboard/common/sectionHeading";

const DisbursementSummary = () => {
  return (
    <div className="mt-6 px-[22px] w-full py-[22px] border border-[#E4E7EC] bg-[white] rounded-xl h-fit">
      <div className="flex justify-between  gap-x-14 items-center mb-4 pb-6 border-b border-[#E4E7EC]">
        <SubHead text="Disbursement Summary" />
      </div>

      <div className="bg-[#F6F6F6] p-4 rounded-xl flex flex-col gap-y-4">
        <div className="flex justify-between items-center pb-2 border-b border-[#E4E7EC]">
          <div className="flex gap-x-2 items-center">
            <div className="bg-[#51F4A6] h-5 w-6 rounded-md"></div>
            <p className=" font-poppinsRegular text-[#484848] text-xs">
              Released
            </p>
          </div>

          <p className=" font-poppinsSemiBold text-[#484848] text-xs">₦400K</p>
        </div>

        <div className="flex justify-between items-center pb-2 border-b border-[#E4E7EC]">
          <div className="flex gap-x-2 items-center">
            <div className="bg-[#F5E2B1] h-5 w-6 rounded-md"></div>
            <p className=" font-poppinsRegular text-[#484848] text-xs">
              Pending
            </p>
          </div>

          <p className=" font-poppinsSemiBold text-[#484848] text-xs">₦400K</p>
        </div>

        <div className="flex justify-between items-center pb-2 border-b border-[#E4E7EC]">
          <div className="flex gap-x-2 items-center">
            <div className="bg-[#DE4204] h-5 w-6 rounded-md"></div>
            <p className=" font-poppinsRegular text-[#484848] text-xs">
              Failed
            </p>
          </div>

          <p className=" font-poppinsSemiBold text-[#484848] text-xs">₦400K</p>
        </div>
      </div>
    </div>
  );
};

export default DisbursementSummary;
