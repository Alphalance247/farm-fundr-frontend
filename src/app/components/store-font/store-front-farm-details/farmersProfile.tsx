import { getFarmPageListStore } from "@/stores/farmpage/farmPageList";
import Image from "next/image";
import { RiGraduationCapFill } from "react-icons/ri";

const FarmersProfile = () => {
  const { data: farmData } = getFarmPageListStore();
  const farmersDetails = farmData?.farmer_details;

  return (
    <section className="">
      <div className="grid grid-cols-[2fr_1fr] gap-x-8 xl:grid-cols-1 gap-y-6">
        <div className="bg-[#226646] border border-[#51F4A6] flex items-center gap-6 rounded-xl p-4 md:flex-col md:items-start">
          {!farmersDetails?.image ? (
            <Image
              src={`${farmersDetails?.image}`}
              width={225}
              height={178}
              alt="avatar"
              className="w-[175px] h-[170px] rounded-full md:w-[100px] md:h-[100px]"
            />
          ) : (
            <div className="h-[135px] w-[135px] md:w-[100px] md:h-[100px] rounded-full bg-[#EEFEF6] text-[#2D865B] flex items-center justify-center text-[54px] tracking-[0.34px] font-medium">
              {farmersDetails?.fullname
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </div>
          )}

          <div>
            <h5 className="text-[#FFFFFF] text-2xl font-aristoBold mb-2">
              {farmersDetails?.fullname}
            </h5>
            <p className=" font-poppinsRegular mb-4 text-[white]">
              {farmersDetails?.fullname}, a pioneer in sustainable farming
              practices.
            </p>
            <p className="flex items-center gap-2 font-poppinsSemiBold text-sm text-white">
              <span>
                <RiGraduationCapFill size={24} fill="#FFFFFF" />
              </span>
              {farmersDetails?.university || "N/A"}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="border-[#C5D5FF] border p-4 bg-[#FFFFFF] rounded-lg">
            <p className="text-[#5F5F5F] text-sm font-poppinsSemiBold pb-2 border-b border-b-[#B0EECA] mb-6">
              Experience
            </p>
            <div className="text-center flex flex-col justify-center">
              <div className="bg-[#ECF2FF] border-[4px] border-[#4379FF] h-[90px] w-[90px] rounded-full mb-3 flex flex-col justify-center items-center mx-auto">
                <p className="text-[#5F5F5F] text-2xl font-poppinsSemiBold">
                  {farmersDetails?.years_of_exp || 0}
                </p>
              </div>
              <p className="text-[#7C7C7C]  font-poppinsRegulartext-sm mt-3">
                years of Experience
              </p>
            </div>
          </div>

          {/* <div className="border-[#B0EECA] border p-4 bg-[#FFFFFF] rounded-lg">
            <p className="text-[#5F5F5F] text-sm font-poppinsSemiBold pb-2 border-b border-b-[#B0EECA] mb-6">
              Experience
            </p>
            <div className="text-center flex flex-col justify-center">
              <div className="bg-[white] border-[10px] border-[#00C853] h-[90px] w-[90px] rounded-full mb-3 flex flex-col justify-center items-center mx-auto">
                <p className="text-[#000000] text-lg font-poppinsSemiBold">
                  75%
                </p>
              </div>
              <p className="text-[#5F5F5F] text-sm mt-3">years of Experience</p>
            </div>
          </div> */}
        </div>
      </div>

      <div className="bg-white border border-[#F6F6F6] rounded-xl p-4 shadow-lg mt-12">
        <h4 className="text-[#5F5F5F] text-base font-poppinsSemiBold mb-4 pb-3 border-b border-[#F6F6F6]">
          Farmer’s Details
        </h4>

        <div className="flex flex-col gap-y-4">
          {/* first row */}
          <div className="grid grid-cols-2 gap-x-8 border-b border-[#F6F6F6] lg:grid-cols-1">
            <div className="flex items-center justify-between py-4">
              <p className="text-[#7C7C7C] text-sm font-poppinsSemiBold">
                farmer’s Name
              </p>
              <p className="text-[#5F5F5F] text-base font-poppinsSemiBold">
                {farmersDetails?.fullname || "N/A"}
              </p>
            </div>
            <div className="flex items-center justify-between py-4">
              <p className="text-[#7C7C7C] text-sm font-poppinsSemiBold">
                Farm Address
              </p>
              <p className="text-[#5F5F5F] text-base font-poppinsSemiBold">
                {`${farmersDetails?.city} ${farmersDetails?.country}` || "N/A"}
              </p>
            </div>
          </div>

          {/* second row */}
          <div className="grid grid-cols-2 gap-x-8 border-b border-[#F6F6F6] lg:grid-cols-1">
            <div className="flex items-center justify-between py-4">
              <p className="text-[#7C7C7C] text-sm font-poppinsSemiBold">
                Email
              </p>
              <p className="text-[#5F5F5F] text-base font-poppinsSemiBold">
                {farmersDetails?.email || "N/A"}
              </p>
            </div>
            <div className="flex items-center justify-between py-4">
              <p className="text-[#7C7C7C] text-sm font-poppinsSemiBold">
                Phone Number
              </p>
              <p className="text-[#5F5F5F] text-base font-poppinsSemiBold">
                {farmersDetails?.phone || "N/A"}
              </p>
            </div>
          </div>

          {/* third row */}
          <div className="grid grid-cols-2 gap-x-8 border-b border-[#F6F6F6] lg:grid-cols-1">
            <div className="flex items-center justify-between py-4">
              <p className="text-[#7C7C7C] text-sm font-poppinsSemiBold">
                Highest Degree
              </p>
              <p className="text-[#7C7C7C] text-sm font-poppinsSemiBold">
                {farmersDetails?.highest_education}
              </p>
            </div>

            <div className="flex items-center justify-between py-4">
              <p className="text-[#7C7C7C] text-sm font-poppinsSemiBold">
                Experience
              </p>
              <p className="text-[#5F5F5F] text-base font-poppinsSemiBold">
                {farmersDetails?.years_of_exp || 0} years of experience
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-6 lg:grid-cols-1 lg:gap-y-20">
        {/* <div className="bg-white border border-[#F6F6F6] rounded-xl p-4 shadow-lg mt-12 h-fit">
          <h4 className="text-[#5F5F5F] text-base font-poppinsSemiBold mb-4 pb-3 border-b border-[#E2E2E2]">
            Certifications
          </h4>

          <div className="py-6 border-b border-[#F6F6F6]">
            <div className="flex justify-between text-base font-poppinsSemiBold text-[#5F5F5F]">
              <p>Farmer Board organisation Certificate</p>
              <p>2023</p>
            </div>

            <p className="text-sm text-[#7C7C7C] mt-3 mb-3">
              Issued on Feb 16,2024
            </p>

            <Image
              src="/assets/store-front/cert.svg"
              width={78}
              height={45}
              alt="certification"
            />
          </div>
          <div className="py-6">
            <div className="flex justify-between text-base font-poppinsSemiBold text-[#5F5F5F]">
              <p>Farmer Board organisation Certificate</p>
              <p>2023</p>
            </div>

            <p className="text-sm text-[#7C7C7C] mt-3 mb-3">
              Issued on Feb 16,2024
            </p>

            <Image
              src="/assets/store-front/cert.svg"
              width={78}
              height={45}
              alt="certification"
            />
          </div>
        </div> */}

        <div className="flex flex-col gap-y-6">
          {/* <div className="bg-white border border-[#F6F6F6] rounded-xl p-4 shadow-lg mt-12  h-fit">
            <h4 className="text-[#5F5F5F] text-base font-poppinsSemiBold mb-4 pb-3 border-b border-[#E2E2E2]">
              Award
            </h4>

            <div className="py-6 border-b border-[#F6F6F6]">
              <div className="flex justify-between text-base font-poppinsSemiBold text-[#5F5F5F]">
                <p>Most Outstanding Farmer</p>
                <p>2023</p>
              </div>

              <p className="text-sm text-[#7C7C7C] mt-3 mb-3">
                Awarded by Farmer board Organisation
              </p>
            </div>

            <div className="py-6">
              <div className="flex justify-between text-base font-poppinsSemiBold text-[#5F5F5F]">
                <p>Farmer of the year</p>
                <p>2025</p>
              </div>

              <p className="text-sm text-[#7C7C7C] mt-3 mb-3">
                Awarded by Farmer board Organisation
              </p>
            </div>
          </div> */}

          <div className="bg-white border border-[#F6F6F6] rounded-xl p-4 shadow-lg mt-2  h-fit">
            <h4 className="text-[#5F5F5F] text-base font-poppinsSemiBold mb-4 pb-3 border-b border-[#E2E2E2]">
              Social media Link
            </h4>

            <div className="flex justify-center gap-x-20 md:grid md:grid-cols-2 md:gap-y-6 justify-items-center lg:justify-start md:justify-items-start md:pr-10">
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
              <div className="flex items-center gap-x-[10px] md:col-span-2">
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
    </section>
  );
};

export default FarmersProfile;
