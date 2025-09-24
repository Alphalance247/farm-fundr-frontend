"use client";
import InvestorLayout from "@/app/components/common/investor/investorsLayout";
import TransactionSearchTable from "@/app/components/investor-wallet/investorTransactionTable";
import WalletCard from "../../components/dashboard/my-investments/investmentWallet";
import { getInvestorTransaction } from "@/stores/investor-dashboard/overview/transaction";
import { useEffect } from "react";
import { getInvestorDashboardStore } from "@/stores/investor-dashboard/overview/dashboard";
import SkeletonLoader from "@/components/ui/skeleton-loader";
import ErrorFetch from "@/app/components/common/errorFetch";

const Wallet = () => {
  const { fetchInvestorsTransaction, loading, error } =
    getInvestorTransaction();
  const {
    fetchInvestorDashboardData,
    loading: loadingTransaction,
    error: errTransact,
  } = getInvestorDashboardStore();
  useEffect(() => {
    fetchInvestorsTransaction();
    fetchInvestorDashboardData();
  }, [fetchInvestorsTransaction, fetchInvestorDashboardData]);

  return (
    <InvestorLayout>
      <main className="px-10 lg:px-4 py-10 overflow-auto h-full bg-gray-50">
        <div className=" mb-8">
          <h2 className="text-xl font-poppinsSemiBold text-[#5F5F5F]">
            Wallet
          </h2>
          <p className="text-sm font-poppinsRegular text-[#7C7C7C] mt-3">
            Overview of your project payments and wallet activity
          </p>
        </div>
        {loading ? (
          <SkeletonLoader className="h-[100px] w-full my-6" />
        ) : error ? (
          <ErrorFetch
            message="Error Fetching wallet"
            onRefetch={fetchInvestorDashboardData}
          />
        ) : (
          <div>
            <WalletCard />
          </div>
        )}

        {loadingTransaction ? (
          <SkeletonLoader className="h-[300px] w-full my-6" />
        ) : errTransact ? (
          <ErrorFetch
            message="Error Fetching Transaction data"
            onRefetch={fetchInvestorsTransaction}
          />
        ) : (
          <div>
            <TransactionSearchTable />
          </div>
        )}
      </main>
    </InvestorLayout>
  );
};

export default Wallet;
