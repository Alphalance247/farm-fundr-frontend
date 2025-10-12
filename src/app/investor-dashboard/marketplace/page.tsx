import InvestorLayout from "@/app/components/common/investor/investorsLayout";
import ProtectedRoute from "@/app/components/common/ProtectedRoute/protectedRoute";
import ProjectListing from "@/app/components/marketplace/ProjectListing";

const MarketPlace = () => {
  return (
    <ProtectedRoute requiredUserType="investor">
      <InvestorLayout>
        <main className="px-10 lg:px-4 py-10 overflow-auto h-full bg-gray-50">
          <div className="mb-8">
            <h2 className="text-xl font-poppinsSemiBold text-[#5F5F5F]">
              Marketplace
            </h2>
            <p className="text-sm font-poppinsRegular text-[#7C7C7C] mt-3">
              Discover farms and projects seeking investors
            </p>
          </div>

          <ProjectListing />
        </main>
      </InvestorLayout>
    </ProtectedRoute>
  );
};

export default MarketPlace;
