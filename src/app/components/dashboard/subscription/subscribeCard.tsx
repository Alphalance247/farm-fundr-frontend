"use client";
import Image from "next/image";
import Button from "@/app/components/common/Buttons";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import Link from "next/link";
import { useState, useEffect } from "react";

interface subscribeProps {
  planName: string;
  description: string;
  planAmount: string;
  planOverviewImg: string;
  planOfferDescrioption: string;
  planFeatures: string;
  featuringSubtitle: string;
  planBenefit: string[];
  descriptionAvailable: boolean;
  bgColor: string;
  textColor: string;
  bgColor2: string;
  border: string;
  borderColor2: string;
  textColor2: string;
  iconColor: string;
  link: string;
  id: string;
}

const SubscribeCard: React.FC<subscribeProps> = ({
  planAmount,
  planBenefit,
  planFeatures,
  planName,
  planOfferDescrioption,
  planOverviewImg,
  featuringSubtitle,
  description,
  descriptionAvailable,
  bgColor,
  textColor,
  bgColor2,
  border,
  borderColor2,
  iconColor,
  textColor2,
  link,
  id,
}) => {
  const [select, setSelect] = useState<string>("");

  const handleSelectedPlan = (userType: string) => {
    setSelect(userType);
  };

  useEffect(() => {
    localStorage.setItem("selectedPlanId", select);
  }, [select]);

  console.log(select);

  return (
    <div className={`${bgColor} p-6 md:p-4 border border-[#E4E7EC] rounded-xl`}>
      <div className="flex justify-between items-center mb-3">
        <p className=" text-[2rem] font-aristoBold text-[#5F5F5F]">
          {planName}
        </p>
        {descriptionAvailable && (
          <p className="bg-[#4379FF] px-4 py-[6px] text-white rounded-[2.5rem]">
            {description}
          </p>
        )}
      </div>

      <div
        className={`bg-[#FCFCFC] border ${border}  rounded-xl p-4 flex flex-col gap-y-4 mb-9`}
      >
        <div
          className={`${bgColor2} rounded-lg py-[5px] px-[10px] flex justify-between items-center mb-3`}
        >
          <p className={` ${textColor} font-poppinsSemiBold text-xl`}>
            <span>{planAmount.slice(0, 6)}</span>
            <span className="text-base">{planAmount.slice(6)}</span>
          </p>
          <Image
            src={planOverviewImg || ""}
            width={43}
            height={35}
            alt="note plan"
          />
        </div>
        <p className="text-xs text-[#7C7C7C] font-poppinsRegular">
          {planOfferDescrioption}
        </p>
      </div>
      <Link href={link}>
        <Button
          size="medium"
          className="w-full"
          onClick={() => handleSelectedPlan(id)}
        >
          Select Plan
        </Button>
      </Link>

      <div
        className={`mt-9 bg-[#FCFCFC] border ${borderColor2} rounded-xl p-4`}
      >
        <div className="border-b border-b-[#E2E2E2] pb-3">
          <p
            className={`text-[#239BB5] ${textColor2} font-poppinsSemiBold text-2xl mb-3`}
          >
            {planFeatures}
          </p>
          <p className="text-xs font-poppinsSemiBold text-[#7C7C7C]">
            {featuringSubtitle}
          </p>
        </div>
        <div className="pt-3 flex flex-col gap-y-3">
          {planBenefit.map((benefit, index) => (
            <p key={index} className="flex items-center gap-x-2">
              <span className={`${iconColor}`}>
                <IoCheckmarkCircleOutline size={11.5} />
              </span>
              <span className="text-[#7C7C7C] text-sm font-poppinsRegular">
                {benefit}
              </span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscribeCard;
