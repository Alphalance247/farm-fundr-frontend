import HeroCommon from "../components/common/heroCommon";
import LayOuts from "../components/common/Layouts";
import ProjectListing from "../components/marketplace/ProjectListing";
import SearchFarm from "../components/marketplace/searchFarm";

const FarmMarketPlace = () => {
  return (
    <LayOuts>
      <HeroCommon
        text="Farm MarketPlace"
        img="bg-cover bg-[url('/assets/marketplace/marketplace.png')]"
      />
      <SearchFarm />
      <ProjectListing />
    </LayOuts>
  );
};

export default FarmMarketPlace;
