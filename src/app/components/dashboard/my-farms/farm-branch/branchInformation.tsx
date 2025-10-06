"use client";
import Label from "@/app/components/common/label";
import Input from "@/app/components/common/input";
import { branchFormData } from "@/utils/form";
import Button from "@/app/components/common/Buttons";
import { FaArrowRightLong } from "react-icons/fa6";
import { toast } from "react-hot-toast";
import { getFarmListStore } from "@/stores/farms/getFarmList";
import { useEffect } from "react";

const BranchInformation = ({
  form,
  setForm,
  setFormStep,
  setCompletedSteps,
  formStep,
  setSelectedFarmId,
}: {
  form: branchFormData;
  setForm: (form: branchFormData) => void;
  setFormStep: (formStep: number) => void;
  setSelectedFarmId: (selectedFarmId: string) => void;
  setCompletedSteps: (steps: number[] | ((prev: number[]) => number[])) => void;
  formStep: number;
}) => {
  const decriptionLength24 = form?.description.trim().length > 24;

  const { data: farmList, loading, fetchFarmList } = getFarmListStore();

  useEffect(() => {
    fetchFarmList();
  }, [fetchFarmList]);

  const farmListData = farmList?.results?.farms || [];

  const handleProceed = () => {
    const errors = [];

    if (form?.selectFarm === "") {
      errors.push("Select Farm is required");
    }
    if (form?.branchName === "") {
      errors.push("Branch Name is required");
    }
    if (form?.branchAddress === "") {
      errors.push("Branch Address is required");
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
        <div>
          <Label>Select Farm</Label>
          <select
            id="selectFarm"
            name="selectFarm"
            value={form?.selectFarm || ""}
            onChange={(e) => {
              setSelectedFarmId(e.target.value);
              setForm({ ...form, selectFarm: e.target.value });
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
          <Label className="">Branch Name</Label>
          <Input
            name="branchName"
            className=""
            type="text"
            value={form?.branchName}
            placeholder="Enter Branch Name"
            variant="tertiary"
            onChange={(e) => setForm({ ...form, branchName: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-1 md:gap-4 gap-x-4">
          <div>
            <Label className="">State</Label>
            <Input
              name="state"
              className=""
              type="text"
              value={form?.state || ""}
              placeholder="Enter farm state"
              variant="tertiary"
              onChange={(e) => setForm({ ...form, state: e.target.value })}
            />
          </div>

          <div>
            <Label className="">City</Label>
            <Input
              name="city"
              className=""
              type="text"
              value={form?.city || ""}
              placeholder="Enter farm city"
              variant="tertiary"
              onChange={(e) => setForm({ ...form, city: e.target.value })}
            />
          </div>
        </div>

        <div>
          <Label className="">Branch Address</Label>
          <Input
            name="branchAddress"
            className=""
            type="text"
            value={form?.branchAddress}
            placeholder="Enter farm size"
            variant="tertiary"
            onChange={(e) =>
              setForm({ ...form, branchAddress: e.target.value })
            }
          />
        </div>

        <div>
          <Label>Description</Label>

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
          type="button"
          onClick={() => {
            handleProceed();
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

export default BranchInformation;
