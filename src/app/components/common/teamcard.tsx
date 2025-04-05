import Image from "next/image";

const TeamCard = ({
  img,
  alt,
  name,
  title,
  className,
}: {
  img: string;
  alt: string;
  title: string;
  name: string;
  className: string;
}) => {
  return (
    <div className={`w-[324px] ${className} lg:w-full`}>
      <Image width={324} height={278} src={img} alt={alt} className="w-full" />
      <div className="bg-[#EEFEF6] text-center py-[17px] rounded-br-[10px] rounded-bl-[10px] shadow-md">
        <p className="text-2xl text-[#282A03] font-aristoBold mb-2">{name}</p>
        <p className="text-lg text-[#7C7C7C] font-poppinsRegular">{title}</p>
      </div>
    </div>
  );
};

export default TeamCard;
