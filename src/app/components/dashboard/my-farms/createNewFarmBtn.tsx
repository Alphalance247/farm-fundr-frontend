import { FaAngleDown } from "react-icons/fa6";
import Image from "next/image";
const CreateNewFarmBtn = () => {
  return (
    <button className="bg-[#282A03] rounded-[40px] text-[#FCFCFC] p-4 flex items-center gap-x-2 font-poppinsSemiBold">
      <span>
        <Image
          src="/assets/my-farms/plus.svg"
          width={18}
          height={18}
          alt="plus"
        />
      </span>
      Create New
      <span>
        <FaAngleDown size={24} color="white" />
      </span>
    </button>
  );
};

export default CreateNewFarmBtn;
