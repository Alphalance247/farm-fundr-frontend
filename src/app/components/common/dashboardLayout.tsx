import SideBar from "./dashboard/sideBar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen max-w-[1800px] mx-auto">
      <SideBar />

      <div className="flex flex-col w-full">{children}</div>
    </div>
  );
};

export default DashboardLayout;
