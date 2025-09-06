import Container from "../common/container";
// import Image from "next/image";
// import { IoIosArrowDown } from "react-icons/io";
// import { IoFilterOutline } from "react-icons/io5";
// import Button from "../common/Buttons";
// import { IoIosSearch } from "react-icons/io";

const SearchFarm = () => {
  // const searchData = [
  //   {
  //     icon: "/assets/marketplace/3.svg",
  //     name: "Farm Name",
  //     select: "Select farm",
  //   },
  //   {
  //     icon: "/assets/marketplace/2.svg",
  //     name: "Preferred State?",
  //     select: "Select state",
  //   },
  //   {
  //     icon: "/assets/marketplace/1.svg",
  //     name: "Preferred City? ",
  //     select: "Select City",
  //   },
  //   {
  //     icon: "/assets/marketplace/1.svg",
  //     name: "Mode",
  //     select: "Select mode",
  //   },
  // ];
  return (
    <section className="bg-[#F6F6F6]">
      <Container>
        <p className="text-2xl font-aristoBold text-[#5F5F5F] mb-3">Filter</p>

        <div>
          <input
            type="text"
            placeholder="Search by crop"
            className="text-base w-full text-[#7C7C7C] px-3 py-2 bg-white border-[0.2px] border-[#E2E2E2] rounded-xl"
          />
        </div>

        {/* <div className="grid grid-cols-4 gap-6 mt-5 lg:grid-cols-2 md:grid-cols-1">
          {searchData.map((items, i) => (
            <div
              className="p-4 rounded-xl border-[0.2px] border-[#E2E2E2] flex gap-x-3 bg-white"
              key={i}
            >
              <Image src={items?.icon} width={40} height={40} alt="" />
              <div className="w-full">
                <p className="text-[#7C7C7C] text-xs mb-1">{items?.name}</p>
                <div className="bg-[#F6F6F6] flex justify-between items-center px-4 py-[12px] rounded-2xl cursor-pointer">
                  <p className="text-[#5F5F5F] text-xs">{items?.select}</p>
                  <span>
                    <IoIosArrowDown />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div> */}

        {/* <div className="flex items-center justify-center gap-x-3 mt-8">
          <Button
            variant="secondary"
            size="small"
            className="w-[400px] flex items-center gap-x-4 justify-center"
          >
            <span>
              <IoFilterOutline color="#2D865B" />
            </span>{" "}
            <span> Show All Filter</span>
          </Button>
          <Button
            className="w-[400px] flex items-center gap-x-4 justify-center"
            variant="search"
            size="small"
          >
            <span>
              <IoIosSearch />
            </span>{" "}
            <span>Search</span>
          </Button>
        </div> */}
      </Container>
    </section>
  );
};

export default SearchFarm;
