"use client";
import Button from "@/app/components/common/Buttons";
import ModalOverlay from "@/app/components/common/modals/modalOverlay";
import Image from "next/image";
import Link from "next/link";

const PlaceBid = ({
  onCloseBid,
  onPaceBid,
  loading,
  farmlink,
  placeBid,
}: {
  onCloseBid: () => void;
  onPaceBid: () => void;
  loading?: boolean;
  placeBid?: String;
  farmlink?: string;
}) => {
  return (
    <ModalOverlay onClose={onCloseBid}>
      {placeBid === "initial" && (
        <div className="bg-white w-full max-w-[505px] mx-auto rounded-[10px] shadow-lg z-50 p-6">
          <Image
            src="/assets/store-front/placebid.svg"
            width={457}
            height={173}
            alt="placebid"
          />

          <div className="bg-white rounded-br-[10px] rounded-bl-[10px] mt-7 mb-2">
            <h4 className="text-[#252B42] font-aristoBold text-3xl">
              Place Bid?
            </h4>
            <p className="text-sm font-poppinsRegular text-[#5C6C71] mb-10">
              By clicking{" "}
              <span className="text-[#2D865B] font-poppinsSemiBold">
                Confirm Bid
              </span>{" "}
              , a notification will be sent to the farm, letting them know{" "}
              {`you're`} interested in this project. This is your first step in
              securing this opportunity!
              <br />
              Need more info about this project?
              <Link
                href={farmlink || ""}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-[#2D865B] font-poppinsSemiBold">
                  {" "}
                  click here
                </span>
              </Link>
            </p>

            <div className="flex items-center gap-x-4">
              <div className="w-full">
                <Button
                  variant="secondary"
                  className="w-full"
                  onClick={onCloseBid}
                >
                  No, thank you
                </Button>
              </div>

              <Button className="w-full" onClick={onPaceBid}>
                {loading ? "placing bid..." : "Yes, Place Bid"}
              </Button>
            </div>
          </div>
        </div>
      )}

      {placeBid === "success" && (
        <div className=" bg-[white] w-full max-w-[529px] mx-auto rounded-[10px] p-6 shadow-lg z-50">
          <Image
            width={481}
            height={187}
            src="/assets/DashBoard/wallet/success-request.svg"
            alt="deactivate"
          />

          <h4 className="text-3xl font-aristoBold text-[#252B42] mt-6 mb-2 text-center">
            Bid Sent Successfully!{" "}
          </h4>

          <p className="text-sm font-poppinsRegular text-[#5C6C71]">
            The farm has been notified, and you’re now one step closer to
            securing this opportunity. You’ll receive a notification on your
            <Link
              href={"https://farmpady.com/investor-dashboard/"}
              target="_blank"
            >
              <span className="text-[#2D865B] font-poppinsSemiBold">
                {" "}
                dashboard and via email{" "}
              </span>{" "}
            </Link>
            once the farmer approves your bid.
          </p>

          <div className="flex items-center gap-x-4 mt-8">
            <div className="w-full">
              <Button
                variant="secondary"
                className="w-full"
                onClick={onCloseBid}
              >
                Okay, Got it
              </Button>
            </div>

            <div className="w-full">
              <Link
                href={"https://farmpady.com/investor-dashboard/"}
                target="_blank"
              >
                <Button className="w-full">Go to Dashboard</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </ModalOverlay>
  );
};

export default PlaceBid;
