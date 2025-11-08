import ModalOverlay from "../../common/modals/modalOverlay";
import { FaRegTimesCircle } from "react-icons/fa";

const WalletDetails = ({ onCloseModal }: { onCloseModal: () => void }) => {
  const data = [
    {
      head: "Transaction ID",
      subhead: "TRD-20240226",
    },
    {
      head: "Status",
      status: "Paid",
    },
    {
      head: "Type",
      subhead: "Out",
    },
    {
      head: "Amount",
      subhead: "₦200,000",
    },
    {
      head: "Description",
      subhead: "Funds Disbursed to – Adamu Michael",
    },
    {
      head: "Date",
      subhead: "Jan 21, 2025. 09:10 am",
    },
  ];
  return (
    <ModalOverlay
      onClose={() => {
        onCloseModal();
      }}
    >
      <div className="bg-white w-full max-w-[600px] mx-auto rounded-[10px] shadow-lg z-50 px-4 hidden md:block">
        <div className="flex flex-col gap-y-4 px-4 py-6">
          <div className="flex justify-between mb-10">
            <h4 className="text-xl text-[#5F5F5F] font-aristoBold">
              Transaction Details
            </h4>
            <span>
              <FaRegTimesCircle
                color="#5F5F5F"
                size={24}
                onClick={() => {
                  onCloseModal();
                }}
              />
            </span>
          </div>
          {data?.map((el, i) => (
            <div
              className="pb-6 flex justify-between border-b border-[#F6F6F6]"
              key={i}
            >
              <p className="text-sm text-[#7C7C7C] font-poppinsRegular">
                {el?.head}
              </p>

              {el?.status ? (
                <p className="text-xs bg-[#00C853] text-white py-1 px-3 rounded-lg ">
                  Paid
                </p>
              ) : (
                <p className="text-sm font-poppinsSemiBold text-[#5F5F5F] w-[60%] text-right">
                  {el?.subhead}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </ModalOverlay>
  );
};

export default WalletDetails;
