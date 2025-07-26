"use client";
import Image from "next/image";
import Button from "../common/Buttons";
import { getUserSubStore } from "@/stores/settings/getUserSub";
import { useEffect } from "react";
import Link from "next/link";

const Subsribe = () => {
  const { data, loading, fetchUserSubscription } = getUserSubStore();

  useEffect(() => {
    fetchUserSubscription();
  }, [fetchUserSubscription]);

  return (
    <div className="px-2">
      <div className="bg-[#EAFBFF] border border-[#E4E7EC] rounded-xl px-3 py-6">
        <p className="text-xl font-aristoBold text-[#5F5F5F] capitalize mb-3">
          Subscription status
        </p>

        <div className="bg-[#FCFCFC] border border-[#E4E7EC] rounded-xl p-4 flex flex-col gap-y-4 mb-6">
          <div className="bg-[#BFF4FF] rounded-lg py-[5px] px-[10px] flex justify-between items-center mb-3">
            <p className="text-[#239BB5] font-poppinsSemiBold text-xs">
              {loading ? "loading...." : data?.subscription?.plan?.name}
            </p>
            <Image
              src="/assets/DashBoard/overview/plan.svg"
              width={43}
              height={35}
              alt="note plan"
            />
          </div>
          <p className="text-xs text-[#7C7C7C] font-poppinsRegular">
            Next Sub Date:{" "}
            {loading ? "loading...." : data?.subscription?.next_sub_date}
          </p>
        </div>

        <Link href={"/farmer-dashboard/subscription"}>
          <Button size="medium" className="w-full">
            Upgrade plan
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Subsribe;
