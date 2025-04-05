import { FaChevronRight } from "react-icons/fa6";

export default function NextArrow({ onClick }: { onClick?: () => void }) {
  return (
    <div
      className={`absolute cursor-pointer top-[105%] bg-[#CECECE] p-3 rounded-full right-[28rem] z-10 active:bg-[#51F4A6] hover:bg-[#51F4A6] xl:right-[23rem] lg:right-[14rem] md:right-[2rem] `}
      onClick={onClick}
      style={{ transform: "translateY(-50%)" }}
    >
      <FaChevronRight size={24} color="#226646" />
    </div>
  );
}
