import Image from "next/image";
import Button from "../../common/Buttons";
import { MdOutlineFileCopy } from "react-icons/md";

const SuccessfulSubscription: React.FC<{
  onClick: () => void;
}> = ({ onClick }) => {
  return (
    <div className="fixed top-0 left-0 w-[100vw] h-[100vh] flex items-center justify-center z-50 m-auto">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50 z-40"
        onClick={onClick}
      ></div>
      <div className="p-6  bg-white rounded-xl w-[500px] z-50">
        <Image
          src="/assets/DashBoard/subscription/subsuccess.png"
          width={457}
          height={173}
          alt="successful subscription"
        />

        <div className="mt-4 mb-6">
          <h3 className=" font-aristoBold text-3xl text-[#252B42] mb-2">
            Congratulations!
          </h3>
          <p className="text-sm font-poppinsRegular text-[#5C6C71]">
            You are now subscribed to the basic plan/quarterly
          </p>
        </div>

        <div className="p-4 bg-[#EEFEF6] border border-[#51F4A6] mb-8 rounded-xl">
          <h4 className="border-b border-b-[#51F4A6] pb-3 text-2xl font-aristoBold">
            Subscription Summary
          </h4>

          <div className="flex flex-col gap-5 pt-4">
            <div className="flex justify-between items-center">
              <p className=" text-sm font-poppinsRegular text-[#5F5F5F]">
                {" "}
                Subscription Type
              </p>
              <p className="text-sm font-poppinsSemiBold text-[#5F5F5F]">
                Basic plan-quarterly-Auto renewal
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className=" text-sm font-poppinsRegular text-[#5F5F5F]">
                {" "}
                Amount
              </p>
              <p className="text-sm font-poppinsSemiBold text-[#5F5F5F]">
                N10,530.00
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className=" text-sm font-poppinsRegular text-[#5F5F5F]">
                {" "}
                Next Billing date
              </p>
              <p className="text-sm font-poppinsSemiBold text-[#5F5F5F]">
                jul 10th, 2025
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className=" text-sm font-poppinsRegular text-[#5F5F5F]">
                {" "}
                Session ID
              </p>
              <div className="flex items-center gap-x-1">
                <p className="text-sm font-poppinsSemiBold text-[#5F5F5F]">
                  2749278469102
                </p>
                <span>
                  {" "}
                  <MdOutlineFileCopy size={15} color="#EEFEF6" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center mt-8  gap-x-3">
          <Button size="medium" className="w-full ">
            Go to Dashboard
          </Button>
          <Button variant="secondary" size="medium" className="w-full">
            Okay, Got it
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessfulSubscription;
