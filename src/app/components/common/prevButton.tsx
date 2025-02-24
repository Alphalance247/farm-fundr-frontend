import { FaChevronLeft } from "react-icons/fa6";

export default function PrevArrow({ onClick }: { onClick?: () => void }) {
  //   const { onClick } = props;
  return (
    <div
      className={`absolute cursor-pointer top-[105%] bg-[#CECECE] active:bg-[#51F4A6] hover:bg-[#51F4A6] p-3 rounded-full left-[28rem] z-10 xl:left-[23rem] lg:left-[14rem] md:left-[0.5rem]`}
      onClick={onClick}
      style={{ transform: "translateY(-50%)" }}
    >
      <FaChevronLeft size={24} color="#226646" />
    </div>
  );
}
