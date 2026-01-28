"use client";
import ModalOverlay from "./modals/modalOverlay";
import Button from "./Buttons";
import { useRouter } from "next/navigation";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

interface CreateFarmModalProps {
  onClose: () => void;
}

const CreateFarmModal = ({ onClose }: CreateFarmModalProps) => {
  const router = useRouter();

  const handleCreateFarm = () => {
    router.push("/farmer-dashboard/my-farms/add-farm");
    onClose();
  };

  return (
    <ModalOverlay onClose={onClose}>
      <div className="bg-white rounded-lg relative z-50 w-[500px] max-w-[95vw] shadow-2xl overflow-hidden md:max-w-[98vw] sm:max-h-[85vh] sm:overflow-y-auto">
        {/* Header with gradient background */}
        <div className="bg-gradient-to-r from-[#51F4A6] to-[#22C55E] p-8 flex flex-col items-center justify-center md:p-6 sm:p-4">
          <div className="mb-4">
            <IoMdCheckmarkCircleOutline
              size={64}
              className="text-white md:w-14 md:h-14 sm:w-12 sm:h-12"
            />
          </div>
          <h2 className="text-2xl font-aristoBold text-white text-center md:text-xl sm:text-lg">
            Get Started with Your First Farm
          </h2>
        </div>

        {/* Content */}
        <div className="p-8 md:p-6 sm:p-4 overflow-y-auto max-h-[calc(100vh-250px)]">
          <div className="bg-[#EEFEF6] border border-[#51F4A6] rounded-xl p-6 mb-6 md:p-4 md:mb-5 sm:p-3 sm:mb-4">
            <p className="text-sm font-poppinsRegular text-[#0B222A] leading-relaxed md:text-xs sm:text-xs">
              Welcome to FarmFundr! You haven&apos;t created any farms yet. To
              start showcasing your farming projects and attracting investors,
              please create your first farm. This will help you manage your
              agricultural activities, track investments, and connect with
              potential investors in your area.
            </p>
          </div>

          {/* Features list */}
          <div className="mb-6 space-y-3 md:mb-5 md:space-y-2.5 sm:mb-4 sm:space-y-2">
            <div className="flex items-start gap-3 md:gap-2.5">
              <span className="text-[#51F4A6] mt-1 flex-shrink-0 text-lg sm:text-base">
                ✓
              </span>
              <p className="text-sm font-poppinsRegular text-[#5C6C71] md:text-xs sm:text-xs">
                Add detailed information about your farm
              </p>
            </div>
            <div className="flex items-start gap-3 md:gap-2.5">
              <span className="text-[#51F4A6] mt-1 flex-shrink-0 text-lg sm:text-base">
                ✓
              </span>
              <p className="text-sm font-poppinsRegular text-[#5C6C71] md:text-xs sm:text-xs">
                Upload farm images and documentation
              </p>
            </div>
            <div className="flex items-start gap-3 md:gap-2.5">
              <span className="text-[#51F4A6] mt-1 flex-shrink-0 text-lg sm:text-base">
                ✓
              </span>
              <p className="text-sm font-poppinsRegular text-[#5C6C71] md:text-xs sm:text-xs">
                Start receiving investment opportunities
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 md:gap-2 sm:flex-col">
            <Button
              onClick={handleCreateFarm}
              variant="primary"
              className="flex-1 sm:w-full"
            >
              Create Farm Now
            </Button>
            <Button
              onClick={onClose}
              variant="tertiary"
              className="flex-1 sm:w-full"
            >
              Maybe Later
            </Button>
          </div>
        </div>
      </div>
    </ModalOverlay>
  );
};

export default CreateFarmModal;
