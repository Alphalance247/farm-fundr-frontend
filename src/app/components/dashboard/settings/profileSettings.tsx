import Image from "next/image";
import Input from "../../common/input";
import Label from "../../common/label";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Button from "../../common/Buttons";
import SettingHeading from "./common/settingHeading";
import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { getUserDetailsStore } from "@/stores/settings/getUserDetails";

const ProfileSettings = () => {
  const { data } = getUserDetailsStore();
  const userDetails = data?.user_details;
  const [loading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    fullname: userDetails?.first_name || "",
    email: userDetails?.email || "",
    city: userDetails?.city || "",
    username: userDetails?.username || "",
    state: userDetails?.state || "",
    country: userDetails?.country || "",
    phone: userDetails?.phone || "",
    street_address: userDetails?.street_address || "",
  });

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await axiosInstance.patch(`accounts/auth/update-profile`, {
        ...form,
      });

      if (res.status === 200) {
        toast.success("Profile update successfully");
      }
      setForm({
        ...form,
        city: "",
        state: "",
        fullname: "",
        username: "",
        street_address: "",
        phone: "",
        country: "",
        email: "",
      });
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
    <section className="mt-8">
      <SettingHeading
        heading="Profile Settings"
        subHead="Update your profile and personal details here"
      />

      <div className="mt-8 pb-10 border-b border-[#E4E7EC] grid grid-cols-[1fr_2fr]">
        <div>
          <h6 className=" font-poppinsSemiBold text-lg text-[#666666]">
            Your Profile Photo
          </h6>
          <p className="text-sm text-[#5F5F5F] font-poppinsRegular mb-6">
            This will be displayed on your profile
          </p>

          <div>
            <Image
              src="/assets/settings/profile.png"
              height={84}
              width={84}
              alt="profileImage"
              className="ml-8"
            />
            <button className="mt-4 px-6 py-3 bg-[#51F4A6] rounded-[5px] font-poppinsSemiBold text-sm text-[#282A03]">
              Upload Image
            </button>
          </div>
        </div>

        <form action="post" onSubmit={handleProfileUpdate}>
          <div className="flex flex-col gap-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <Label className="block mb-1">Full Name </Label>
                <Input
                  name="fullname"
                  className=""
                  type="text"
                  value={form?.fullname || ""}
                  placeholder="Enter Your First Name"
                  variant="tertiary"
                  onChange={(e) =>
                    setForm({ ...form, fullname: e.target.value })
                  }
                />
              </div>

              <div>
                <Label className="mb-1 block">Username</Label>

                <Input
                  name="username"
                  className=""
                  type="text"
                  value={form?.username}
                  placeholder="Enter username"
                  variant="tertiary"
                  onChange={(e) =>
                    setForm({ ...form, username: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <Label className="block mb-1">Email Address</Label>
                <Input
                  name="email"
                  className=""
                  type="text"
                  value={form?.email || ""}
                  placeholder="farmpady@gmail.com"
                  variant="tertiary"
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              <div>
                <Label>Phone Number</Label>
                <PhoneInput
                  placeholder="Enter Phone Number"
                  international
                  defaultCountry="NG"
                  required
                  value={form?.phone || ""}
                  onChange={(value) => setForm({ ...form, phone: value || "" })}
                  className={`${PhoneInput} outline-green-400`}
                  numberInputProps={{
                    className: `outline-none border-[#E0E0E0] bg-[#F6F6F6] border-[1px] text-[#5F5F5F] rounded-tr-md rounded-br-md rounded-tl-none rounded-bl-none text-sm w-[100%] px-3 py-[14px]`,
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <Label className="block mb-1">Street Address</Label>
                <Input
                  name="address"
                  className=""
                  type="text"
                  value={form?.street_address || ""}
                  placeholder="Enter street address"
                  variant="tertiary"
                  onChange={(e) =>
                    setForm({ ...form, street_address: e.target.value })
                  }
                />
              </div>

              <div>
                <Label className="block mb-1">City</Label>
                <Input
                  name="address"
                  className=""
                  type="text"
                  value={form?.city || ""}
                  placeholder="Enter city"
                  variant="tertiary"
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <Label className="block mb-1">State</Label>
                <Input
                  name="state"
                  className=""
                  type="text"
                  value={form?.state || ""}
                  placeholder="Enter state"
                  variant="tertiary"
                  onChange={(e) => setForm({ ...form, state: e.target.value })}
                />
              </div>

              <div>
                <Label className="block mb-1">Country</Label>
                <Input
                  name="country"
                  className=""
                  type="text"
                  value={form?.country || ""}
                  placeholder="Enter country"
                  variant="tertiary"
                  onChange={(e) =>
                    setForm({ ...form, country: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <div className="text-right">
            <Button variant="primary" className="w-[211px] mt-10" type="submit">
              {loading ? "Updating..." : "Update"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ProfileSettings;
