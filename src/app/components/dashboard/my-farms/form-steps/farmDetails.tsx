"use client";
import Label from "@/app/components/common/label";
import Input from "@/app/components/common/input";
import Button from "@/app/components/common/Buttons";
import PhoneInput from "react-phone-number-input";
import { Country, State, ICountry, IState } from "country-state-city";
import { useState, useEffect } from "react";
import { FarmFormData } from "@/utils/form";
import "react-phone-number-input/style.css";
import { FaArrowRightLong } from "react-icons/fa6";

const FarmDetails = ({
  form,
  setForm,
  setFormStep,
  setCompletedSteps,
  formStep,
}: {
  form: FarmFormData;
  setForm: (form: FarmFormData) => void;
  setFormStep: (formStep: number) => void;
  setCompletedSteps: (steps: number[] | ((prev: number[]) => number[])) => void;
  formStep: number;
}) => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [states, setStates] = useState<IState[]>([]);

  // Load countries on component mount
  useEffect(() => {
    const loadCountries = () => {
      const countriesData = Country.getAllCountries();
      setCountries(countriesData);
    };
    loadCountries();
  }, []);

  //   Load states when country changes
  useEffect(() => {
    const loadStates = () => {
      if (form?.country) {
        const statesData = State.getStatesOfCountry(form?.country);
        setStates(statesData);
      }
    };
    loadStates();
  }, [form?.country]);

  console.log(states);

  return (
    <div>
      <div className="p-6 bg-white mt-6 rounded-lg flex flex-col gap-y-6">
        <div>
          <Label className="">farm Name</Label>
          <Input
            name="farmName"
            className=""
            type="text"
            value={form?.farmName || ""}
            placeholder="Enter Your Farm Name"
            variant="tertiary"
            onChange={(e) => setForm({ ...form, farmName: e.target.value })}
          />
        </div>

        <div>
          <Label className="">farm Address</Label>

          <Input
            name="farmAddress"
            className=""
            type="text"
            value={form?.farmAddress}
            placeholder="Enter your Farm address"
            variant="tertiary"
            onChange={(e) => setForm({ ...form, farmAddress: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-2 gap-x-4">
          <div>
            <Label> Country</Label>
            <select
              id="country"
              name="country"
              value={form?.country || ""}
              onChange={(e) => setForm({ ...form, country: e.target.value })}
              className="w-full border bg-[#F6F6F6] focus:ring-[#51F4A6] focus:border-[#51F4A6] border-[#E0E0E0] rounded-md text-sm p-4 focus:outline-none focus:ring-1 text-[#7C7C7C] font-poppinsRegular"
            >
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country.isoCode} value={country.isoCode}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <Label>State Located</Label>
            <select
              id="state"
              name="state"
              value={form?.state || ""}
              onChange={(e) => setForm({ ...form, state: e.target.value })}
              className="w-full border bg-[#F6F6F6] border-[#E0E0E0] text-[#7C7C7C] font-poppinsRegular rounded-md text-sm p-4 focus:outline-none focus:ring-1 focus:ring-[#51F4A6] focus:border-[#51F4A6]"
              disabled={!form?.country}
            >
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state.isoCode} value={state?.name}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <Label>farm Whatsapp Number</Label>
          <PhoneInput
            placeholder="8140686688"
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
      <div className="mt-8">
        <Button
          className="w-full flex items-center justify-center gap-x-4"
          onClick={(e) => {
            e.preventDefault();
            setCompletedSteps((prev) => [...prev, formStep]);
            setFormStep(2);
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

export default FarmDetails;
