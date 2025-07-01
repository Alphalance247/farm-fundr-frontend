import Label from "@/app/components/common/label";
import Input from "@/app/components/common/input";
import { projectFormData } from "@/utils/form";
import Button from "@/app/components/common/Buttons";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

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
  return (
    <div>
      <div className="p-6 bg-white mt-6 rounded-lg flex flex-col gap-y-6">
        <div>
          <Label className="">Total Funding</Label>
          <Input
            name="fundingDetails"
            className=""
            type="text"
            value={form?.fundingDetails}
            placeholder="Enter farm size"
            variant="tertiary"
            onChange={(e) =>
              setForm({ ...form, fundingDetails: e.target.value })
            }
          />
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
              placeholder="Enter farm size"
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

        <div className="grid grid-cols-2 gap-x-6">
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

            <option value="Milestones (Every Month)">
              Milestones (Every Month)
            </option>
            <option value="Lump Sum (Once)">Lump Sum (Once)</option>
            <option value="Both">Both</option>
          </select>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
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
          onClick={(e) => {
            e.preventDefault();
            setFormStep(3);
            setCompletedSteps((prev) => [...prev, formStep]);
          }}
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
