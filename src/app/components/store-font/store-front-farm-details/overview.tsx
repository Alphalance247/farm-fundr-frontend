import Link from "next/link";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { MdOutlineVerifiedUser } from "react-icons/md";
import CustomerReviewCard from "../../common/customerReviewCard";
import { FaStar } from "react-icons/fa";
import Button from "../../common/Buttons";

const Overview = () => {
  const data: {
    id: number;
    name: string;
    href: string;
    icon: string;
    numberOfBranches: number;
    viewBtn: string;
  }[] = [
    {
      id: 1,
      name: "Branches",
      href: "/store-front/store-branches",
      icon: "/assets/store-front/farmicon.svg",
      numberOfBranches: 10,
      viewBtn: "View",
    },
    {
      id: 2,
      name: "Projects",
      href: "/store-front",
      icon: "/assets/store-front/farmicon.svg",
      numberOfBranches: 10,
      viewBtn: "View",
    },
    {
      id: 3,
      name: "Other farms",
      href: "/store-front/farms",
      icon: "/assets/store-front/farmicon.svg",
      numberOfBranches: 3,
      viewBtn: "View",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-3 gap-x-4 gap-y-4 lg:grid-cols-2">
        {data.map((el) => (
          <Link href={el?.href || "/"} key={el.id}>
            <div className="bg-[linear-gradient(90deg,#2D865B_0%,#12482F_100%)] flex flex-col gap-y-3 p-6 rounded-xl border border-[#F6F6F6]">
              <div className="flex items-center justify-between gap-x-2">
                <p
                  key={el.id}
                  className="text-white text-base font-poppinsRegular"
                >
                  {el.name}
                </p>
                <Image src={el.icon} alt={el.name} width={48} height={48} />
              </div>

              <div className="flex items-center justify-between gap-x-2">
                <p className="text-white font-poppinsSemiBold text-4xl">
                  {el.numberOfBranches}
                </p>
                <button className=" text-white text-base font-poppinsRegular flex items-center gap-x-2 justify-center">
                  {el.viewBtn}{" "}
                  <span>
                    {" "}
                    <GoArrowRight color="white" />
                  </span>
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-x-10 mt-8 lg:grid-cols-1 lg:gap-y-8">
        <div className="grid grid-cols-[2fr_1fr] gap-x-4 lg:grid-cols-1 lg:gap-y-6">
          <div>
            <Image
              src="/assets/store-front/store1.png"
              alt="store-front-details"
              width={408}
              height={290}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-y-2 lg:grid lg:grid-cols-3 lg:gap-x-6">
            <Image
              src="/assets/store-front/store2.png"
              alt="store-front-details"
              width={169}
              height={87}
              className="w-full h-full object-cover"
            />
            <Image
              src="/assets/store-front/store3.png"
              alt="store-front-details"
              width={169}
              height={87}
              className="w-full h-full object-cover"
            />
            <Image
              src="/assets/store-front/store4.png"
              alt="store-front-details"
              width={169}
              height={87}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-y-8 justify-between h-full">
          <div>
            <h4 className="text-[#5F5F5F] text-base font-poppinsSemiBold mb-3">
              About FarmPady
            </h4>
            <p className="text-sm font-poppinsRegular text-[#7C7C7C]">
              Established on March 21, 2025, FarmPady has expanded to 5 branches
              across the country, managed by farmer, Aderibigbe Adigun. Verified
              by CAC and our team, CAC Reg No: 123456789.
            </p>
          </div>

          <div>
            <h4 className="text-[#5F5F5F] text-base font-poppinsSemiBold mb-3">
              Farm Size
            </h4>
            <p className="text-sm font-poppinsRegular text-[#7C7C7C]">
              2 acres of land
            </p>
          </div>

          <div>
            <h4 className="text-[#5F5F5F] text-base font-poppinsSemiBold mb-3">
              Social Media Links
            </h4>

            <div className="flex gap-x-20 md:gap-x-8 md:flex-col md:gap-y-6">
              <div className="flex items-center gap-x-[10px]">
                <Image
                  src="/assets/ContactUs/instgram.svg"
                  width={40}
                  height={40}
                  alt=""
                />

                <p className="text-lg text-[#7C7C7C] font-poppinsRegular">
                  Instagram
                </p>
              </div>

              <div className="flex items-center gap-x-[10px]">
                <Image
                  src="/assets/ContactUs/linkdIn.svg"
                  width={40}
                  height={40}
                  alt="linkedIn"
                />
                <p className="text-lg text-[#7C7C7C] font-poppinsRegular">
                  Linkedin
                </p>
              </div>
              <div className="flex items-center gap-x-[10px]">
                <Image
                  src="/assets/ContactUs/x.svg"
                  width={40}
                  height={40}
                  alt="X"
                />
                <p className="text-lg text-[#7C7C7C] font-poppinsRegular">X</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-[#F6F6F6] rounded-xl p-4 shadow-lg mt-12">
        <h4 className="text-[#5F5F5F] text-base font-poppinsSemiBold mb-4 pb-3 border-b border-[#F6F6F6]">
          About FarmPady
        </h4>

        <div className="flex flex-col gap-y-4">
          {/* first row */}
          <div className="grid grid-cols-2 gap-x-8 border-b border-[#F6F6F6] md:grid-cols-1">
            <div className="flex items-center justify-between py-4">
              <p className="text-[#7C7C7C] text-sm font-poppinsSemiBold">
                farmer’s Name
              </p>
              <p className="text-[#5F5F5F] text-base font-poppinsSemiBold">
                Aderibigbe Adigun
              </p>
            </div>
            <div className="flex items-center justify-between py-4">
              <p className="text-[#7C7C7C] text-sm font-poppinsSemiBold">
                Farm Address
              </p>
              <p className="text-[#5F5F5F] text-base font-poppinsSemiBold">
                Ibadan, Nigeria
              </p>
            </div>
          </div>

          {/* second row */}
          <div className="grid grid-cols-2 gap-x-8 border-b border-[#F6F6F6] md:grid-cols-1">
            <div className="flex items-center justify-between py-4">
              <p className="text-[#7C7C7C] text-sm font-poppinsSemiBold">
                Email
              </p>
              <p className="text-[#5F5F5F] text-base font-poppinsSemiBold">
                farmpady@gmail.com
              </p>
            </div>
            <div className="flex items-center justify-between py-4">
              <p className="text-[#7C7C7C] text-sm font-poppinsSemiBold">
                Contact
              </p>
              <p className="text-[#5F5F5F] text-base font-poppinsSemiBold">
                090123456789
              </p>
            </div>
          </div>

          {/* third row */}
          <div className="grid grid-cols-2 gap-x-8 border-b border-[#F6F6F6] md:grid-cols-1">
            <div className="flex items-center justify-between py-4">
              <p className="text-[#7C7C7C] text-sm font-poppinsSemiBold">
                Verification Status
              </p>
              <p className="text-[#2D865B] text-xs font-poppinsSemiBold flex items-center gap-x-2">
                <span>
                  {" "}
                  <MdOutlineVerifiedUser
                    color="white"
                    fill="#00C853"
                    size={25}
                  />
                </span>
                Verified
              </p>
            </div>
            <div className="flex items-center justify-between py-4">
              <p className="text-[#7C7C7C] text-sm font-poppinsSemiBold">
                Branches
              </p>
              <p className="text-[#5F5F5F] text-base font-poppinsSemiBold">5</p>
            </div>
          </div>

          {/* fourth row */}
          <div className="grid grid-cols-2 gap-x-8 border-b border-[#F6F6F6]">
            <div className="flex items-center justify-between py-4">
              <p className="text-[#7C7C7C] text-sm font-poppinsSemiBold">
                Start Date
              </p>
              <p className="text-[#7C7C7C] text-sm font-poppinsSemiBold">
                March 21, 2025.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-[#F6F6F6] rounded-xl p-4 shadow-lg mt-12">
        <h4 className="text-[#5F5F5F] text-base font-poppinsSemiBold mb-4 pb-3 border-b border-[#F6F6F6]">
          farm Review
        </h4>

        <p className="bg-[#EEFEF6] mt-4 mb-6 p-2 rounded-lg text-sm font-poppinsSemiBold text-[#5F5F5F]">
          Comment From Investors
        </p>

        <div className="grid grid-cols-3 gap-6 border-b border-[#E2E2E2] pb-6 lg:grid-cols-2 md:grid-cols-1">
          <CustomerReviewCard />
          <CustomerReviewCard />
          <CustomerReviewCard />
          <CustomerReviewCard />
          <CustomerReviewCard />
          <CustomerReviewCard />
        </div>

        <div className="flex p-6 gap-x-10 w-[575px] rounded-2xl border border-[#E2E2E2] bg-white mt-6 md:flex-col md:gap-y-6 md:w-full md:p-3">
          <div>
            <p className="text-sm font-poppinsSemiBold text-[#5F5F5F] mb-4">
              Rate Your Experience
            </p>

            <div className="flex items-center gap-x-2 border-b border-[#F0F2F5] pb-6 ">
              <FaStar color="#E2E2E2" size={24} />
              <FaStar color="#E2E2E2" size={24} />
              <FaStar color="#E2E2E2" size={24} />
              <FaStar color="#E2E2E2" size={24} />
              <FaStar color="#E2E2E2" size={24} />
            </div>
          </div>

          <div className="w-full">
            <p className="text-[#5F5F5F] text-xs font-poppinsRegular mb-2">
              Leave us a review
            </p>

            <textarea
              className="text-xs font-poppinsRegular border border-[#51F4A6] w-full p-4 text-[#7C7C7C] bg-[#EEFEF6] rounded-lg"
              id="description"
              name="description"
              rows={4}
              required
              placeholder="Write a review"
              //   value={form?.description || ""}
              // onChange={handleChange}
            ></textarea>

            <Button variant="primary" className="w-full mt-5 block">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
