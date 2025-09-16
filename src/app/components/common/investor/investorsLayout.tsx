"use client";
import { useState } from "react";
import { Topbar } from "../dashboard/topBar";
import InvestorSidebar from "./investorSidebar";

const InvestorLayout = ({ children }: { children: React.ReactNode }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <div className="flex h-screen max-w-[1800px] mx-auto flex-col">
      <Topbar
        setShowMobile={setShowMobileMenu}
        showMobileMenu={showMobileMenu}
        overview=""
      />

      <div className="grid grid-cols-[20%auto] overflow-y-auto w-full xl:grid-cols-1">
        <InvestorSidebar
          showMobileMenu={showMobileMenu}
          setShowMobile={setShowMobileMenu}
        />
        <>{children}</>
      </div>
    </div>
  );
};

export default InvestorLayout;
