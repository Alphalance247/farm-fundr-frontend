import Image from "next/image";
import { MdVerifiedUser } from "react-icons/md";
import Button from "../../common/Buttons";
import { FaRegEnvelope } from "react-icons/fa";
import { BsEyeFill } from "react-icons/bs";
import Link from "next/link";
import { getFarmDetails } from "@/stores/farms/getFarmDetails";
import { VscUnverified } from "react-icons/vsc";
import { useState } from "react";

const StoreFrontHeading = ({
  color,
  textColor,
  badgeColor,
  withBorderRadius = true,
  verifiedText,
  farmerAddress,
  farmerName,
  cacRegNo,
  farmName,
  setFile,
  farmpageLogo,
}: {
  color: string;
  textColor: string;
  badgeColor: string;
  iconColor: string;
  withBorderRadius?: boolean;
  verifiedText?: string;
  farmerAddress?: string;
  farmerName?: string;
  cacRegNo?: string;
  farmName?: string;
  farmpageLogo?: string;
  setFile?: (file: File) => void;
}) => {
  const { data: farmDetails } = getFarmDetails();
  const farm = farmDetails?.data;

  const [preview, setPreview] = useState<string | null | undefined>(
    farmDetails?.data?.farm?.logo
  );

  const handlePictureUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.size <= 5 * 1024 * 1024) {
      if (setFile) {
        setFile(selectedFile);
      }
      setPreview(URL.createObjectURL(selectedFile));
    } else {
      alert("File must be less than 5MB");
    }
  };

  return (
    <div
      className={`relative ${
        withBorderRadius ? "rounded-xl" : ""
      }  flex-1 ${color} shadow-xl`}
    >
      <img
        src="/assets/my-farms/lines.png"
        alt="customize-store"
        width={420}
        height={468}
        className="absolute z-[1] top-0 right-0 lg:w-[200px] lg:h-[200px] md:w-[100px] md:h-[100px]"
      />
      <div className="max-w-[1300px]  mx-auto relative z-10">
        <div className=" pt-10 pl-4 pb-8 md:pt-4">
          <div className="flex items-center gap-x-6 md:flex-col md:items-start">
            {/*  */}
            {!withBorderRadius ? (
              <img
                src={farmpageLogo || "/assets/my-farms/uneditfarmpic.png"}
                alt="customize-store"
                width={208}
                height={168}
                className="md:w-[80px] md:h-[85px] rounded-full"
              />
            ) : (
              <div>
                <label className="mt-4 px-6 py-3 " id="image-upload">
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handlePictureUpload}
                    className="hidden"
                  />

                  {preview ? (
                    <img
                      src={preview || ""}
                      alt="profileImage"
                      width={208}
                      height={168}
                      className="w-[208px] rounded-full h-[218px] md:w-[80px] md:h-[85px] cursor-pointer"
                    />
                  ) : (
                    <Image
                      src="/assets/my-farms/storeLogo.png"
                      alt="profileImage"
                      width={208}
                      height={168}
                      className="w-[208px] rounded-lg h-[218px] md:w-[80px] md:h-[85px] cursor-pointer"
                    />
                  )}
                </label>
              </div>
            )}

            {/*  */}

            <div>
              <div className="flex gap-x-3 items-center mb-1">
                <h3
                  className={`text-[22px] ${textColor} leading-7 font-aristoBold `}
                >
                  {farm?.farm?.name || farmName}
                </h3>
                {withBorderRadius || (
                  <p
                    className={`text-sm font-poppinsRegular w-fit text-[#226646] px-3 py-[6px] rounded-[79px] flex items-center justify-center gap-2 bg-[#FFFFFF]`}
                  >
                    {verifiedText === "verified" ? (
                      <MdVerifiedUser fill="#00C853" size={16} />
                    ) : (
                      ""
                    )}
                    {verifiedText}
                  </p>
                )}
              </div>
              <p className={`${textColor} mb-1`}>
                <span className="text-xs font-poppinsRegular"> Address:</span>{" "}
                <span className="font-poppinsSemiBold text-xs">
                  {farm?.farm?.country || farmerAddress}
                </span>
              </p>
              {withBorderRadius && (
                <p className={`${textColor} mb-1`}>
                  <span className="text-xs font-poppinsRegular">
                    Farmer Name::
                  </span>{" "}
                  <span className="font-poppinsSemiBold text-xs">
                    {farm?.farm?.owner_name || farmerName}
                  </span>
                </p>
              )}
              <p className={`${textColor} mb-1`}>
                <span className="text-xs font-poppinsRegular">CAC Reg No:</span>{" "}
                <span className="font-poppinsSemiBold text-xs">
                  {farm?.farm?.cac_reg_no || cacRegNo}
                </span>
              </p>

              {withBorderRadius && (
                <p
                  className={`text-sm font-poppinsRegular mt-2 w-fit ${textColor} px-3 py-[6px] rounded-[79px] flex items-center justify-center gap-2 bg-[#FFFFFF33]`}
                >
                  {farm?.farm?.cac_reg_status !== "Unregistered" ? (
                    <MdVerifiedUser className={`${badgeColor}`} size={16} />
                  ) : (
                    <VscUnverified className={`${badgeColor}`} size={16} />
                  )}
                  {farm?.farm?.cac_reg_status !== "Unregistered"
                    ? "Verified"
                    : "Unverified"}
                </p>
              )}

              <div className="flex gap-x-3 mt-4 md:hidden">
                {!withBorderRadius && (
                  <a
                    href={`https://wa.me/${
                      farm?.farm?.farm_whatsapp_number || "08140686688"
                    }`}
                    target="_blank"
                  >
                    <Button
                      className={`w-fit flex items-center justify-center gap-2 ${textColor}`}
                      variant="subtertiary"
                    >
                      <FaRegEnvelope size={16} />
                      Send a message
                    </Button>
                  </a>
                )}
                {!withBorderRadius ? (
                  <Link href={"/farm-page/farm-page-farm-details"}>
                    <Button
                      className="w-fit flex items-center justify-center gap-2"
                      variant="secondary"
                    >
                      <BsEyeFill size={16} />
                      View Farm
                    </Button>
                  </Link>
                ) : (
                  <a href={`http://${farm?.farm?.farm_link}`} target="_blank">
                    <Button
                      className="w-fit flex items-center justify-center gap-2"
                      variant="secondary"
                    >
                      <BsEyeFill size={16} />
                      View Farm
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </div>

          {!withBorderRadius && (
            <div className="md:flex md:flex-col md:gap-y-3 md:pr-4 gap-x-3 mt-4 hidden">
              <a
                href={`https://wa.me/${
                  farm?.farm?.farm_whatsapp_number || "08140686688"
                }`}
                target="_blank"
              >
                <Button
                  className={`w-fit flex items-center justify-center gap-2 ${textColor}`}
                  variant="subtertiary"
                >
                  <FaRegEnvelope size={16} />
                  Send a message
                </Button>
              </a>

              <Link href="/farm-page/farm-page-farm-details">
                <Button
                  className="w-fit flex items-center justify-center gap-2"
                  variant="secondary"
                >
                  <BsEyeFill size={16} />
                  View Farm
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreFrontHeading;
