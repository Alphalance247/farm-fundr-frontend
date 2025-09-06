"use client";
import StoreFrontHeading from "../common/storeFrontHeading";
import { color } from "@/app/components/data";
import { useTab } from "@/context/TabContext";
import Button from "../../common/Buttons";
import { useState } from "react";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import axiosInstance from "@/lib/axios";
import { getFarmDetails } from "@/stores/farms/getFarmDetails";
import SocialLinksForm from "../common/socialMediaForm";

const CustomizeStore = () => {
  const { activeTab, setActiveTab } = useTab();
  const { data: farmDetails } = getFarmDetails();
  const farm = farmDetails?.data;
  console.log(setActiveTab);

  const [loading, setIsLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleProfileUpdate = async () => {
    if (!file) {
      toast?.error("Please upload you farm logo");
    } else {
      try {
        setIsLoading(true);
        // Create FormData to handle file upload
        const formData = new FormData();

        if (file) {
          formData.append("logo", file);
        }

        const res = await axiosInstance.patch(
          `farms/${farm?.farm?.id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (res.status === 200) {
          toast.success("Farm logo updated successfully");
          // Refresh user details after successful update
        }

        setIsLoading(false);
      } catch (err) {
        // Extract the error message from the response
        let errorMessage =
          "An error occurred please try again or contact Admin";
        if (err instanceof AxiosError) {
          // Check if err is an instance of AxiosError
          errorMessage = err.response?.data?.statusmessage || errorMessage;
        }

        toast.error(errorMessage);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div>
      <div className="flex justify-between border-b border-[#E4E7EC] pb-3 mb-8 md:flex-col md:gap-y-6">
        <div className="flex flex-col">
          <h3 className="text-sm font-poppinsSemiBold text-[#5F5F5F] mb-3">
            Farm Page Settings
          </h3>
          <p className="text-sm text-[#7C7C7C] font-poppinsRegular">
            Customise your store front to fit your preference
          </p>
        </div>
        <Button
          type="button"
          variant="primary"
          className="w-[160px]"
          onClick={handleProfileUpdate}
        >
          {loading ? "Uploading...." : "Save"}
        </Button>
      </div>

      <div className="flex gap-x-4">
        <StoreFrontHeading
          color={color[activeTab]?.color}
          textColor={color[activeTab]?.textColor}
          badgeColor={color[activeTab]?.badgeColor}
          iconColor={color[activeTab]?.iconColor}
          setFile={setFile}
        />

        {/* <div className="flex flex-col items-center gap-y-[7px] justify-between">
          {color?.map((item, index) => (
            <div
              key={index}
              className={`w-14 h-[52px] ${item?.color} rounded-xl p-1 flex flex-col items-end justify-end cursor-pointer`}
              onClick={() => setActiveTab(index)}
            >
              {activeTab === index && (
                <IoCheckmarkCircle size={16} color="#E9EAE6" fill="#E9EAE6" />
              )}
            </div>
          ))}
        </div> */}
      </div>
      <SocialLinksForm />
    </div>
  );
};

export default CustomizeStore;
