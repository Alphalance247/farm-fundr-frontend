"use client";
import { useRef, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { FaCheckCircle } from "react-icons/fa";
import ModalOverlay from "../../common/modals/modalOverlay";
import Button from "../../common/Buttons";
import Label from "../../common/label";

const PhoeNumberModal = ({ onClose }: { onClose: () => void }) => {
  const [textAuthStep, setTextAuthStep] = useState(1);
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; // Only allow numbers
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Keep only last digit
    setOtp(newOtp);

    // Move to the next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <ModalOverlay onClose={onClose}>
      <div className=" border border-[#E3E3E5] rounded-lg relative z-50 w-[480px] bg-[white] shadow-lg p">
        <div className="">
          <div className="pt-6 pb-4 pl-6 border-b border-[#E3E3E5]">
            <h2
              id="modal-title"
              className="text-lg font-semibold flex items-center gap-x-2"
            >
              {textAuthStep === 3 && (
                <span>
                  <FaCheckCircle fill="#22C55E" size={18} />{" "}
                </span>
              )}
              {textAuthStep === 1
                ? "SVerify your phone number"
                : textAuthStep === 2
                ? "Enter your phone number"
                : " Mobile Phone Verified"}
            </h2>
          </div>
        </div>

        {textAuthStep === 1 && (
          <>
            <div className="p-6">
              <h4 className="text-lg font-poppinsSemiBold text-[#0B222A]">
                Enter the code below
              </h4>
              <p className="text-sm font-poppinsRegular text-[#5C6C71]">
                Enter the verification code we sent to your phone number 234(0)
                81********
              </p>

              <div className="flex gap-2 my-4">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    name="otp"
                    maxLength={1}
                    value={digit}
                    placeholder="-"
                    ref={(el) => {
                      inputRefs.current[index] = el;
                    }}
                    onChange={(e) => handleChange(index, e.target.value)}
                    // onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-full h-12 text-center border rounded-lg text-xl font-bold outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ))}
              </div>
              <p
                className="text-sm font-semibold text-[#454545] underline-offset-2 cursor-pointer underline"
                onClick={() => setTextAuthStep(2)}
              >
                Try a different phone number
              </p>
            </div>

            <div className="flex items-center justify-end gap-x-4 p-4 bg-[#F7F7F7] border-t border-[#E3E3E5] rounded-br-lg rounded-bl-lg">
              <Button variant="secondary" className="w-fit">
                cancel
              </Button>
              <Button className="w-fit" variant="tertiary">
                Confirm Phone Number
              </Button>
            </div>
          </>
        )}

        {textAuthStep === 2 && (
          <>
            <div className="p-6">
              <div>
                <Label>Phone Number</Label>
                <PhoneInput
                  placeholder="(+234) 000-0000"
                  international
                  defaultCountry="NG"
                  required
                  value={""}
                  onChange={() => {}}
                  //   onChange={(value) => setForm({ ...form, phone: value || "" })}
                  className={`${PhoneInput} outline-green-400`}
                  numberInputProps={{
                    className: `outline-none border-[#E0E0E0] bg-[#F6F6F6] border-[1px] text-[#5F5F5F] rounded-tr-md rounded-br-md rounded-tl-none rounded-bl-none text-sm w-[100%] px-3 py-[14px]`,
                  }}
                />
              </div>

              <p className="text-[13px] font-normal text-[#71717A] mt-2">
                By providing your phone number, you agree to receiving text
                messages from Payroll.
              </p>
            </div>

            <div className="flex items-center justify-end gap-x-4 p-4 bg-[#F7F7F7] border-t border-[#E3E3E5] rounded-br-lg rounded-bl-lg">
              <Button variant="secondary" className="w-fit">
                cancel
              </Button>
              <Button className="w-fit" variant="tertiary">
                Confirm Phone Number
              </Button>
            </div>
          </>
        )}

        {textAuthStep === 3 && (
          <>
            <div className="p-6">
              <p className="text-[13px] leading-5 text-[#6B7280] font-medium">
                From now on, you’ll need to enter your password and you’ll be
                asked to verify your identity with a code sent to your mobile
                phone.
              </p>
            </div>

            <div className="flex items-center justify-end gap-x-4 p-4 bg-[#F7F7F7] border-t border-[#E3E3E5] rounded-br-lg rounded-bl-lg">
              <Button className="w-fit">Done</Button>
            </div>
          </>
        )}
      </div>
    </ModalOverlay>
  );
};

export default PhoeNumberModal;
