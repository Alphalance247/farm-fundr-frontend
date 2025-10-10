"use client";
import DashboardLayout from "../../components/common/dashboardLayout";
import { MdOutlineFileCopy } from "react-icons/md";
import Button from "@/app/components/common/Buttons";
import { FaPlus, FaRegEyeSlash } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";
import PendingPayment from "@/app/components/dashboard/overview/pendingPayment";
import TransactionSearchTable from "@/app/components/dashboard/wallet/allTransaction";
import Link from "next/link";
import { useEffect, useState } from "react";
import RequestPayoutUser from "@/app/components/dashboard/wallet/requestPayoutUser";
import { getFarmerBalanceStore } from "@/stores/wallet/getFarmerBalance";
import { getUserBankStore } from "@/stores/settings/getBankDetails";
import { getWalletTransactionStore } from "@/stores/wallet/getWalletTransactions";
import WithdrawFundModal from "@/app/components/common/modals/withdrawFundModal";
import ProtectedRoute from "@/app/components/common/ProtectedRoute/protectedRoute";

const Wallet = () => {
  const [showRequestPayoutModal, setShowRequestPayoutModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  // const handleRequestPayoutModal = () => {
  //   setShowRequestPayoutModal(true);
  // };
  const {
    data: farmerBalanceData,
    loading,
    fetchFarmerBalance,
  } = getFarmerBalanceStore();
  const { data, fetchUserBank, loading: loadingBank } = getUserBankStore();
  const { fetchWalletTransaction } = getWalletTransactionStore();

  useEffect(() => {
    fetchFarmerBalance();
    fetchUserBank();
    fetchWalletTransaction();
  }, [fetchFarmerBalance, fetchUserBank, fetchWalletTransaction]);

  const handleCloseRequestPayoutModal = () => {
    setShowRequestPayoutModal(false);
  };

  const handleCloseWithdrawModal = () => {
    setShowWithdrawModal(false);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  // Loading skeleton component
  const LoadingSkeleton = () => (
    <span className="flex items-center gap-x-3 xl:hidden">
      <span className="w-[180px] h-[40px] bg-gray-200 rounded-md animate-pulse"></span>
      {/* <div className="w-[180px] h-[40px] bg-gray-200 rounded-md animate-pulse"></div> */}
    </span>
  );

  return (
    <ProtectedRoute requiredUserType="farmer">
      <DashboardLayout>
        <main className="px-10 lg:px-4 py-10 overflow-auto h-full bg-gray-50">
          <div className=" mb-8">
            <h2 className="text-xl font-poppinsSemiBold text-[#5F5F5F]">
              Wallet
            </h2>
            <p className="text-sm font-poppinsRegular text-[#7C7C7C] mt-3">
              Overview of your project payments and wallet activity
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-1 md:gap-y-4 gap-x-4 mb-8">
            <div className="bg-[url('/assets/DashBoard/wallet/bg-green.png')] bg-cover bg-center bg-no-repeat rounded-xl p-6 h-fit">
              <div className="mb-24">
                <p className="text-sm font-poppinsSemiBold text-white mb-2">
                  Wallet Balance
                </p>
                <div className="flex justify-between items-center gap-2 mb-4">
                  <h4 className="text-white text-[2rem] lg:text-xl leading-9 font-poppinsSemiBold">
                    {loading ? (
                      <LoadingSkeleton />
                    ) : (
                      "N " +
                        farmerBalanceData?.wallet?.balance?.toLocaleString() ||
                      ""
                    )}{" "}
                  </h4>
                  <span className="text-white text-sm font-poppinsRegular">
                    <FaRegEyeSlash size={32} color="white" />
                  </span>
                </div>

                {data?.bank_details?.account_name ? (
                  <div>
                    <p className="text-[#E9EAE6] text-sm font-poppinsRegular mb-2">
                      Bank Name:{" "}
                      {loadingBank ? (
                        <LoadingSkeleton />
                      ) : (
                        data?.bank_details?.bank_name || "N/A"
                      )}{" "}
                    </p>

                    <div className="flex  items-center gap-x-3">
                      <p className="text-[white] text-xs font-poppinsRegular flex items-center gap-x-2">
                        Account Number :{" "}
                        {loadingBank ? (
                          <LoadingSkeleton />
                        ) : (
                          <span className="font-poppinsSemiBold text-sm text-[#E9EAE6]">
                            {data?.bank_details?.account_number || "N/A"}
                          </span>
                        )}{" "}
                      </p>

                      <div
                        className="bg-[#E9EAE6] cursor-pointer rounded-[8px] px-2 py-1 flex items-center gap-x-2"
                        onClick={() => handleCopy("1234567890")}
                      >
                        <p className="text-[#282A03] block md:hidden font-poppinsRegular text-sm">
                          copy
                        </p>
                        <span>
                          {" "}
                          <MdOutlineFileCopy size={15} color="#282A03" />
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="mt-3">
                    <p className="text-[#E9EAE6] text-sm font-poppinsRegular mb-3">
                      No bank details found
                    </p>
                  </div>
                )}
              </div>

              <div className="flex flex-row lg:flex-col lg:gap-y-4 items-center gap-x-4">
                {/* <div>
                <Button
                  className="flex items-center justify-center gap-x-2 w-full"
                  onClick={handleRequestPayoutModal}
                >
                  <MdAddAlarm />
                  Request payout
                </Button>
              </div> */}
                {!data?.bank_details?.account_name && (
                  <Link className="lg:w-full" href="/farmer-dashboard/settings">
                    <Button className="text-[#E9EAE6] text-sm lg:w-full  lg:justify-center  lg:!py-4 font-poppinsRegular flex items-center gap-x-2">
                      <FaPlus size={15} color="#E9EAE6" />
                      Add bank details
                    </Button>
                  </Link>
                )}
                <Button
                  variant="subprimary"
                  disabled={!data?.bank_details?.account_name}
                  className={`flex items-center lg:justify-center lg:w-full  lg:!py-3  gap-x-2  ${
                    !data?.bank_details?.account_name
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  onClick={() => setShowWithdrawModal(true)}
                >
                  <FaArrowDown size={18} color="#2D865B" />
                  Withdraw funds
                </Button>
              </div>
            </div>

            <PendingPayment isTotalAvailable={false} />
          </div>

          <div>
            <TransactionSearchTable />
          </div>
          {showRequestPayoutModal && (
            <RequestPayoutUser
              handleRequestPayoutModal={handleCloseRequestPayoutModal}
            />
          )}

          <WithdrawFundModal
            isOpen={showWithdrawModal}
            onClose={handleCloseWithdrawModal}
          />
        </main>
      </DashboardLayout>
    </ProtectedRoute>
  );
};

export default Wallet;
