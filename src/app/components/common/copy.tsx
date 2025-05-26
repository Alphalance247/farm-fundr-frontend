import { MdOutlineFileCopy } from "react-icons/md";

const Copy = () => {
  return (
    <div
      className="bg-[#282A03] cursor-pointer rounded-[8px] px-2 py-1 flex items-center gap-x-2"
      // onClick={() => handleCopy("1234567890")}
    >
      <p className="text-[#EEFEF6] font-poppinsRegular text-sm">copy</p>
      <span>
        {" "}
        <MdOutlineFileCopy size={15} color="#EEFEF6" />
      </span>
    </div>
  );
};

export default Copy;
