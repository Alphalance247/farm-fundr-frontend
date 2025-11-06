import Image from "next/image";

const OverviewCard = ({
  img,
  head,
  subhead,
}: {
  img: string;
  head: string;
  subhead: string;
}) => {
  return (
    <div className="px-3 space-y-3 py-4 border border-[#F2F2F3] bg-[#FFFFFF] rounded-md">
      <Image width={38} height={38} src={img || ""} alt="weather icons" />
      <p className="text-sm font-poppinsRegular text-[#34474E] md:text-xs">
        {head}
      </p>

      <p className="text-2xl border-b pb-3 border-[#F2F2F3] text-[#5F5F5F] font-poppinsSemiBold">
        {subhead}
      </p>
    </div>
  );
};

export default OverviewCard;
