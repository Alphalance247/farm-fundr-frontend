import Label from "@/app/components/common/label";
import Input from "@/app/components/common/input";
import { projectFormData } from "@/utils/form";
import Button from "@/app/components/common/Buttons";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { toast } from "react-hot-toast";
// your code goes here
const FundingDetails = ({
  form,
  setForm,
  setFormStep,
  formStep,
  setCompletedSteps,
}: {
  form: projectFormData;
  setForm: (form: projectFormData) => void;
  setFormStep: (formStep: number) => void;
  setCompletedSteps: (steps: number[] | ((prev: number[]) => number[])) => void;
  formStep: number;
}) => {
  const handleProceed = () => {
    const errors = [];

    if (form?.fundingDetails === "") {
      errors.push("Total Funding is required");
    }
    if (form?.expectedReturn === "") {
      errors.push("Expected Return (ROI) is required");
    }
    if (form?.investmentStart === "") {
      errors.push("Investment Start date is required");
    }
    if (form?.investmentEnd === "") {
      errors.push("Investment End date is required");
    }
    if (form?.paymentType === "") {
      errors.push("Payment Structure is required");
    }
    if (form?.plots === "") {
      errors.push("plots field is required");
    }

    if (errors.length > 0) {
      toast.error(errors.join("\n"));
    } else {
      setFormStep(3);
      setCompletedSteps((prev) => [...prev, formStep]);
    }
  };
  return (
    <div>
      <div className="p-6 md:p-4 bg-white mt-6 rounded-lg flex flex-col gap-y-6">
        <div className="grid grid-cols-2 md:grid-cols-1 gap-x-4 md:gap-4">
          <div>
            <Label className="">Total Funding</Label>
            <Input
              name="fundingDetails"
              className=""
              type="number"
              value={form?.fundingDetails}
              placeholder="Enter total funding"
              variant="tertiary"
              onChange={(e) =>
                setForm({ ...form, fundingDetails: e.target.value })
              }
            />
          </div>

          <div>
            <Label className="">Plots</Label>
            <Input
              name="plots"
              className=""
              type="number"
              value={form?.plots}
              placeholder="Enter number of plots"
              variant="tertiary"
              onChange={(e) => setForm({ ...form, plots: e.target.value })}
            />
          </div>
        </div>

        <div>
          <div>
            <Label className="">Expected Return (ROI)</Label>
            <input
              name="expectedReturn"
              className="w-full bg-[#EEFEF6]"
              min="1"
              max="100"
              type="range"
              value={form?.expectedReturn}
              placeholder="Enter expected return"
              onChange={(e) =>
                setForm({ ...form, expectedReturn: e.target.value })
              }
            />
          </div>

          <div className="flex items-center justify-between mt-3">
            <p className="bg-[#8B8B8B] h-[3px] w-2 rounded-[1px]"></p>
            <div className="flex items-center gap-x-2">
              <p className=" font-poppinsSemiBold text-sm text-[#7C7C7C]">
                ROI%:
              </p>
              <p className="px-3 py-[10px] border border-[#E2E2E2] bg-[#FCFCFC] text-[#5F5F5F] font-poppinsSemiBold text-sm rounded-[20px]">
                {form?.expectedReturn} %
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-1 gap-x-4 md:gap-4">
          <div>
            <Label className="">Investment Start date</Label>
            <Input
              name="investmentStart"
              className=""
              type="date"
              value={form?.investmentStart}
              placeholder="Enter start date"
              variant="tertiary"
              onChange={(e) =>
                setForm({ ...form, investmentStart: e.target.value })
              }
            />
          </div>
          <div>
            <Label className="">Investment End date</Label>
            <Input
              name="investmentEnd"
              className=""
              type="date"
              value={form?.investmentEnd}
              placeholder="Enter end date"
              variant="tertiary"
              onChange={(e) =>
                setForm({ ...form, investmentEnd: e.target.value })
              }
            />
          </div>
        </div>

        <div>
          <Label>Payment Structure</Label>
          <select
            id="paymentType"
            name="paymentType"
            value={form?.paymentType || ""}
            onChange={(e) => setForm({ ...form, paymentType: e.target.value })}
            className="w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-4 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular"
          >
            <option value="">Select type</option>

            <option value="lump sum">Lump Sum (Once)</option>
          </select>
        </div>
      </div>

      <div className="mt-8 flex flex-row md:flex-col md:gap-4 items-center justify-between">
        <Button
          className="w-fit flex items-center justify-center gap-x-4"
          onClick={(e) => {
            e.preventDefault();
            setCompletedSteps((prev) =>
              prev.filter((step) => step !== formStep)
            );
            setFormStep(formStep - 1);
          }}
          variant="secondary"
        >
          <span>
            <FaArrowLeftLong />
          </span>{" "}
          Previous
        </Button>
        <Button
          className="w-fit flex items-center justify-center gap-x-4"
          onClick={handleProceed}
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

export default FundingDetails;
