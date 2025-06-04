import Label from "@/app/components/common/label";
import Input from "@/app/components/common/input";
import { projectFormData } from "@/utils/form";
import Button from "@/app/components/common/Buttons";
import { FaArrowRightLong } from "react-icons/fa6";

const FundingDetails = ({
  form,
  setForm,
  setFormStep,
}: {
  form: projectFormData;
  setForm: (form: projectFormData) => void;
  setFormStep: (formStep: number) => void;
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

      <div className="mt-8">
        <Button
          className="w-full flex items-center justify-center gap-x-4"
          onClick={(e) => {
            e.preventDefault();
            setFormStep(3);
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
