import { useState } from "react";
import Sidebar from "./dashboard/sideBar";
import { Topbar } from "./dashboard/topBar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="flex h-screen max-w-[1800px] mx-auto flex-col">
      <Topbar
        overview=""
        showMobileMenu={showMobileMenu}
        setShowMobile={setShowMobileMenu}
      />

      <div
        className={`grid grid-cols-[20%auto] relative overflow-y-auto w-full lg:grid-cols-1`}
      >
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
