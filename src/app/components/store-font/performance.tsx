import { getFarmPageProjectDetails } from "@/stores/farmpage/farmPageProjectDetails";
import Image from "next/image";

const FarmPerformance = () => {
  const { data: projectDetailsData } = getFarmPageProjectDetails();
  return (
    <div>
      <ul className="list-disc pb-4 border-b border-[#E2E2E2]">
        {/* <li className="text-sm text-[#7C7C7C] font-poppinsRegular mb-5 ml-6">
          Consistent Growth: Over the last three harvest seasons, the Organic
          Apple Harvest project has achieved steady growth in yield and
          profitability, averaging an annual increase of 8% in output due to
          improved farming techniques.
        </li>
        <li className="text-sm text-[#7C7C7C] font-poppinsRegular mb-5 list-item ml-6">
          Sustainability: The project`s organic certification has enhanced
          market demand, allowing for premium pricing and positioning in
          competitive markets.
        </li>
        <li className="text-sm text-[#7C7C7C] font-poppinsRegular mb-5 list-item ml-6">
          Return on Investment (ROI): Investors have experienced an average ROI
          of 12-15% per cycle, depending on market conditions and yield.
        </li>
        <li className="text-sm text-[#7C7C7C] font-poppinsRegular mb-6 list-item ml-6">
          Environmental Impact: The project emphasizes sustainability,
          significantly reducing its carbon footprint through water conservation
          techniques and natural pest control methods.
        </li>

        <p className="text-sm text-[#7C7C7C] font-poppinsRegular">
          By participating in this project, investors not only gain financial
          returns but also become part of a movement that champions healthier
          food production, environmental conservation, and rural community
          empowerment.
        </p> */}
        <li className="text-sm text-[#7C7C7C] font-poppinsRegular mb-5 ml-6">
          {projectDetailsData?.data?.project?.progress_over_time || "N/A"}
        </li>
      </ul>

      <div className="bg-white border border-[#F6F6F6] rounded-xl p-4 shadow-lg mt-10">
        <div className="grid grid-cols-1 gap-x-24 ">
          <div className="bg-[#EEFEF6] p-4 rounded-xl">
            <p className="text-[#5F5F5F] font-poppinsSemiBold text-3xl mb-16 pb-3 border-b border-[#E2E2E2]">
              Insights
            </p>

            <div className="flex flex-col gap-y-24">
              <div className="flex flex-col gap-y-8 items-center border-b border-[#E2E2E2] pb-10">
                <Image
                  src="/assets/store-front/1a.svg"
                  width={141}
                  height={125}
                  alt="settings"
                />
                <ul className="list-disc">
                  <li className="text-sm text-[#7C7C7C] font-poppinsRegular mb-8 ml-6">
                    The highest yields were observed in August, driven by
                    favorable climatic conditions.
                  </li>
                  <li className="text-sm text-[#7C7C7C] font-poppinsRegular ml-6">
                    Despite fluctuations in the agricultural market, organic
                    apples have maintained a competitive market price, ensuring
                    stable returns for investors.
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-y-8 items-center border-b border-[#E2E2E2] pb-10">
                <Image
                  src="/assets/store-front/1b.svg"
                  width={141}
                  height={125}
                  alt="insights"
                />

                <ul className="list-disc">
                  <li className="text-sm text-[#7C7C7C] font-poppinsRegular mb-8 ml-6">
                    Projected ROI for the next investment cycle is estimated to
                    be between [insert %], depending on market conditions.
                  </li>
                  <li className="text-sm text-[#7C7C7C] font-poppinsRegular ml-6">
                    Demand for organic produce is expected to rise by [insert %]
                    annually, further strengthening this investment
                    opportunity.”
                  </li>
                </ul>
              </div>
              <p className="text-[#CA3C04] font-poppinsRegular text-base ">
                While farming is inherently subject to weather and market
                fluctuations, this project mitigates risks by employing
                precision farming techniques and securing advance contracts with
                buyers. Backup Strategy; Insurance partnerships and diversified
                market access ensure investor protection against unexpected
                losses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmPerformance;
