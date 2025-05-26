import { PiDotsThreeVertical } from "react-icons/pi";
import GoBackBtn from "../../common/goBack";
import CreateNewFarmBtn from "./createNewFarmBtn";

const FarmHeadingOverview = ({
  farmName,
  overview,
}: {
  farmName?: string;
  overview?: string;
}) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <GoBackBtn href="/farmer-dashboard/my-farms" />
        </div>

        <p className="w-8 h-8 bg-white p-2 rounded-lg border-[#E4E7EC] border cursor-pointer">
          <PiDotsThreeVertical color="#001F3F" size={16} />
        </p>
      </div>

      <div className="flex justify-between items-center">
        <div className="">
          <h2 className="text-xl font-poppinsSemiBold text-[#5F5F5F]">
            {farmName || "Green Valley farm"}
          </h2>
          <p className="text-sm font-poppinsRegular text-[#7C7C7C] mt-3">
            {overview || "Overview of Valley Farm"}
          </p>
        </div>

        <div>
          <CreateNewFarmBtn />
        </div>
      </div>
    </div>
  );
};

export default FarmHeadingOverview;
