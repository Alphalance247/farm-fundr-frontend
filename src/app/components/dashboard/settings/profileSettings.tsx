import Image from "next/image";
import Input from "../../common/input";
import Label from "../../common/label";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Button from "../../common/Buttons";
import SettingHeading from "./common/settingHeading";
import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { getUserDetailsStore } from "@/stores/settings/getUserDetails";

interface UserDetails {
  fullname: string;
  email: string;
  city: string;
  username: string;
  state: string;
  country: string;
  phone: string;
  street_address: string;
  image: string;
  dob: string;
}

const ProfileSettings = ({ UserDetails }: { UserDetails: UserDetails }) => {
  const getImageUrl = (imagePath: string | null | undefined): string | null => {
    if (!imagePath) return null;
    if (imagePath.startsWith("http")) return imagePath;
    return `${imagePath}`;
  };
  const { fetchUserDetails } = getUserDetailsStore();
  const [preview, setPreview] = useState<string | null>(
    getImageUrl(UserDetails?.image)
  );
  const [file, setFile] = useState<File | null>(null);

  const handlePictureUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.size <= 5 * 1024 * 1024) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    } else {
      alert("File must be less than 5MB");
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, [fetchUserDetails]);
  // const userDetails = data?.user_details;
  const [loading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    fullname: UserDetails?.fullname || "",
    email: UserDetails?.email || "",
    city: UserDetails?.city || "",
    username: UserDetails?.username || "",
    state: UserDetails?.state || "",
    country: UserDetails?.country || "",
    phone: UserDetails?.phone || "",
    street_address: UserDetails?.street_address || "",
    dob: UserDetails?.dob || "",
  });

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      // Create FormData to handle file upload
      const formData = new FormData();

      // Append form fields
      Object.entries(form).forEach(([key, value]) => {
        if (value) {
          formData.append(key, value);
        }
      });

      // Append file if selected
      if (file) {
        formData.append("image", file);
      }

      const res = await axiosInstance.patch(
        `accounts/auth/update-profile`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.status === 200) {
        toast.success("Profile update successfully");
        // Refresh user details after successful update
        await fetchUserDetails();
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
    <section className="mt-8">
      <SettingHeading
        heading="Profile Settings"
        subHead="Update your profile and personal details here"
      />

      <div className="mt-8 pb-10 border-b lg:grid-cols-1 lg:gap-4 border-[#E4E7EC] grid grid-cols-[1fr_2fr]">
        <div>
          <h6 className=" font-poppinsSemiBold text-lg text-[#666666]">
            Your Profile Photo
          </h6>
          <p className="text-sm text-[#5F5F5F] font-poppinsRegular mb-6">
            This will be displayed on your profile
          </p>

          <div>
            {preview ? (
              <img
                src={preview || ""}
                height={84}
                width={84}
                alt="profileImage"
                className="ml-8 h-[84px] w-[84px] rounded-full"
              />
            ) : (
              <Image
                src="/assets/settings/profile.png"
                height={84}
                width={84}
                alt="profileImage"
                className="ml-8"
              />
            )}
            <label
              className="mt-4 px-6 py-3 bg-[#51F4A6] rounded-[5px] font-poppinsSemiBold text-sm text-[#282A03] block w-fit lg:w-full lg:text-center cursor-pointer"
              id="image-upload"
            >
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handlePictureUpload}
                className="hidden"
              />
              Upload Image
            </label>
          </div>
        </div>

        <form action="post" onSubmit={handleProfileUpdate}>
          <div className="flex flex-col gap-y-8">
            <div className="grid grid-cols-2 md:grid-cols-1  gap-6">
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

            <div className="grid grid-cols-2 md:grid-cols-1  gap-6">
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

            <div className="grid grid-cols-2 md:grid-cols-1  gap-6">
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

            <div className="grid grid-cols-2  md:grid-cols-1 gap-6">
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

            <div>
              <Label className="block mb-1">Date Of birth</Label>
              <Input
                name="dob"
                className=""
                type="date"
                value={form?.dob || ""}
                placeholder=""
                variant="tertiary"
                onChange={(e) => setForm({ ...form, dob: e.target.value })}
              />
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
