import Button from "./Buttons";

const TabSwitch = () => {
  return (
    <div className="flex bg-[#C9FCE3] rounded-[50px] justify-center gap-x-2 items-center w-fit mx-auto p-2 mt-10 mb-16">
      <Button size="medium" className="">
        Benefits for investors
      </Button>

      <Button
        size="medium"
        variant="null"
        className="border-none text-[#2D865B]"
      >
        Benefits for Farmers
      </Button>
    </div>
  );
};

export default TabSwitch;
