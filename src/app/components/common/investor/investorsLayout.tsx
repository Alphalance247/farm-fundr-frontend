"use client";
import { Topbar } from "../dashboard/topBar";
import InvestorSidebar from "./investorSidebar";

const InvestorLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen max-w-[1800px] mx-auto flex-col">
      <Topbar setShowMobile={() => {}} showMobileMenu={false} overview="" />

      <div className="grid grid-cols-[20%auto] overflow-y-auto w-full lg:grid-cols-1">
        <InvestorSidebar />
        <>{children}</>
      </div>
    </div>
  );
};

export default InvestorLayout;
