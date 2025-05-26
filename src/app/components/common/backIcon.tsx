import Link from "next/link";
import { LiaTimesSolid } from "react-icons/lia";

const BackIcon = ({ link }: { link: string }) => {
  return (
    <Link href={link || ""}>
      <span className="cursor-pointer flex flex-col justify-center items-center bg-[#F0F2F5] w-10 h-10 p-2 rounded-full">
        <LiaTimesSolid className="text-2xl text-[#5F5F5F]" />
      </span>
    </Link>
  );
};

export default BackIcon;
