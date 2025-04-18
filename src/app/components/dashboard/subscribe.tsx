import Image from "next/image";
import Button from "../common/Buttons";

const Subsribe = () => {
  return (
    <div className="px-2">
      <div className="bg-[#EAFBFF] border border-[#E4E7EC] rounded-xl px-3 py-6">
        <p className="text-xl font-aristoBold text-[#5F5F5F] capitalize mb-3">
          Subscription status
        </p>

        <div className="bg-[#FCFCFC] border border-[#E4E7EC] rounded-xl p-4 flex flex-col gap-y-4 mb-6">
          <div className="bg-[#BFF4FF] rounded-lg py-[5px] px-[10px] flex justify-between items-center mb-3">
            <p className="text-[#239BB5] font-poppinsSemiBold text-xs">
              FREE PLAN
            </p>
            <Image
              src="/assets/DashBoard/overview/plan.svg"
              width={43}
              height={35}
              alt="note plan"
            />
          </div>
          <p className="text-xs text-[#7C7C7C] font-poppinsRegular">
            Expires on march 21, 2026
          </p>
        </div>

        <Button size="medium" className="w-full">
          Upgrade plan
        </Button>
      </div>
    </div>
  );
};

export default Subsribe;
