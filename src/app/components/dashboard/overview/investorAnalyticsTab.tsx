import React from "react";
import Image from "next/image";

interface data {
  totalInvestmentType?: string;
  totalInvestmentAmount?: string;
  totalInvestmentIcon?: string;
}

const InvestorAnalyticsTab: React.FC = ({}) => {
  const data: data[] = [
    {
      totalInvestmentType: "Total Funds Invested",
      totalInvestmentAmount: "N7,000,000",
      totalInvestmentIcon: "/assets/DashBoard/overview/funds.svg",
    },
    {
      totalInvestmentType: "Total Earning",
      totalInvestmentAmount: "N1,000,000",
      totalInvestmentIcon: "/assets/DashBoard/overview/earning.svg",
    },
    {
      totalInvestmentType: "Ongoing Investments",
      totalInvestmentAmount: "2",
      totalInvestmentIcon: "/assets/DashBoard/overview/bid.svg",
    },
    {
      totalInvestmentType: "Total Bid Sent",
      totalInvestmentAmount: "4",
      totalInvestmentIcon: "/assets/DashBoard/overview/ongoing.svg",
    },
  ];
  return (
    <section className="mt-6 py-8 ">
      
      <div className="flex gap-x-4 flex-wrap gap-y-4 xl:grid xl:grid-cols-3 md:grid-cols-2">
              {data.map((item, index) => {
                  return (
                      <div
                          key={index}
                          className="px-3 space-y-3 py-4 border border-[#F2F2F3] bg-[#FFFFFF] rounded-md flex-1 w-fit xl:w-full"
                      >
                    
                              <Image
                                  width={38}
                                  height={38}
                                  src={item.totalInvestmentIcon || ""}
                                  alt="weather icons"
                              />
                              <p className="text-sm font-poppinsRegular text-[#34474E]">
                                  {item.totalInvestmentType}
                              </p>
                       
                          <p className="text-2xl border-b pb-3 border-[#F2F2F3] text-[#5F5F5F] font-poppinsSemiBold">
                              {item.totalInvestmentAmount}
                          </p>
                      </div>
                  );
              })}
      </div>
    </section>
  );
};

export default InvestorAnalyticsTab;
