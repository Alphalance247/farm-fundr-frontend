import DashboardLayout from "../../components/common/dashboardLayout";
import { Topbar } from "../../components/common/dashboard/topBar";
import { MdOutlineFileCopy } from "react-icons/md";
import { MdAddAlarm } from "react-icons/md";
import Button from "@/app/components/common/Buttons";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";
import PendingPayment from "@/app/components/dashboard/overview/pendingPayment";
import TransactionSearchTable from "@/app/components/dashboard/wallet/allTransaction";
import Link from "next/link";

const Wallet = () => {
  return (
    <DashboardLayout>
      <Topbar overview="Wallet" />

      <main className="px-10 py-10  overflow-auto">
        <div className=" mb-8">
          <h2 className="text-xl font-poppinsSemiBold text-[#5F5F5F]">
            Wallet
          </h2>
          <p className="text-sm font-poppinsRegular text-[#7C7C7C] mt-3">
            Overview of your project payments and wallet activity
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-4 mb-8">
          <div className="bg-[url('/assets/DashBoard/wallet/bg-green.png')] bg-cover bg-center bg-no-repeat rounded-xl p-6">
            <div className="mb-24">
              <p className="text-sm font-poppinsSemiBold text-white mb-2">
                Wallet Balance
              </p>
              <div className="flex items-center gap-2 mb-4">
                <h4 className="text-white text-[2rem] leading-9 font-poppinsSemiBold">
                  N1,035,700.00
                </h4>
                <span className="text-white text-sm font-poppinsRegular">
                  <FaRegEyeSlash size={32} color="white" />
                </span>
              </div>
              <p className="text-[#E9EAE6] text-sm font-poppinsRegular mb-2">
                providus bank
              </p>

              <div className="flex items-center gap-x-3">
                <p className="text-[white] text-xs font-poppinsRegular flex items-center gap-x-2">
                  Account Number :{" "}
                  <span className="font-poppinsSemiBold text-sm text-[#E9EAE6]">
                    0123456789
                  </span>
                </p>

                <div
                  className="bg-[#E9EAE6] cursor-pointer rounded-[8px] px-2 py-1 flex items-center gap-x-2"
                  // onClick={() => handleCopy("1234567890")}
                >
                  <p className="text-[#282A03] font-poppinsRegular text-sm">
                    copy
                  </p>
                  <span>
                    {" "}
                    <MdOutlineFileCopy size={15} color="#282A03" />
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-x-4">
              <Link href="/farmer-dashboard/wallet/request-payout">
                <Button className="flex items-center justify-center gap-x-2 w-full">
                  <MdAddAlarm />
                  Request payout
                </Button>
              </Link>

              <Link href="/farmer-dashboard/wallet/withdrawfund">
                <Button
                  variant="subprimary"
                  className="flex items-center justify-center gap-x-2 w-full"
                >
                  <FaArrowDown size={18} color="#2D865B" />
                  Withdraw funds
                </Button>
              </Link>
            </div>
          </div>

          <PendingPayment isTotalAvailable={false} />
        </div>

        <TransactionSearchTable />
      </main>
    </DashboardLayout>
  );
};

export default Wallet;
