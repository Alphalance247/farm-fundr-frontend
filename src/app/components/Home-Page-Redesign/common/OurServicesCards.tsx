import Image from "next/image";
import Heading from "./heading";
import Button from "../../common/Buttons";
import { GoArrowRight } from "react-icons/go";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Link from "next/link";

const OurServicesCards = ({
  imageSrc,
  benefit,
  heading,
  isRowReverse = false,
  btnLink,
  btnText,
  isFarmMarketPlace = false,
  isAgency = false,
}: {
  imageSrc: string;
  benefit: { list: string; span?: string; rest?: string }[];
  heading: string;
  isRowReverse?: boolean;
  btnLink: string;
  isFarmMarketPlace?: boolean;
  btnText: string;
  isAgency?: boolean;
}) => {
  return (
    <div
      className={`flex items-center relative z-10 gap-14 ${
        isRowReverse && "flex-row-reverse md:flex-row-reverse"
      }  lg:items-start lg:gap-8 md:flex-col`}
    >
      <div className="flex-1">
        <Image
          src={imageSrc || ""}
          width={580}
          height={601}
          alt="FarmPady Services Highlight"
        />
      </div>

      <div className="flex-1">
        <Heading text={heading || "Your Farm Deserves Digital Visibility"} />

        {isAgency && (
          <p className="text-[#7C7C7C] text-lg font-poppinsRegular mt-4 lg:text-base">
            Agencies and NGOs can design grant programs, receive farmer
            applications, and track outcomes — All on FarmPady.
          </p>
        )}

        <div className="pt-3 flex flex-col gap-y-3 mt-4 mb-8">
          {benefit.map((benefit, index) => (
            <div key={index} className="flex gap-x-2">
              <span>
                <IoIosCheckmarkCircle color="" fill="#2D865B" size={22} />
              </span>
              <p>
                <span className="text-[#7C7C7C] text-lg font-poppinsRegular lg:text-base">
                  {benefit?.list}{" "}
                  <span className=" font-poppinsSemiBold italic text-[#2D865B] text-lg">
                    {benefit?.span}
                  </span>{" "}
                  {benefit?.rest}
                </span>
              </p>
            </div>
          ))}
        </div>

        <div className="flex gap-4 lg:flex-col">
          <Link href={btnLink || "/"}>
            <Button className="flex gap-x-2 items-center justify-center lg:w-full">
              {btnText || "Start Your Farm Profile"}
              <span>
                <GoArrowRight />
              </span>
            </Button>
          </Link>

          {isFarmMarketPlace && (
            <Link href={"/farm-marketplace"}>
              <Button
                className="flex gap-x-2 items-center justify-center lg:w-full"
                variant="secondary"
              >
                Explore Marketplace
                <span>
                  <GoArrowRight />
                </span>
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurServicesCards;
