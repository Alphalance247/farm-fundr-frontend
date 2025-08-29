import SubHead from "../common/sectionHeading";
import { PiDotsThree } from "react-icons/pi";
import { FaCaretDown } from "react-icons/fa";
import Image from "next/image";
import Button from "../../common/Buttons";
import { getWalletTransactionStore } from "@/stores/wallet/getWalletTransactions";
import { getFarmersEarnings } from "@/stores/farmer-dashboard/earnings";
import Link from "next/link";

const PendingPayment = ({
  isTotalAvailable = true,
}: {
  isTotalAvailable?: boolean;
}) => {
  const { data: transactionData } = getWalletTransactionStore();
  const { data: farmerEarningData } = getFarmersEarnings();

  return (
    <div
      className={`px-[22px] py-8 border border-[#E4E7EC] bg-[white] rounded-xl h-fit ${
        isTotalAvailable && "mt-6"
      }`}
    >
      <div className="flex flex-row md:flex-col justify-between md:items-start md:gap-2 items-center mb-4">
        <SubHead text="Pending Payment" />
        <div className="relative flex items-center gap-x-4">
          <div
            className="flex items-center  gap-x-2 p-2 bg-white border border-[#d9d9d9] rounded-xl cursor-pointer w-fit"
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

      {isTotalAvailable && (
        <div className="mb-2">
          <p className="mb-1 text-sm font-poppinsRegular text-[#5F5F5F]">
            Total
          </p>
          <h4 className=" font-poppinsSemiBold text-[#5F5F5F]">
            N {farmerEarningData?.earnings?.pending_withdrawals}
          </h4>
        </div>
      )}

      <div className="flex flex-col gap-y-4 border-t border-t-[#E2E2E2] pt-2">
        {transactionData?.transactions?.length === 0 ? (
          <div className="flex pt-20 items-center justify-center h-fit">
            <p className="text-center pb-8 text-gray-500">
              No Transactions found yet
            </p>
          </div>
        ) : (
          transactionData?.transactions
            ?.filter((el) => el?.status === "pending")
            ?.slice(0, 2)
            ?.map((el, i) => (
              <div
                className="bg-[#FCFCFC] p-4 rounded-xl flex justify-between "
                key={i}
              >
                <div className="flex items-center gap-x-2">
                  <Image
                    src="/assets/DashBoard/overview/arrdown.svg"
                    width={44}
                    height={50}
                    alt="arrow down"
                  />

                  <div className="text-[#5F5F5F] text-sm flex flex-col gap-y-1">
                    <p className="font-poppinsSemiBold">Organic Apple Farm</p>
                    <p className="font-poppinsRegular">Phase 4 Payment</p>
                    <p className="text-[#7C7C7C] text-xs font-poppinsRegular">
                      To be paid- Feb 25, 2025
                    </p>
                  </div>
                </div>

                <p className="text-[#5F5F5F] text-sm font-poppinsSemiBold">
                  {el?.amount}
                </p>
              </div>
            ))
        )}

        {isTotalAvailable && (
          <Link href={"/farmer-dashboard/wallet"} className="mx-auto">
            <Button
              variant="secondary"
              size="small"
              className="w-[180px] mt-6 mx-auto text-center"
            >
              View All
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default PendingPayment;
