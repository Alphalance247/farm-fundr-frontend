const SettingHeading = ({
  heading,
  subHead,
}: {
  heading: string;
  subHead: string;
}) => {
  return (
    <div>
      <h4 className="text-3xl text-[#5F5F5F] font-aristoBold mb-1">
        {heading}
      </h4>
      <p className=" font-poppinsRegular text-[#5F5F5F] text-sm pb-3 border-[#E4E7EC] border-b">
        {subHead}
      </p>
    </div>
  );
};

export default SettingHeading;
