import Label from "@/app/components/common/label";
import Input from "@/app/components/common/input";
import { projectFormData } from "@/utils/form";
import Button from "@/app/components/common/Buttons";
import { FaArrowRightLong } from "react-icons/fa6";

const ProjectInformation = ({
  form,
  setForm,
  setFormStep,
  setCompletedSteps,
  formStep,
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
          <Label>Select Farm</Label>
          <select
            id="selectFarm"
            name="selectFarm"
            value={form?.selectFarm || ""}
            onChange={(e) => setForm({ ...form, selectFarm: e.target.value })}
            className="w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-4 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular"
          >
            <option value="">Select field type</option>

            <option value="Garden Apple farm">Garden Apple farm</option>
            <option value="Concept Cashew Farm">Concept Cashew Farm</option>
            <option value="Mavel Farm">Mavel Farm</option>
          </select>
        </div>

        <div>
          <Label>Select Branch</Label>
          <select
            id="selectBranch"
            name="selectBranch"
            value={form?.selectBranch || ""}
            onChange={(e) => setForm({ ...form, selectBranch: e.target.value })}
            className="w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-4 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular"
          >
            <option value="">Select branch</option>

            <option value="Lagos Branch">Lagos Branch</option>
            <option value="Ibadan Branch">Ibadan Branch</option>
            <option value="Ikeja Branch">Ikeja Branch</option>
          </select>
        </div>

        <div>
          <Label className="">project Name</Label>
          <Input
            name="projectName"
            className=""
            type="text"
            value={form?.projectName}
            placeholder="Enter farm size"
            variant="tertiary"
            onChange={(e) => setForm({ ...form, projectName: e.target.value })}
          />
        </div>

        <div>
          <Label>Project Type</Label>
          <select
            id="projectType"
            name="projectType"
            value={form?.projectType || ""}
            onChange={(e) => setForm({ ...form, projectType: e.target.value })}
            className="w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-4 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular"
          >
            <option value="">Select branch</option>

            <option value="Lagos Branch">Crop</option>
            <option value="Livestock">Livestock</option>
          </select>
        </div>

        <div>
          <Label>About Project</Label>

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
          onClick={(e) => {
            e.preventDefault();
            setFormStep(2);
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

export default ProjectInformation;
