"use client";
import { useState } from "react";
import Sidebar from "./dashboard/sideBar";
import { Topbar } from "./dashboard/topBar";
// import PhoeNumberModal from "../dashboard/overview/phoneNumberModal";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  // const [showMobileModal, setShowMobileMoal] = useState(true);

  return (
    <div className="flex h-screen max-w-[1800px] mx-auto flex-col">
      {/* {showMobileModal && (
        <PhoeNumberModal
          onClose={() => {
            setShowMobileMoal(false);
          }}
        />
      )} */}
      <Topbar
        overview=""
        showMobileMenu={showMobileMenu}
        setShowMobile={setShowMobileMenu}
      />

      <div className="grid grid-cols-[20%auto] relative overflow-y-auto w-full xl:grid-cols-1">
        <Sidebar
          showMobileMenu={showMobileMenu}
          setShowMobile={setShowMobileMenu}
        />
        <>{children}</>
      </div>
    </div>
  );
};

export default DashboardLayout;
