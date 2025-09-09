import SettingHeading from "./common/settingHeading";
import Input from "../../common/input";
import Label from "../../common/label";
import { useState } from "react";
import Button from "../../common/Buttons";
import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { getUserDetailsStore } from "@/stores/settings/getUserDetails";

export default function Certifications() {
  const { data } = getUserDetailsStore();
  const userDetails = data?.user_details;
  const [form, setForm] = useState({
    highest_education: userDetails?.highest_education || "",
    university: userDetails?.university || "",
    years_of_exp:userDetails?.years_of_exp || ''
  });
  const [loading, setIsLoading] = useState(false);
  const handleCertificationUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await axiosInstance.patch(`accounts/auth/update-profile`, {
        ...form,
      });

      if (res.status === 200 || res.status === 201) {
        toast.success("Profile update successfully");
      }
   
      setIsLoading(false);
    } catch (err) {
      // Extract the error message from the response
      let errorMessage = "An error occurred please try again or contact Admin";
      if (err instanceof AxiosError) {
        // Check if err is an instance of AxiosError
        errorMessage = err.response?.data?.statusmessage || errorMessage;
      }

      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section className="mt-8 pb-12">
      <SettingHeading
        heading="Profile Settings"
        subHead="Update your profile and personal details here"
      />

      <div className="mt-8 pb-10 border-b border-[#E4E7EC] w-[55%] lg:w-full mx-auto">
        <form action="post" onSubmit={handleCertificationUpdate}>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <Label className="block mb-1">Degree</Label>
              <Input
                name="degree"
                className=""
                type="text"
                value={form?.highest_education || ""}
                placeholder="Enter your highest degree"
                variant="tertiary"
                onChange={(e) =>
                  setForm({ ...form, highest_education: e.target.value })
                }
              />
            </div>

            <div>
              <Label className="mb-1 block">
                University You Graduated from?
              </Label>

              <Input
                name="university"
                className=""
                type="text"
                value={form?.university}
                placeholder="Enter university name"
                variant="tertiary"
                onChange={(e) =>
                  setForm({ ...form, university: e.target.value })
                }
              />
            </div>

            <div>
              <Label className="mb-1 block">
               Years of Experience
              </Label>

              <Input
                name="years_of_exp"
                className=""
                type="number"
                value={form?.years_of_exp}
                placeholder=""
                variant="tertiary"
                onChange={(e) =>
                  setForm({ ...form, years_of_exp: e.target.value })
                }
              />
            </div>
          </div>

          <div className="text-right mt-10">
            <Button className="w-[211px] md:w-full" type="submit">
              {loading ? "Uploading..." : "Save Changes"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
