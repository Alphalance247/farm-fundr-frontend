const FarmerInfo = ({ title, name }: { title: string; name: string }) => {
  return (
    <div>
      <p className="text-xs font-poppinsRegular text-[#7C7C7C] mb-2">{title}</p>

      <p className="text-sm font-poppinsSemiBold text-[#5F5F5F]">{name}</p>
    </div>
  );
};

export default FarmerInfo;
