import Image from "next/image";
import { MdVerifiedUser } from "react-icons/md";
import Button from "../../common/Buttons";
import { FaRegEnvelope } from "react-icons/fa";
import { BsEyeFill } from "react-icons/bs";
import Link from "next/link";
import { getFarmDetails } from "@/stores/farms/getFarmDetails";

const StoreFrontHeading = ({
  color,
  textColor,
  badgeColor,
  withBorderRadius = true,
}: {
  color: string;
  textColor: string;
  badgeColor: string;
  iconColor: string;
  withBorderRadius?: boolean;
}) => {
  const { data: farmDetails } = getFarmDetails();
  const farm = farmDetails?.data;
  return (
    <div
      className={` relative ${
        withBorderRadius ? "rounded-xl" : ""
      }  flex-1 ${color} shadow-xl`}
    >
      <Image
        src="/assets/my-farms/lines.png"
        alt="customize-store"
        width={420}
        height={468}
        className="absolute top-0 right-0 lg:w-[200px] lg:h-[200px] md:w-[100px] md:h-[100px]"
      />
      <div className="max-w-[1300px]  mx-auto">
        <div className=" pt-10 pl-4 pb-8 ">
          <div className="flex items-center gap-x-6">
            <Image
              src={
                withBorderRadius
                  ? "/assets/my-farms/storeLogo.png"
                  : "/assets/my-farms/uneditfarmpic.png"
              }
              alt="customize-store"
              width={208}
              height={168}
              className="md:w-[80px] md:h-[85px]"
            />
            <div>
              <div className="flex gap-x-3 items-center mb-1">
                <h3
                  className={`text-[22px] ${textColor} leading-7 font-aristoBold `}
                >
                  {farm?.farm?.name || "N/A"}
                </h3>
                {withBorderRadius || (
                  <p
                    className={`text-sm font-poppinsRegular w-fit text-[#226646] px-3 py-[6px] rounded-[79px] flex items-center justify-center gap-2 bg-[#FFFFFF]`}
                  >
                    <MdVerifiedUser fill="#00C853" size={16} />
                    Verified
                  </p>
                )}
              </div>
              <p className={`${textColor} mb-1`}>
                <span className="text-xs font-poppinsRegular"> Address:</span>{" "}
                <span className="font-poppinsSemiBold text-xs">
                  {`${farm?.farm?.city}, ${farm?.farm?.country} ` || "N/A"}
                </span>
              </p>
              {withBorderRadius && (
                <p className={`${textColor} mb-1`}>
                  <span className="text-xs font-poppinsRegular">
                    Farmer Name::
                  </span>{" "}
                  <span className="font-poppinsSemiBold text-xs">
                    {farm?.farm?.owner_name || "N/A"}
                  </span>
                </p>
              )}
              <p className={`${textColor} mb-1`}>
                <span className="text-xs font-poppinsRegular">CAC Reg No:</span>{" "}
                <span className="font-poppinsSemiBold text-xs">
                  {farm?.farm?.cac_reg_no || " N/A"}
                </span>
              </p>

              {withBorderRadius && (
                <p
                  className={`text-sm font-poppinsRegular mt-2 w-fit ${textColor} px-3 py-[6px] rounded-[79px] flex items-center justify-center gap-2 bg-[#FFFFFF33]`}
                >
                  {farm?.farm?.cac_reg_status !== "Unregistered" && (
                    <MdVerifiedUser className={`${badgeColor}`} size={16} />
                  )}
                  {farm?.farm?.cac_reg_status !== "Unregistered"
                    ? "Verified"
                    : "Unverified"}
                </p>
              )}

              <div className="flex gap-x-3 mt-4 md:hidden">
                <Button
                  className={`w-fit flex items-center justify-center gap-2 ${textColor}`}
                  variant="subtertiary"
                >
                  <FaRegEnvelope size={16} />
                  Send a message
                </Button>

                <Link href="/store-front/store-front-farm-details">
                  <Button
                    className="w-fit flex items-center justify-center gap-2"
                    variant="secondary"
                  >
                    <BsEyeFill size={16} />
                    View Farm
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:flex gap-x-3 mt-4 hidden">
            <Link href={"/store-front"}>
              <Button
                className={`w-fit flex items-center justify-center gap-2 ${textColor}`}
                variant="subtertiary"
              >
                <FaRegEnvelope size={16} />
                Send a message
              </Button>
            </Link>

            <Link href="/store-front/store-front-farm-details">
              <Button
                className="w-fit flex items-center justify-center gap-2"
                variant="secondary"
              >
                <BsEyeFill size={16} />
                View Farm
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreFrontHeading;
