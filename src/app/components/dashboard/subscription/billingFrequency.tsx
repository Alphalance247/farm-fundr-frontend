"use client";
import { FiCircle } from "react-icons/fi";
import Image from "next/image";
import Input from "../../common/input";
import Button from "../../common/Buttons";
import React, { useState } from "react";
import { MdOutlineRadioButtonChecked } from "react-icons/md";

interface subscriptionTier {
  planType: string;
  prices: string;
  offer: string;
}

interface billingCadenceProps {
  heading: string;
  subhead: string;
  subscriptionTier: subscriptionTier[];
}

const BillingFrequency: React.FC<billingCadenceProps> = ({
  subscriptionTier,
  heading,
  subhead,
}) => {
  const [subType, setSubType] = useState<string>("Pay monthly");
  const [paymentMethod, setPaymentMethod] = useState<string>("paystack");

  const subPrices: { [key: string]: string } = {
    monthly: "1000",
    quarterly: "2000",
  };

  return (
    <main className="px-10 py-8 bg-gray-50 overflow-auto">
      <div className=" mb-4">
        <h2 className="text-xl font-poppinsSemiBold text-[#5F5F5F]">
          {heading}
        </h2>
        <p className=" text-sm font-poppinsRegular text-[#7C7C7C] mt-3">
          {subhead}
        </p>
      </div>
      <div>
        <div className="flex gap-x-4 items-center">
          {subscriptionTier.map((item, i) => (
            <div
              className={`rounded-xl border border-[#E2E2E2] p-2 w-[200px] cursor-pointer  ${
                subType === item?.planType ? "bg-[#EEFEF6]" : "bg-transparent"
              }`}
              onClick={() => setSubType(item?.planType)}
              key={i}
            >
              <div className="flex justify-between mb-2">
                <p className="text-[#7C7C7C] text-sm font-poppinsSemiBold">
                  {item?.planType}
                </p>

                <span>
                  {subType === item?.planType ? (
                    <MdOutlineRadioButtonChecked size={20} color="#2D865B" />
                  ) : (
                    <FiCircle size={20} color="#7C7C7C" />
                  )}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[#5F5F5F] text-lg font-poppinsSemiBold">
                  {item?.prices}
                </p>

                {item?.offer && (
                  <p className="text-[#226646] font-poppinsSemiBold textt-[10px] border py-0 px-2 border-[#C9FCE3] bg-[white] rounded-sm">
                    {item?.offer}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <p className=" font-poppinsSemiBold text-lg text-[#5F5F5F] mb-4">
            Payment Method
          </p>

          <div className="flex items-center gap-x-10">
            <div
              className="flex items-center gap-x-3 cursor-pointer"
              onClick={() => setPaymentMethod("paystack")}
            >
              <span>
                {paymentMethod === "paystack" ? (
                  <MdOutlineRadioButtonChecked size={20} color="#2D865B" />
                ) : (
                  <FiCircle size={20} color="#7C7C7C" />
                )}
              </span>
              <div className="flex items-center">
                <Image
                  width={37}
                  height={37}
                  src="/assets/DashBoard/subscription/paystack.svg"
                  alt="paystack"
                />
                <p className="text-base text-[#5F5F5F] font-medium">
                  Pay with Paystack
                </p>
              </div>
            </div>

            <div
              className="flex items-center gap-x-3 cursor-pointer"
              onClick={() => setPaymentMethod("transfer")}
            >
              <span>
                {paymentMethod === "transfer" ? (
                  <MdOutlineRadioButtonChecked size={20} color="#2D865B" />
                ) : (
                  <FiCircle size={20} color="#7C7C7C" />
                )}
              </span>
              <div>
                <p className="text-base text-[#5F5F5F] font-medium">
                  Generate Virtual Account Number
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <p className=" font-poppinsSemiBold text-lg text-[#5F5F5F] mb-4">
            Payment Method
          </p>

          <div className="">
            <form
              action=""
              className="bg-white rounded-md p-4 w-[50%] flex flex-col gap-y-4"
            >
              <div>
                <label
                  htmlFor="Plan Name"
                  className="text-sm font-poppinsSemiBold text-[#5F5F5F] block mb-2"
                >
                  Plan Name
                </label>
                <Input
                  name="planname"
                  type="text"
                  value="Basic Plan"
                  placeholder=""
                  className=""
                  readonly={true}
                  variant="primary"
                />
              </div>

              <div>
                <label
                  htmlFor="subscription"
                  className="text-sm font-poppinsSemiBold text-[#5F5F5F] block mb-2"
                >
                  Subscription fee
                </label>
                <Input
                  name="subscription"
                  type="text"
                  value={subPrices[subType]}
                  placeholder=""
                  className=""
                  readonly={true}
                  variant="primary"
                />

                <p className="flex items-center mt-2 gap-x-2 font-poppinsRegular text-sm text-[#5F5F5F]">
                  {" "}
                  <span>
                    <FiCircle size={16} color="#5F5F5F" />
                  </span>{" "}
                  One-Time subscription
                </p>
              </div>

              <div className="grid grid-cols-2 gap-x-4">
                <div>
                  <label
                    htmlFor="V.A.T"
                    className="text-sm font-poppinsSemiBold text-[#5F5F5F] block mb-2"
                  >
                    V.A.T
                  </label>
                  <Input
                    name="vat"
                    type="text"
                    value="50"
                    placeholder=""
                    className=""
                    readonly={true}
                    variant="primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="Total"
                    className="text-sm font-poppinsSemiBold text-[#5F5F5F] block mb-2"
                  >
                    Total
                  </label>
                  <Input
                    name="total"
                    type="text"
                    value="10,000"
                    placeholder=""
                    className=""
                    readonly={true}
                    variant="primary"
                  />
                </div>
              </div>

              <div className="mt-4">
                <Button
                  size="medium"
                  className="w-full flex items-center justify-center"
                >
                  <Image
                    width={37}
                    height={37}
                    src="/assets/DashBoard/subscription/paystack.svg"
                    alt="paystack"
                  />
                  Pay with paystack
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BillingFrequency;
