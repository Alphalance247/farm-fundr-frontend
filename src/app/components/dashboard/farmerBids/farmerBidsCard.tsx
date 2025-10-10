import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import Button from "../../common/Buttons";

const FarmerBidsCard = () => {
  return (
    <div>
      <div className="bg-white md:hidden rounded-xl shadow-md p-4 flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <Image
              src={"/assets/DashBoard/bids/image.png"}
              alt={"name"}
              width={70}
              height={56}
              className="rounded-lg"
            />
            <div className="">
              <h3 className="text-base font-poppinsSemiBold mb-2">
                Green acres farm
              </h3>
              <div className="flex items-center gap-2">
                <Image
                  src={"/assets/DashBoard/bids/progile.svg"}
                  alt={"name"}
                  width={24}
                  height={24}
                  className="rounded-lg"
                />
                <p className="text-sm text-gray-500">Investor Michael</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mt-2 items-center">
          <p className="text-[#7C7C7C] lg:text-xs text-sm">
            Bid Amount:{" "}
            <span className="font-poppinsSemiBold text-[#5F5F5F] lg:text-xs text-sm">
              ₦1,000,000
            </span>
          </p>
          <GoDotFill className="text-[#5F5F5F]" />
          <p className="text-[#7C7C7C] text-sm">
            Date:{" "}
            <span className="font-poppinsSemiBold text-[#5F5F5F] text-sm">
              May 12 2025
            </span>
          </p>
        </div>

        <div className="flex xl:flex-col flex-row gap-3">
          <>
            <Button variant="primary" size="small" className="flex-1">
              Accept
            </Button>
            <Button variant="danger" size="small" className="flex-1">
              Declined
            </Button>
          </>
        </div>
      </div>
    </div>
  );
};

export default FarmerBidsCard;
