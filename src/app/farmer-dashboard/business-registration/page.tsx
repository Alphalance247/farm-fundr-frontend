"use client";
import { useState } from "react";
import DashboardLayout from "../../components/common/dashboardLayout";
import GoBackBtn from "../../components/common/goBack";
import Label from "../../components/common/label";
import Input from "../../components/common/input";
import Button from "../../components/common/Buttons";
import { FaArrowRightLong } from "react-icons/fa6";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const BusinessRegistration = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    country: "Nigeria",
    businessName: "FarmPady"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveAndContinue = () => {
    const errors = [];

    if (!formData.country) {
      errors.push("Country selection is required");
    }
    if (!formData.businessName.trim()) {
      errors.push("Business name is required");
    }

    if (errors.length > 0) {
      toast.error(errors.join("\n"));
    } else {
      toast.success("Business registration details saved successfully!");
      // Navigate to step 1 of the business registration process
      router.push("/farmer-dashboard/business-registration/step-1");
    }
  };

  return (
    <DashboardLayout>
      <main className="px-10 py-8 bg-gray-50 overflow-auto pb-12">
        <div className="mb-6">
          <GoBackBtn href="/farmer-dashboard" />
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-aristoBold text-[#303030] mb-2">
              Hello Farmer Michael, Tell Us About Your Business
            </h1>
            <p className="text-sm text-[#7C7C7C] font-poppinsRegular">
              Please tell us a little about the type of business you run
            </p>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <div className="bg-[#EEFEF6] rounded-lg p-6 mb-8 border border-[#226646]">
              <h3 className="text-xl font-aristoBold text-[#5F5F5F] mb-3">
                Business Registration
              </h3>
              <p className="text-sm text-[#7C7C7C] leading-normal font-poppinsRegular mb-4">
                A business name is the name under which a business operates and
                is registered. It serves as the legal identity of the business
                entity and is used for official purposes such as contracts,
                banking, and regulatory compliance. The Companies and Allied
                Matters Act (CAMA) 2020 governs business registration in
                Nigeria.
              </p>
              <Button variant="subprimary" size="small" className="text-sm">
                Read More
              </Button>
            </div>

            <div>
              <div className="space-y-6">
                <div>
                  <Label>
                    Where Do You Want To Incorporate This Farm Business?
                  </Label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-4 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular"
                  >
                    <option value="Nigeria">Nigeria</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Kenya">Kenya</option>
                    <option value="South Africa">South Africa</option>
                  </select>
                </div>

                <div>
                  <Label>Proposed Farm Business Name</Label>
                  <Input
                    name="businessName"
                    type="text"
                    value={formData.businessName}
                    placeholder="Enter your farm business name"
                    variant="tertiary"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center mt-8">
            <Button
              variant="primary"
              size="medium"
              onClick={handleSaveAndContinue}
              className="flex items-center justify-center gap-2 w-full"
            >
              Save And Continue
              <FaArrowRightLong size={16} />
            </Button>
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
};

export default BusinessRegistration;
