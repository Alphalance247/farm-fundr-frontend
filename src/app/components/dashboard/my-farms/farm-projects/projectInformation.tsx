import Label from "@/app/components/common/label";
import Input from "@/app/components/common/input";
import { projectFormData } from "@/utils/form";
import Button from "@/app/components/common/Buttons";
import { FaArrowRightLong } from "react-icons/fa6";
import { getFarmListStore } from "@/stores/farms/getFarmList";
import { getBranchListStore } from "@/stores/farms/getBranchList";
import { useEffect } from "react";
import toast from "react-hot-toast";

const ProjectInformation = ({
  form,
  setForm,
  setFormStep,
  setCompletedSteps,
  formStep,
  setSelectedFarmId,
  selectedFarmId,
  setSelectedBranchId,
}: {
  form: projectFormData;
  selectedFarmId: string;
  setForm: (form: projectFormData) => void;
  setFormStep: (formStep: number) => void;
  setCompletedSteps: (steps: number[] | ((prev: number[]) => number[])) => void;
  formStep: number;
  setSelectedFarmId: (selectedFarmId: string) => void;
  setSelectedBranchId: (selectedBranchId: string) => void;
}) => {
  const decriptionLength24 = form?.description.trim().length > 24;

  const { data: farmList, loading, fetchFarmList } = getFarmListStore();
  const { fetchBranchList, data: branchList } = getBranchListStore();
  const farmListData = farmList?.results?.farms || [];
  const farmBranchData = branchList?.results?.data || [];

  useEffect(() => {
    fetchFarmList();
  }, [fetchFarmList]);

  useEffect(() => {
    if (selectedFarmId) {
      fetchBranchList(selectedFarmId);
    }
  }, [selectedFarmId, fetchBranchList]);

  const handleProceed = () => {
    const errors = [];

    if (form?.selectFarm === "") {
      errors.push("Select Farm is required");
    }
    if (form?.selectBranch === "") {
      errors.push("Select Branch is required");
    }
    if (form?.projectName === "") {
      errors.push("Project Name is required");
    }
    if (form?.projectType === "") {
      errors.push("Project Type is required");
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
      <div className="p-6 bg-white mt-6 rounded-lg flex flex-col gap-y-6">
        <div>
          <Label>Select Farm</Label>
          <select
            id="selectFarm"
            name="selectFarm"
            value={form?.selectFarm || ""}
            onChange={(e) => {
              setForm({ ...form, selectFarm: e.target.value });
              setSelectedFarmId(e.target.value);
            }}
            className="w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-4 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular"
          >
            <option value="">Select field type</option>

            {loading ? (
              <option value="" disabled>
                Loading farms...
              </option>
            ) : (
              farmListData.map((farm) => (
                <option key={farm.id} value={farm.id}>
                  {farm.name}
                </option>
              ))
            )}
          </select>
        </div>

        <div>
          <Label>Select Branch</Label>
          <select
            id="selectBranch"
            name="selectBranch"
            value={form?.selectBranch || ""}
            onChange={(e) => {
              setForm({ ...form, selectBranch: e.target.value });
              // Set the selected branch ID when a branch is selected
              setSelectedBranchId(e.target.value);
            }}
            className={`w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-4 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular ${
              !selectedFarmId ? "cursor-not-allowed " : ""
            }`}
            disabled={!selectedFarmId}
          >
            <option value="">Select branch</option>
            {loading ? (
              <option value="" disabled>
                Loading branch...
              </option>
            ) : (
              farmBranchData.map((farm) => (
                <option key={farm.id} value={farm.id}>
                  {farm.name}
                </option>
              ))
            )}
          </select>
        </div>

        <div>
          <Label className="">project Name</Label>
          <Input
            name="projectName"
            className=""
            type="text"
            value={form?.projectName}
            placeholder="Enter project name"
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
            <option value="">Select type</option>

            <option value="crop">Crop</option>
            <option value="livestock">Livestock</option>
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

export default ProjectInformation;
