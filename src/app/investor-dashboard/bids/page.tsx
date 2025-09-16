"use client";
import Image from "next/image";
import Button from "@/app/components/common/Buttons";
import InvestorLayout from "@/app/components/common/investor/investorsLayout";
import BidsTable from "@/app/components/dashboard/my-investments/bidsTable";
import { getInvestorBids } from "@/stores/investor-dashboard/overview/bids";

interface data {
  id: number;
  name: string;
  image: string;
  totalFarms: string | number;
}
const MyInvestments = () => {
  const { fetchInvestorBids, data: bidsData, loading } = getInvestorBids();
  const data: data[] = [
    {
      id: 1,
      name: "All Bids",
      image: "/assets/my-farms/1.svg",
      totalFarms: bidsData?.total_bids || 0,
    },
    {
      id: 2,
      name: "Accepted",
      image: "/assets/my-farms/2.svg",
      totalFarms: bidsData?.accepted_bids_count || 0,
    },
    {
      id: 3,
      name: "Pending",
      image: "/assets/my-farms/3.svg",
      totalFarms: bidsData?.pending_bids_count || 0,
    },
    {
      id: 4,
      name: "Declined",
      image: "/assets/my-farms/4.svg",
      totalFarms: bidsData?.rejected_bids_count || 0,
    },
  ];

  return (
    <InvestorLayout>
      <main className="px-10 py-10 bg-gray-50 overflow-y-scroll h-full xl:px-4 xl:py-6">
        <div className="flex flex-row  md:flex-col gap-3 justify-between md:items-start items-center">
          <div className="">
            <h2 className="text-xl font-poppinsSemiBold text-[#5F5F5F]">
              My Bids
            </h2>
            <p className="text-sm font-poppinsRegular text-[#7C7C7C] mt-3">
              Monitor the status and history of all your investment bids.
            </p>
          </div>

          <div>
            <Button variant="primary" className="flex items-center gap-x-2">
              <Image
                src={"/assets/Dashboard/overview/add-box.svg"}
                alt="add-box"
                width={20}
                height={20}
              />
              Explore new Investment
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-x-4 mt-10 mb-4  xl:grid-cols-3 xl:gap-4 lg:grid-cols-2 md:grid-cols-2 md:gap-2">
          {data.map((item) => (
            <div key={item.id} className="bg-white rounded-lg px-6 py-4">
              <Image src={item.image} width={50} height={50} alt="farm" />

              <div className="flex items-center justify-between gap-y-2 pb-3 border-b border-[#F2F2F3] mt-2 md:flex-col md:items-start">
                <h3 className="text-sm font-poppinsRegular text-[#34474E]">
                  {item.name}
                </h3>
                <p className="text-2xl font-poppinsSemiBold text-[#0B222A]">
                  {item.totalFarms}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <BidsTable />
        </div>
      </main>
    </InvestorLayout>
  );
};

export default MyInvestments;
