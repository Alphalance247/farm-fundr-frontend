"use client";
import { useState, useEffect } from "react";
import Sidebar from "./dashboard/sideBar";
import { Topbar } from "./dashboard/topBar";
import CreateFarmModal from "./createFarmModal";
import { getFarmListStore } from "@/stores/farms/getFarmList";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showCreateFarmModal, setShowCreateFarmModal] = useState(false);
  const { fetchFarmList, data: farmData } = getFarmListStore();

  useEffect(() => {
    fetchFarmList();
  }, []);

  useEffect(() => {
    // Check if user has no farms
    const totalFarms = farmData?.results?.extra_data?.total_farms || 0;
    if (totalFarms === 0) {
      setShowCreateFarmModal(true);
    } else {
      setShowCreateFarmModal(false);
    }
  }, [farmData]);

  return (
    <div className="flex h-screen max-w-[1800px] mx-auto flex-col">
      {showCreateFarmModal && (
        <CreateFarmModal
          onClose={() => {
            setShowCreateFarmModal(false);
          }}
        />
      )}
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
