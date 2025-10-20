import SubHead from "../dashboard/common/sectionHeading";

const PerformingGrants = () => {
  return (
    <div className="mt-6 px-[22px] w-full py-[22px] border border-[#E4E7EC] bg-[white] rounded-xl h-fit">
      <div className="flex justify-between  gap-x-14 items-center mb-4 pb-6 border-b border-[#E4E7EC]">
        <SubHead text="🏆 Top Performing Grants" />
      </div>

      <p className=" font-poppinsRegular py-6 text-[#7C7C7C] text-sm">
        Based on application count
      </p>

      <div>
        <div className="bg-[#F6F6F6] p-4 rounded-lg flex justify-between items-center">
          <div className="flex items-center gap-x-2">
            <p className="w-[42px] h-[42px] flex flex-col items-center justify-center bg-[#51F4A6] rounded-full text-[#EEFEF6] font-poppinsSemiBold text-lg">
              1
            </p>
            <p className="font-poppinsRegular text-sm text-[#5F5F5F]">
              Youth in Agric
            </p>
          </div>
          <p className="text-sm font-poppinsSemiBold text-[#5F5F5F]">45 apps</p>
        </div>
      </div>
    </div>
  );
};

export default PerformingGrants;
