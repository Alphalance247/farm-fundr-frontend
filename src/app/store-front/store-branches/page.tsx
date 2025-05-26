"use client";
import StoreFrontHeading from "@/app/components/dashboard/common/storeFrontHeading";
import { useTab } from "@/context/TabContext";
import { color } from "@/app/components/data";
import StoreFontFooter from "@/app/components/store-font/storeFontFooter";
import GoBackBtn from "@/app/components/common/goBack";
import BranchFarmCard from "@/app/components/dashboard/my-farms/branchCard";

const Farms = () => {
  const { activeTab } = useTab();
  return (
    <div>
      <StoreFrontHeading
        color={color[activeTab]?.color}
        textColor={color[activeTab]?.textColor}
        badgeColor={color[activeTab]?.badgeColor}
        iconColor={color[activeTab]?.iconColor}
        withBorderRadius={false}
      />

      <section className="max-w-[1300px] mx-auto px-4 py-10 md:px-4 md:py-12 mt-8">
        <GoBackBtn href="/store-front" />

        <div className="grid grid-cols-3 gap-x-10 gap-y-10 mt-8">
          <BranchFarmCard
            branchName="Ibadan Branch"
            farmName="Farmfundr Farm"
            address="87, Ringroad, Ibadan, Nigeria."
            projectsCount={"Projects- 7"}
            openingHours="Open 9am- Close 6pm"
            status="Active"
            imageUrl="/assets/my-farms/2.png"
            onViewProjects={() => {
              /* handle click */
            }}
            href="/store-front/"
          />
          <BranchFarmCard
            branchName="Ibadan Branch"
            farmName="Farmfundr Farm"
            address="87, Ringroad, Ibadan, Nigeria."
            projectsCount={"Projects- 7"}
            openingHours="Open 9am- Close 6pm"
            status="Active"
            imageUrl="/assets/my-farms/2.png"
            onViewProjects={() => {
              /* handle click */
            }}
            href="/"
          />
          <BranchFarmCard
            href="/farmer-dashboard/my-farms/projects/Ibadan Branch"
            branchName="Ibadan Branch"
            farmName="Farmfundr Farm"
            address="87, Ringroad, Ibadan, Nigeria."
            projectsCount={"Projects- 7"}
            openingHours="Open 9am- Close 6pm"
            status="Active"
            imageUrl="/assets/my-farms/2.png"
            onViewProjects={() => {
              /* handle click */
            }}
          />
          <BranchFarmCard
            href="/farmer-dashboard/my-farms/projects/Ibadan Branch"
            branchName="Ibadan Branch"
            farmName="Farmfundr Farm"
            address="87, Ringroad, Ibadan, Nigeria."
            projectsCount={"Projects- 7"}
            openingHours="Open 9am- Close 6pm"
            status="Active"
            imageUrl="/assets/my-farms/2.png"
            onViewProjects={() => {
              /* handle click */
            }}
          />
          <BranchFarmCard
            href="/farmer-dashboard/my-farms/projects/Ibadan Branch"
            branchName="Ibadan Branch"
            farmName="Farmfundr Farm"
            address="87, Ringroad, Ibadan, Nigeria."
            projectsCount={"Projects- 7"}
            openingHours="Open 9am- Close 6pm"
            status="Active"
            imageUrl="/assets/my-farms/2.png"
            onViewProjects={() => {
              /* handle click */
            }}
          />
          <BranchFarmCard
            href="/farmer-dashboard/my-farms/projects/Ibadan Branch"
            branchName="Ibadan Branch"
            farmName="Farmfundr Farm"
            address="87, Ringroad, Ibadan, Nigeria."
            projectsCount={"Projects- 7"}
            openingHours="Open 9am- Close 6pm"
            status="Active"
            imageUrl="/assets/my-farms/2.png"
            onViewProjects={() => {
              /* handle click */
            }}
          />
        </div>
      </section>

      <StoreFontFooter />
    </div>
  );
};

export default Farms;
