"use client";
import SettingHeading from "./common/settingHeading";
import Label from "../../common/label";
import { useEffect, useState } from "react";
import axiosInstance from "@/lib/axios";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import Input from "../../common/input";
import Button from "../../common/Buttons";
import Image from "next/image";
import BackIcon from "../../common/backIcon";
import ModalOverlay from "../../common/modals/modalOverlay";
import useBoolean from "@/hooks/useBoolean";
import SpinnerModal from "../../common/modals/SpinnerModal";
import { getUserBankStore } from "@/stores/settings/getBankDetails";

interface BankData {
  id: string;
  name: string;
  code: string;
}

const BankDetails = () => {
  const { data, fetchUserBank } = getUserBankStore();

  useEffect(() => {
    fetchUserBank();
  }, [fetchUserBank]);

  const [bankData, setBankData] = useState<BankData[]>([]);
  const [selectedBankCode, setSelectedBankCode] = useState<string | null>(null);
  const [updateOverview, setUpdateOverview] = useState(false);
  const [deleteBankDetails, setDeleteBankDetails] = useState(false);
  const [isRequestingOtp, setIsReuestingOtp, resetRequestingOtp] =
    useBoolean(false);
  const [isSavingBankDetail, setIsSavingBankDetail, resetIsisSavingBankDetail] =
    useBoolean(false);
  const [
    isLoadingBankDetails,
    setLoadingBankDetails,
    resetIsLoadingBankDetails,
  ] = useBoolean(false);
  const [form, setForm] = useState({
    bank_name: "",
    account_number: "",
    account_name: "",
    bank_code: "",
    otp_code: "",
  });

  useEffect(() => {
    if (data?.bank_details) {
      setForm((prev) => ({
        ...prev,
        bank_name: data.bank_details.bank_name || "",
        account_number: data.bank_details.account_number || "",
        account_name: data.bank_details.account_name || "",
      }));
    }
  }, [data]);

  const handleAddBankDetails = async () => {
    try {
      setIsSavingBankDetail();
      const res = await axiosInstance.post(`/farms/banks/account`, {
        ...form,
        bank_code: selectedBankCode,
      });

      if (res.status === 201) {
        toast.success(res.data.statusmessage);
      }
      setForm({
        ...form,
        bank_name: "",
        account_name: "",
        account_number: "",
        otp_code: "",
      });
      resetIsisSavingBankDetail();
    } catch (err) {
      let errorMessage = "An error occurred please try again or contact Admin";
      if (err instanceof AxiosError) {
        errorMessage = err.response?.data?.statusmessage || errorMessage;
      }

      resetIsisSavingBankDetail();
      toast.error(errorMessage);
    }
  };

  useEffect(() => {
    const fetchBank = async () => {
      try {
        const res = await axiosInstance.get(`/farms/banks`);
        const data = res?.data?.banks; // response.data.data

        if (res.status === 200) {
          setBankData(data);
        }
      } catch (err) {
        // Extract the error message from the response
        let errorMessage =
          "An error occurred please try again or contact Admin";
        if (err instanceof AxiosError) {
          // Check if err is an instance of AxiosError
          errorMessage = err.response?.data?.message || errorMessage;
        }

        toast.error(errorMessage);
      }
    };

    fetchBank();
  }, []);

  const handleRequestOtp = async () => {
    try {
      setIsReuestingOtp();
      const res = await axiosInstance.post(`/farms/banks/send-otp`); //investment

      if (res.status === 200) {
        toast.success(res.data.statusmessage);
      }
      resetRequestingOtp();
    } catch (err) {
      let errorMessage = "An error occurred please try again or contact Admin";
      if (err instanceof AxiosError) {
        errorMessage = err.response?.data?.statusmessage || errorMessage;
      }

      resetRequestingOtp();
      toast.error(errorMessage);
    }
  };

  const handleAccountNumberChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (value.length === 10) {
      try {
        setLoadingBankDetails();
        const res = await axiosInstance.post(
          `/farms/banks/verify-account-number`,
          {
            account_number: value,
            bank_code: selectedBankCode,
          }
        );
        const data = res?.data; // response.data.data

        if (res.status === 200) {
          setForm((prev) => ({
            ...prev,
            account_name: data?.account?.account_name,
          }));
          toast.success(res.data.statusmessage);
        }
        resetIsLoadingBankDetails();
      } catch (err) {
        let errorMessage =
          "An error occurred please try again or contact Admin";
        if (err instanceof AxiosError) {
          errorMessage = err.response?.data?.statusmessage || errorMessage;
        }

        resetIsLoadingBankDetails();
        toast.error(errorMessage);
      }
    }
  };

  // Check if user has bank details
  // const hasBankDetails =
  //   data?.bank_details?.account_name &&
  //   data?.bank_details?.account_number &&
  //   data?.bank_details?.bank_name;

  return (
    <section className="mt-8 pb-8 border-b">
      {isLoadingBankDetails && (
        <SpinnerModal onClose={() => {}} message="Verifying Bank Details" />
      )}
      {deleteBankDetails ? (
        <ModalOverlay
          onClose={() => {
            setDeleteBankDetails(false);
          }}
        >
          <div className="bg-white w-full max-w-[600px] mx-auto rounded-[10px] shadow-lg z-50">
            <div className="py-4 px-8 bg-[#EEFEF6]  rounded-tr-[10px] rounded-tl-[10px] flex items-center justify-between">
              <div className="flex items-center gap-x-4">
                <Image
                  src="/assets/DashBoard/wallet/deactivate.svg"
                  width={40}
                  height={40}
                  alt="deactivate"
                />

                <h4 className="text-lg font-poppinsSemiBold text-[#0B222A]">
                  Remove Bank?
                </h4>
              </div>

              <BackIcon onCloseLink={() => setDeleteBankDetails(false)} />
            </div>

            <div className="px-8 py-6 bg-white rounded-br-[10px] rounded-bl-[10px]">
              <p className="text-sm font-poppinsRegular text-[#5C6C71] mb-10">
                Are you sure you want to remove this bank? This action cannot be
                undone.
              </p>

              <div className="flex items-center gap-x-4">
                <div className="w-full">
                  <Button
                    variant="secondary"
                    className="w-full"
                    type="button"
                    onClick={() => {
                      setDeleteBankDetails(false);
                    }}
                  >
                    No, Cancel
                  </Button>
                </div>

                <Button
                  className="w-full"
                  // onClick={() => setPayOutSuccess("success")}
                  variant="dangerSecondary"
                >
                  Yes, Remove
                </Button>
              </div>
            </div>
          </div>
        </ModalOverlay>
      ) : (
        ""
      )}
      <SettingHeading
        heading="Bank Details"
        subHead="Update your bank details to receive payment"
      />

      {updateOverview ? (
        <div className="w-[50%] xl:w-full mx-auto pt-8">
          <div className="border border-[#E2E2E2] p-6 flex flex-row xl:flex-col lg:gap-4 justify-between xl:gap-8 gap-x-8 items-center xl:items-start  md:items-center rounded-xl">
            <div className="flex gap-x-6 flex-row  xl:items-center md:flex-col lg:gap-y-6 items-center">
              <Image
                width={102}
                height={98}
                src={"/assets/settings/image.png"}
                alt="bank image"
                // className="w-full"
              />
              <div>
                <p className="text-sm text-[#5F5F5F] font-poppinsSemiBold">
                  {form?.bank_name}
                </p>
                <p className="text-sm font-poppinsRegular text-[#7C7C7C]">
                  {form?.account_name}
                </p>
                <p className="text-sm font-poppinsRegular text-[#7C7C7C]">
                  {form?.account_number}
                </p>
              </div>
            </div>

            <div className="flex flex-col xl:flex-row xl:gap-3 xl:justify-between gap-y-3">
              <Button
                variant="subprimary"
                type="button"
                onClick={() => {
                  setUpdateOverview(false);
                }}
              >
                Update Bank
              </Button>
              <Button
                variant="danger"
                onClick={() => setDeleteBankDetails(true)}
              >
                Remove
              </Button>
            </div>
          </div>

          <div className="mt-10 text-right">
            <Button
              className="w-[211px] "
              type="button"
              onClick={handleAddBankDetails}
            >
              {isSavingBankDetail ? "saving......" : "Save Changes"}
            </Button>
          </div>
        </div>
      ) : (
        <div className="w-[60%] lg:w-full mx-auto pt-8 flex flex-col gap-y-5 ">
          <div>
            <Label id="bank-name" className="block mb-1">
              Bank Name
            </Label>

            <select
              id="bank-name"
              name="bank_name"
              value={form?.bank_name || ""}
              onChange={(e) => {
                const selectedBank = bankData.find(
                  (bank) => bank.name === e.target.value
                );
                setSelectedBankCode(selectedBank?.code || null);
                setForm((prev) => ({
                  ...prev,
                  bank_name: e.target.value,
                }));
              }}
              className="w-full border border-[#CECECE] bg-[#F6F6F6] rounded-md text-sm px-3 py-[14px] focus:outline-none focus:ring-1 focus:ring-[#E37915] focus:border-[#E37915]"
            >
              <option value="">Select Bank</option>
              {bankData?.map((el) => (
                <option
                  key={el?.id}
                  value={el?.name}
                  onClick={() => setSelectedBankCode(el?.code)}
                >
                  {el?.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <Label className="block mb-1">Enter account number</Label>
            <Input
              name="account_number"
              className={`${
                !form?.bank_name ? "cursor-not-allowed opacity-70" : ""
              }`}
              type="number"
              value={form?.account_number || ""}
              placeholder=""
              variant="tertiary"
              onChange={handleAccountNumberChange}
              disabled={!form?.bank_name}
            />

            <div className="mt-2">
              <Input
                type="text"
                placeholder=""
                className=""
                name="account_name"
                readonly={true}
                value={form?.account_name || "Account Name"}
              />
            </div>
          </div>

          <Button
            variant={
              !form?.bank_name || !form?.account_number ? "search" : "tertiary"
            }
            disabled={!form?.bank_name || !form?.account_number}
            className={`w-full ${
              !form?.bank_name || !form?.account_number
                ? "cursor-not-allowed opacity-60"
                : ""
            }`}
            onClick={handleRequestOtp}
          >
            {isRequestingOtp ? "requesting......." : "Click to request OTP"}
          </Button>

          <div>
            <Label className="block mb-1">OTP</Label>
            <Input
              name="otp_code"
              className=""
              type="text"
              value={form?.otp_code || ""}
              placeholder="Enter OTP"
              variant="tertiary"
              onChange={(e) => setForm({ ...form, otp_code: e.target.value })}
            />
          </div>
          <div className="text-right mt-3">
            <Button
              variant={
                !form?.bank_name || !form?.account_number || !form?.otp_code
                  ? "search"
                  : "primary"
              }
              disabled={!form?.bank_name || !form?.account_number}
              className={`w-[211px] ${
                !form?.bank_name || !form?.account_number
                  ? "cursor-not-allowed opacity-60"
                  : ""
              }`}
              onClick={() => setUpdateOverview(true)}
              type="button"
            >
              Add bank
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default BankDetails;
