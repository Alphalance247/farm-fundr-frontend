"use client";
import Input from "../../common/input";
import { MdEdit } from "react-icons/md";

interface formData {
  instagram: string;
  linkedin: string;
  facebook: string;
  x: string;
}

const SocialLinksForm = ({
  form,
  setForm,
}: {
  form: formData;
  setForm: (form: formData) => void;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="flex mt-8 flex-col gap-6">
      {/* <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <label className="text-[#5F5F5F] font-poppinsSemiBold text-sm">
            Address
          </label>
          <button className="flex items-center text-[#009254] text-sm font-poppinsSemiBold">
            Change <MdEdit className="ml-1" size={14} />
          </button>
        </div>
        <Input
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          variant="primary"
          readonly
        />
      </div> */}
      <p className="text-center font-poppinsSemiBold text-base text-[#5F5F5F]">
        Social Link
      </p>

      <div className="grid grid-cols-4 gap-8 lg:grid-cols-2 md:grid-cols-1">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <label className="text-[#5F5F5F] font-poppinsSemiBold text-sm">
              Instagram
            </label>
            <button className="flex items-center text-[#009254] text-sm font-poppinsSemiBold">
              Change <MdEdit className="ml-1" size={14} />
            </button>
          </div>
          <Input
            type="url"
            name="instagram"
            value={form.instagram}
            placeholder="Enter Link"
            onChange={handleChange}
            variant="primary"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <label className="text-[#5F5F5F] font-poppinsSemiBold text-sm">
              Linkedin
            </label>
            <button className="flex items-center text-[#009254] text-sm font-poppinsSemiBold">
              Change <MdEdit className="ml-1" size={14} />
            </button>
          </div>
          <Input
            type="url"
            name="linkedin"
            value={form.linkedin}
            placeholder="Enter Link"
            onChange={handleChange}
            variant="primary"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <label className="text-[#5F5F5F] font-poppinsSemiBold text-sm">
              Facebook
            </label>
            <button className="flex items-center text-[#009254] text-sm font-poppinsSemiBold">
              Change <MdEdit className="ml-1" size={14} />
            </button>
          </div>
          <Input
            type="url"
            name="facebook"
            value={form.facebook}
            placeholder="Enter Link"
            onChange={handleChange}
            variant="primary"
          />
        </div>

        {/* X */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <label className="text-[#5F5F5F] font-poppinsSemiBold text-sm">
              X
            </label>
            <button className="flex items-center text-[#009254] text-sm font-poppinsSemiBold">
              Change <MdEdit className="ml-1" size={14} />
            </button>
          </div>
          <Input
            type="url"
            name="x"
            value={form.x}
            placeholder="Enter Link"
            onChange={handleChange}
            variant="primary"
          />
        </div>
      </div>
    </div>
  );
};

export default SocialLinksForm;
