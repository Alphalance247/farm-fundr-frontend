import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

const FarmCardMobile = ({
  viewDetailsLink,
  cac_no,
  status,
  farmName,
  farmerLogo,
  onClickDetails,
}: {
  viewDetailsLink: string;
  farmerLogo: string;
  cac_no: string;
  status: string;
  farmName: string;
  onClickDetails?: () => void;
}) => {
  return (
    <div className="border rounded-2xl bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-2">
          <img
            src={farmerLogo}
            alt={"farmlogo"}
            width={40}
            height={40}
            className="h-[40px] w-[40px] rounded-full"
          />
          <h3 className="text-[#0B222A] font-medium text-sm">{farmName}</h3>
        </div>
        <Link
          href={viewDetailsLink || "/"}
          onClick={onClickDetails}
          className="flex items-center gap-1 text-xs text-[#00C853]"
        >
          View Details <FiChevronRight />
        </Link>
      </div>

      <hr className="border-gray-100" />

      {/* Body */}
      <div className="p-4 bg-[#F6F6F6] m-2 space-y-3">
        <div className="flex items-center  justify-between">
          <p className="text-sm text-[#5F5F5F]">CAC Number</p>
          <p className={`text-[#7C7C7C] text-xs`}>{cac_no}</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">Status</p>
          <span
            className={`inline-block mt-1 px-4 py-2 rounded-full text-sm text-[white]  ${
              status !== "published" ? "bg-[#DEA304]" : "bg-[#00C853]"
            }`}
          >
            {status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FarmCardMobile;
