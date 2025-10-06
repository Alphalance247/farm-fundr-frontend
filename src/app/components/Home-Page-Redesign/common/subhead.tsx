const Subhead = ({ subheadText }: { subheadText: string }) => {
  return (
    <p className="text-lg font-poppinsRegular text-[#7C7C7C] mt-4 xl:text-base">
      {subheadText}
    </p>
  );
};

export default Subhead;
