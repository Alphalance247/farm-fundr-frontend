import HeroCommon from "../components/common/heroCommon";
import ProjectListing from "../components/marketplace/ProjectListing";
import SearchFarm from "../components/marketplace/searchFarm";

const FarmMarketPlace = () => {
  return (
    <>
      <HeroCommon
        text="Farm MarketPlace"
        img="bg-cover bg-[url('/assets/marketplace/marketplace.png')]"
      />
      <SearchFarm />
      <ProjectListing />
    </>
  );
};

export default FarmMarketPlace;
