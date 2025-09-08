"use client";
import InvestorLayout from "@/app/components/common/investor/investorsLayout";
import TransactionSearchTable from "@/app/components/investor-wallet/investorTransactionTable";
import WalletCard from "../../components/dashboard/my-investments/investmentWallet";

const Wallet = () => {
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
        <div>
          <WalletCard/>
</div>
        <div>
          <TransactionSearchTable />
        </div>
      </main>
    </InvestorLayout>
  );
};

export default Wallet;
