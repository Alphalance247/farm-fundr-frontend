import { HiPencil } from "react-icons/hi2";
const EditBtn = ({
  onButtonEdit,
}: {
  onButtonEdit: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      onClick={onButtonEdit}
      className="text-[#5F5F5F] text-sm font-poppinsSemiBold bg-[#FCFCFC] px-4 py-2 w-fit flex gap-x-2 items-center justify-center rounded-2xl"
    >
      Edit <HiPencil size={16} color="#2D865B" />{" "}
    </button>
  );
};

export default EditBtn;
