import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

const GoBackBtn = ({ href }: { href: string }) => {
  return (
    <div className="">
      <Link href={href || "/"}>
        <button className="text-[#7C7C7C] px-2 py-1 rounded-xl bg-[#F6F6F6] flex items-center gap-x-3 text-lg font-poppinsRegular hover:text-[#51F4A6]">
          <span className=" bg-white rounded-full p-2 hover:bg-[#51F4A6]">
            <IoIosArrowBack size={14} color="#7C7C7C" />
          </span>{" "}
          Go Back{" "}
        </button>
      </Link>
    </div>
  );
};

export default GoBackBtn;
