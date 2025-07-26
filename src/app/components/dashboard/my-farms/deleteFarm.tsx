import { useState } from "react";
import ModalOverlay from "../../common/modals/modalOverlay";
import Button from "../../common/Buttons";
import axiosInstance from "@/lib/axios";
import { toast } from "react-hot-toast";
import { AxiosError } from "axios";

const DeleteFarm = ({
  onCloseModal,
  selectedFarmId,
  selectedFarmName,
}: {
  onCloseModal: () => void;
  selectedFarmId: string;
  selectedFarmName: string;
}) => {
  const [comment, setComment] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDeleteFarm = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.delete(`farms/${selectedFarmId}`);

      if (res.status === 200) {
        toast.success("Farm Deleted");
      }

      onCloseModal();
      setLoading(false);
    } catch (err) {
      // Extract the error message from the response
      let errorMessage = "An error occurred please try again or contact Admin";
      if (err instanceof AxiosError) {
        // Check if err is an instance of AxiosError
        errorMessage = err.response?.data?.message || errorMessage;
      }

      toast.error(errorMessage);
      setLoading(false);
    }
  };

  return (
    <ModalOverlay onClose={onCloseModal}>
      <div className="border border-[#E3E3E5] rounded-lg relative z-50 w-[616px] bg-[white] shadow-lg">
        <div className="pt-6 pb-4 pl-4 border-b">
          <h5 className="font-semibold text-[#2F2F33] text-xl tracking-[-0.5px] mb-2">
            Delete Farm
          </h5>
          <div className="flex gap-x-4 items-center">
            <p className="text-[#71717A] text-base">
              Farm Name: {selectedFarmName}
            </p>
          </div>
        </div>

        {!showConfirmation ? (
          <>
            <div className="p-4 text-[#2F2F33]">
              <p className="text-base font-semibold mb-2">Description</p>
              <p className="text-[15px] leading-5 mb-2">
                {" "}
                The following will occur:
              </p>
              <ul className="text-[15px] leading-5 flex flex-col gap-y-2 list-disc pl-6">
                {[
                  "This farm will be permanently removed from the system.",
                  "It will no longer appear in your dashboard or reports.",
                  "All associated branches and projects will also be deleted.",
                  "This action cannot be undone.",
                ].map((el, i) => (
                  <li key={i}>{el}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6 px-4 pb-6">
              <p className="text-[#2F2F33] font-semibold text-base mb-4">
                Comment <span className="font-medium">(Optional)</span>{" "}
              </p>

              <textarea
                className="w-full min-h-[132px] text-[#71717A] rounded-md border border-[#BEBEC2] p-3 text-sm resize-vertical outline-none focus:border-blue-400"
                placeholder="Add a reason for deleting this farm (e.g., duplicate, no longer needed, etc.) or leave any comments for your team..."
                value={comment || ""}
                onChange={(e) => {
                  setComment(e.target.value);
                }}
                name="teamdescription"
              />
            </div>
          </>
        ) : (
          <div className="pt-8 px-4 pb-7">
            <p className="text-sm text-[#2F2F33] font-semibold w-[60%]">
              Are you sure you want to deactivate “{selectedFarmName}”?
            </p>
            <p className="text-[#71717A] text-sm mt-2">
              This action cannot be undone
            </p>
          </div>
        )}

        <div className="flex items-center bg-[#F7F7F7] justify-end p-4 gap-x-4 rounded-br-lg rounded-bl-lg">
          <Button
            variant="secondary"
            className="w-fit"
            type="button"
            onClick={onCloseModal}
          >
            Cancel
          </Button>
          <Button
            disabled={!showConfirmation && comment?.length === 0}
            className={`w-fit ${
              !showConfirmation && comment?.length === 0
                ? "cursor-not-allowed opacity-60"
                : ""
            }`}
            type="button"
            onClick={() => {
              if (showConfirmation === false) {
                setShowConfirmation(true);
              } else {
                // Handle actual deactivation here
                handleDeleteFarm();
              }
            }}
          >
            {showConfirmation
              ? loading
                ? "deleting...."
                : "delete"
              : "Delete Farm 😢"}
          </Button>
        </div>
      </div>
    </ModalOverlay>
  );
};

export default DeleteFarm;
