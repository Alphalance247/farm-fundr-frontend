import Link from "next/link";
import Image from "next/image";
import Button from "../Buttons";

const RequestPayoutModal = ({
  title,
  description,
  link,
  img,
}: {
  title: string;
  description: string;
  link: string;
  img: string;
}) => {
  return (
    <div className=" bg-[white] w-full max-w-[529px] mx-auto rounded-[10px] p-6 shadow-lg z-50">
      <Image width={481} height={187} src={img || ""} alt="deactivate" />

      <h4 className="text-3xl font-aristoBold text-[#252B42] mt-6 text-center">
        {title}
      </h4>

      <div
        className={`mt-3  p-3 border border-[#51F4A6] rounded-lg ${
          title === "Payout request failed!"
            ? "border-[#FFB2B1] bg-[#FFE6E6]"
            : "border-[#51F4A6] bg-[#EEFEF6]"
        }`}
      >
        <p className="text-sm font-poppinsSemiBold text-[#5F5F5F] mb-2">
          {title === "Payout request failed!" ? "What Happened?" : "What Next?"}
        </p>
        <p className="text-[#7C7C7C] text-sm font-poppinsRegular">
          {description}
        </p>
      </div>

      <Link href={link || ""}>
        <div className="mt-8">
          <Button className="w-full">Okay, Thank you</Button>
        </div>
      </Link>
    </div>
  );
};

export default RequestPayoutModal;
