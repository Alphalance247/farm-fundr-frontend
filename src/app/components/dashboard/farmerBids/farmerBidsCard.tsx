import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import Button from "../../common/Buttons";
import Link from "next/link";

interface bidProps {
  img: string;
  isDeclined?: boolean;
  projectName: string;
  amount: number;
  date: string;
  isAcceptDecline: boolean;
  isAwaitingPayment: boolean;
  name: string;
  onAccept?: () => void;
  onDecline?: () => void;
  awaitText?: string;
  chatUrl?: string;
  isFundReleased?: boolean;
}

const FarmerBidsCard = ({
  projectName,
  isDeclined,
  isAwaitingPayment,
  isAcceptDecline,
  name,
  amount,
  date,
  onAccept,
  onDecline,
  awaitText,
  isFundReleased,
  img,
  chatUrl,
}: bidProps) => {
  return (
    <div>
      <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4">
        <div className="flex justify-between items-start md:flex-col md:gap-2">
          <div className="flex items-center gap-3">
            <Image
              src={img || "/assets/DashBoard/bids/image.png"}
              alt={"name"}
              width={70}
              height={56}
              className="rounded-lg"
            />
            <div className="">
              <h3 className="text-base font-poppinsSemiBold mb-2">
                {projectName}
              </h3>
              <div className="flex items-center gap-2">
                <Image
                  src={"/assets/DashBoard/bids/progile.svg"}
                  alt={"name"}
                  width={24}
                  height={24}
                  className="rounded-lg"
                />
                <p className="text-sm text-gray-500">{name}</p>
              </div>
            </div>
          </div>

          {isDeclined && (
            <p className="bg-[#FCECE6] text-[#DE4204] font-poppinsSemiBold text-xs px-[10px] py-[5px] rounded-lg">
              Declined
            </p>
          )}
        </div>

        <div className="flex gap-2 mt-2 items-center md:flex-col md:items-start">
          <p className="text-[#7C7C7C] lg:text-xs text-sm">
            Bid Amount:{" "}
            <span className="font-poppinsSemiBold text-[#5F5F5F] lg:text-xs text-sm">
              ₦ {amount}
            </span>
          </p>
          <GoDotFill className="text-[#5F5F5F]" />
          <p className="text-[#7C7C7C] text-sm">
            Date:{" "}
            <span className="font-poppinsSemiBold text-[#5F5F5F] text-sm">
              {date}
            </span>
          </p>
        </div>

        <div className="">
          {isAcceptDecline && (
            <div className="flex mt-2 xl:flex-col flex-row gap-3">
              <Button
                variant="primary"
                size="small"
                className="flex-1"
                onClick={onAccept}
              >
                Accept
              </Button>
              <Button
                variant="danger"
                size="small"
                className="flex-1"
                onClick={onDecline}
              >
                Decline
              </Button>
            </div>
          )}

          {isAwaitingPayment && (
            <>
              {isFundReleased ? (
                <Link href={chatUrl || ""} target="__blank">
                  <Button variant="secondary" className="w-full">
                    Drop Update
                  </Button>
                </Link>
              ) : (
                <button
                  className="w-full bg-[#E2E2E2] font-poppinsSemiBold text-sm text-[#5F5F5F] py-4 block rounded-[40px] cursor-not-allowed"
                  disabled
                >
                  {awaitText}
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FarmerBidsCard;
