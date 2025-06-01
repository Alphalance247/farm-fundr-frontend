import Image from "next/image";
import { MdVerifiedUser } from "react-icons/md";
import Button from "../../common/Buttons";
import { FaRegEnvelope } from "react-icons/fa";
import { BsEyeFill } from "react-icons/bs";
import Link from "next/link";

const StoreFrontHeading = ({
  color,
  textColor,
  badgeColor,
  iconColor,
  withBorderRadius = true,
}: {
  color: string;
  textColor: string;
  badgeColor: string;
  iconColor: string;
  withBorderRadius?: boolean;
}) => {
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
        className="absolute top-0 right-0"
      />
      <div className="max-w-[1300px]  mx-auto">
        <div className="flex items-center pt-10 pl-4 pb-8 gap-x-6">
          <Image
            src={
              withBorderRadius
                ? "/assets/my-farms/storeLogo.png"
                : "/assets/my-farms/uneditfarmpic.png"
            }
            alt="customize-store"
            width={208}
            height={168}
          />
          <div>
            <div className="flex gap-x-3 items-center mb-1">
              <h3
                className={`text-[22px] ${textColor} leading-7 font-aristoBold `}
              >
                FarmPady
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
                Lagos Nigeria{" "}
              </span>
            </p>
            {withBorderRadius && (
              <p className={`${textColor} mb-1`}>
                <span className="text-xs font-poppinsRegular">
                  Farmer Name::
                </span>{" "}
                <span className="font-poppinsSemiBold text-xs">
                  Aderibigbe Adigun
                </span>
              </p>
            )}
            <p className={`${textColor} mb-1`}>
              <span className="text-xs font-poppinsRegular">CAC Reg No:</span>{" "}
              <span className="font-poppinsSemiBold text-xs">CAC-12345</span>
            </p>

            {withBorderRadius && (
              <p
                className={`text-sm font-poppinsRegular mt-2 w-fit ${textColor} px-3 py-[6px] rounded-[79px] flex items-center justify-center gap-2 bg-[#FFFFFF33]`}
              >
                <MdVerifiedUser className={`${badgeColor}`} size={16} />
                Verified
              </p>
            )}

            <div className="flex gap-x-3 mt-4">
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
      </div>
    </div>
  );
};

export default StoreFrontHeading;
