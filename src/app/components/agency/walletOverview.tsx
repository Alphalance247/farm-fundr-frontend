import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "../common/Buttons";

const WalletOverview = () => {
  const [hideBalance, setHideBalance] = useState(false);

  return (
    <section className="mt-6 px-6 md:px-4 w-full  h-fit py-8 border border-gray-200 bg-white rounded-2xl space-y-6">
      <div className="flex   justify-center bg-[#EEFEF6] border-[0.75px] text-[#2D865B] rounded-[2.5rem] border-[#2D865B] hover:opacity-[0.8] hover:transition-all hover:duration-500 py-2 px-4 w-fit mx-auto ">
        <label className="flex items-center cursor-pointer">
          <span className="mr-2 text-[#34474E] text-xs">Hide Balance</span>
          <input
            type="checkbox"
            checked={hideBalance}
            onChange={() => setHideBalance(!hideBalance)}
            className="sr-only peer"
          />
          <div className="w-8 h-4 bg-[#D1D1DB] rounded-full peer-checked:bg-[#2D865B] relative transition-colors">
            <div
              className={`absolute top-0.5 left-0.5 h-3 w-3 bg-white rounded-full shadow transition-transform ${
                hideBalance ? "translate-x-4" : ""
              }`}
            />
          </div>
        </label>
      </div>
      <div className="flex flex-col xl:flex-row gap-4 md:flex-col">
        <div className="bg-gradient-to-r w-full from-[#2D865B] to-[#12482F] border-[#C9FCE3] border text-white rounded-xl p-4 ">
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-8">
              <Image
                src="/assets/DashBoard/overview/wallet.svg"
                alt="roi"
                width={45}
                height={45}
              />
            </div>
            <p className="text-sm text-[#FFFFFF]">Wallet Balance</p>
            <p className="text-2xl font-bold">
              {hideBalance ? "*** ***" : `₦ ${"14,000,000"}`}
            </p>
          </div>
        </div>
      </div>
      <div className="text-center w-full">
        <Link href={"/investor-dashboard/wallet"}>
          <Button variant="secondary" className="!w-full">
            Fund Wallet
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default WalletOverview;
