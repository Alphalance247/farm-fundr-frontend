import Image from "next/image";
import Heading from "../../Home-Page-Redesign/common/heading";
import Container from "../../common/container";
import Subhead from "../../Home-Page-Redesign/common/subhead";
import Link from "next/link";
import Button from "../../common/Buttons";
import { GoArrowRight } from "react-icons/go";

const LearnMore = ({
  btnLink,
  btnText,
  list,
  text,
  subheadText,
  className,
}: {
  btnLink: string;
  btnText: string;
  list: {
    image: string;
    head: string;
    subhed: string;
    list?: string[];
  }[];
  text: string;
  subheadText: string;
  className?: string;
}) => {
  return (
    <section className="bg-[#EEFEF6] relative">
      <div className="absolute z-[0] top-0 right-0 bottom-0 left-0">
        <Image
          src="/assets/Homepage-Redesign/v2.png"
          width={1440}
          height={512}
          className="w-full h-full"
          alt="positionlogo"
        />
      </div>
      <div className="absolute bottom-0 lg:h-[150px]">
        <Image
          src="/assets/LandingPage/icons/position1.svg"
          width={200}
          height={400}
          alt="positionlogo"
        />
      </div>
      <Container>
        <div className=" relative z-10">
          <div className="mb-20 lg:mb-10">
            <Heading className="text-center " text={text || "How it work"} />
            <p className="text-[#7C7C7C] font-poppinsRegular text-sm text-center w-[40%] mx-auto xl:w-[60%] lg:w-[80%] md:w-[90%]">
              {subheadText || "Simple steps to get your farm funded"}
            </p>
          </div>

          <div
            className={`grid grid-cols-3 gap-x-6 gap-y-20 ${className} lg:grid-cols-2  md:grid-cols-1 lg:gap-8 `}
          >
            {list?.map((item, i) => (
              <div
                className="bg-[#FCFCFC] rounded-[20px] p-6 text-center border border-[#E2E2E2] lg:p-4"
                key={i}
              >
                <Image
                  src={item?.image || "/assets/HowItWorks/redesign/1.png"}
                  width={60}
                  height={60}
                  alt="farmpady investment platform icons"
                  className="mx-auto"
                />

                <p className=" font-aristoBold text-2xl text-[#5F5F5F] mt-6 mb-2 lg:text-xl">
                  {item?.head}
                </p>

                {item?.list ? (
                  <div>
                    <p className="text-lg font-poppinsSemiBold text-[#7C7C7C] mt-4 xl:text-base">
                      Choose how you want to proceed:
                    </p>
                    <ul className="text-lg font-poppinsRegular text-[#7C7C7C] mt-4 xl:text-base">
                      <li className="list-disc">
                        <span className=" font-poppinsSemiBold"> Direct:</span>{" "}
                        Manage your investment independently. Via FarmFundr:
                        Leverage the expertise of FarmFundr for a guided and
                        managed approach.
                      </li>
                      <li className="list-disc">
                        <span className=" font-poppinsSemiBold">
                          Via FarmFundr:
                        </span>{" "}
                        Leverage the expertise of FarmFundr for a guided and
                        managed approach.
                      </li>
                    </ul>
                  </div>
                ) : (
                  <Subhead subheadText={item?.subhed} />
                )}
              </div>
            ))}
          </div>

          <Link href={btnLink || "/"}>
            <Button className="flex gap-x-2 w-[535px] mx-auto items-center mt-20 justify-center lg:w-full">
              {btnText || "Start Your farm profile"}
              <span>
                <GoArrowRight />
              </span>
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default LearnMore;
