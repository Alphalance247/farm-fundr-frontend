import Label from "@/app/components/common/label";
import Input from "@/app/components/common/input";
import { grantFormData } from "@/utils/form";
import Button from "@/app/components/common/Buttons";
import { FaArrowRightLong } from "react-icons/fa6";
import toast from "react-hot-toast";

const BasicInformation = ({
  form,
  setForm,
  setFormStep,
  setCompletedSteps,
  formStep,
}: {
  form: grantFormData;
  setForm: (form: grantFormData) => void;
  setFormStep: (formStep: number) => void;
  setCompletedSteps: (steps: number[] | ((prev: number[]) => number[])) => void;
  formStep: number;
}) => {
  const decriptionLength24 = form?.description.trim().length > 24;

  const handleProceed = () => {
    const errors = [];

    if (form?.grant_name === "") {
      errors.push("Grant Name is required");
    }
    if (form?.grant_category === "") {
      errors.push("Select Branch is required");
    }
    if (form?.fund_type === "") {
      errors.push("Project Name is required");
    }

    if (!decriptionLength24) {
      errors.push("Description must be at least 24 characters");
    }

    if (errors.length > 0) {
      toast.error(errors.join("\n"));
    } else {
      setFormStep(2);
      setCompletedSteps((prev) => [...prev, formStep]);
    }
  };

  return (
    <div>
      <div className="p-6 md:p-4 bg-white mt-6 rounded-lg flex flex-col gap-y-6">
        <h3 className="text-3xl font-aristoBold text-[#5F5F5F]">
          Basic Information
        </h3>

        <div>
          <Label className="">Grant Title</Label>
          <Input
            name="grant_name"
            className=""
            type="text"
            value={form?.grant_name}
            placeholder="Grant name"
            variant="tertiary"
            onChange={(e) => setForm({ ...form, grant_name: e.target.value })}
          />
        </div>

        <div>
          <Label>Grant Category</Label>
          <select
            id="grant_category"
            name="grant_category"
            value={form?.grant_category || ""}
            onChange={(e) => {
              setForm({ ...form, grant_category: e.target.value });
            }}
            className="w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-4 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular"
          >
            <option value="">Select field type</option>
            <option key="" value="nill">
              nill
            </option>
          </select>
        </div>

        <div>
          <Label>Funding Type</Label>
          <select
            id="fund_type"
            name="fund_type"
            value={form?.fund_type || ""}
            onChange={(e) => {
              setForm({ ...form, fund_type: e.target.value });
            }}
            className={`w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-4 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular`}
          >
            <option value="">Select branch</option>

            <option key="" value="nill">
              nill
            </option>
          </select>
        </div>

        <div>
          <Label>
            Short Description{" "}
            <span className=" font-poppinsRegular text-[#DE4204] text-sm">
              (Max 250 characters)
            </span>{" "}
          </Label>

          <textarea
            name="description"
            id=""
            value={form?.description || ""}
            cols={20}
            rows={5}
            className="bg-[#F6F6F6] border-[#E2E2E2] border w-full text-[#7C7C7C] rounded-lg text-sm p-4 focus:ring-[#51F4A6]"
            placeholder="Enter description here"
            onChange={(e) => {
              setForm({ ...form, description: e.target.value });
            }}
          ></textarea>
        </div>
      </div>
      <div className="mt-8">
        <Button
          className="w-full flex items-center justify-center gap-x-4"
          onClick={handleProceed}
          type="button"
        >
          Proceed{" "}
          <span>
            <FaArrowRightLong />
          </span>{" "}
        </Button>
      </div>
    </div>
  );
};

export default BasicInformation;
