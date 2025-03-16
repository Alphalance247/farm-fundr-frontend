"use client";
import Input from "../common/input";
import Button from "../common/Buttons";
import { GoArrowRight } from "react-icons/go";

const Form = () => {
  const handleChange = () => {
    console.log("nill");
  };
  return (
    <form action="">
      <div>
        <Input
          type="text"
          name="name"
          value=""
          placeholder="Enter your full name"
          onChange={handleChange}
          className="mb-10"
        />

        <Input
          type="text"
          name="name"
          value=""
          placeholder="Enter your email address"
          onChange={handleChange}
          className="mb-10"
        />

        <textarea
          className="text-lg font-poppinsRegular w-full p-4 text-[#7C7C7C] bg-[#EEFEF6] rounded-2xl"
          id="description"
          name="description"
          rows={5}
          required
          placeholder="Type your message"
          //   value={form?.description || ""}
          onChange={handleChange}
        ></textarea>

        <Button
          size="medium"
          variant="tertiary"
          className="flex items-center gap-x-4 justify-center w-[535px] mx-auto mt-12"
        >
          <span>Submit</span>
          <span>
            <GoArrowRight size={24} className="text-black" />
          </span>
        </Button>
      </div>
    </form>
  );
};

export default Form;
