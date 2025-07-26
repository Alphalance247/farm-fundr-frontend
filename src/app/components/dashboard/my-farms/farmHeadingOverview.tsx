import { PiDotsThreeVertical } from "react-icons/pi";
import GoBackBtn from "../../common/goBack";
import CreateNewFarmBtn from "./createNewFarmBtn";
import Button from "../../common/Buttons";

const FarmHeadingOverview = ({
  farmName,
  overview,
  goBackLink,
  isProjectDetails,
}: {
  farmName?: string;
  overview?: string;
  goBackLink?: string;
  isProjectDetails?: boolean;
}) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <GoBackBtn href={goBackLink || "/farmer-dashboard/my-farms"} />
        </div>

        <p className="w-8 h-8 bg-white p-2 rounded-lg border-[#E4E7EC] border cursor-pointer">
          <PiDotsThreeVertical color="#001F3F" size={16} />
        </p>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-3">
          <div className="">
            <h2 className="text-xl font-poppinsSemiBold text-[#5F5F5F]">
              {farmName || "Green Valley farm"}
            </h2>
            <p className="text-sm font-poppinsRegular text-[#7C7C7C] mt-3">
              {overview}
            </p>
          </div>

          <p
            className={`text-sm  w-fit font-poppinsRegular  px-3 py-1 border  rounded-xl bg-[#E7F6EC] ${"bg-[#E7F6EC] text-[#006E2E] border-[#B0EECA]"}`}
          >
            {"Active"}
          </p>
        </div>

        {isProjectDetails ? (
          <Button>Save Changes</Button>
        ) : (
          <CreateNewFarmBtn />
        )}
      </div>
    </div>
  );
};

export default FarmHeadingOverview;
