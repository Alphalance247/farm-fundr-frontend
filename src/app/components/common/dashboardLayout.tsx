import Sidebar from "./dashboard/sideBar";
import { Topbar } from "./dashboard/topBar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen max-w-[1800px] mx-auto flex-col">
      <Topbar overview="" />

      <div className="grid grid-cols-[20%auto] overflow-y-auto w-full lg:grid-cols-1">
        <Sidebar />
        <>{children}</>
      </div>
    </div>
  );
};

export default DashboardLayout;
