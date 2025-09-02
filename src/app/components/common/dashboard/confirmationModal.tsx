"use client";
import Image from "next/image";
import Button from "@/app/components/common/Buttons";
import ModalOverlay from "../modals/modalOverlay";


interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  icon?: string;
  confirmText: string;
  cancelText: string;
  onConfirm: () => void;
  onCancel?: () => void;
}

const ConfirmationModal = ({
  isOpen,
  onClose,
  title,
  description,
  icon = "/assets/DashBoard/wallet/deactivate.svg",
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
}: ConfirmationModalProps) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClose={onClose}>
      <div className="bg-white w-full max-w-[600px] mx-auto rounded-[10px] shadow-lg z-50">
        <div className="py-4 px-8 bg-[#EEFEF6] rounded-tr-[10px] rounded-tl-[10px] flex items-center justify-between">
          <div className="flex items-center gap-x-4">
            <Image src={icon} width={40} height={40} alt="icon" />
            <h4 className="text-lg font-poppinsSemiBold text-[#0B222A]">
              {title}
            </h4>
          </div>
          <button onClick={onClose} className="text-gray-500 text-xl">
            ✕
          </button>
        </div>

        <div className="px-8 py-6 bg-white rounded-br-[10px] rounded-bl-[10px]">
          <p className="text-sm font-poppinsRegular text-[#5C6C71] mb-10 text-center">
            {description}
          </p>

          <div className="flex items-center gap-x-4">
            <div className="w-full">
              <Button
                variant="secondary"
                className="w-full"
                onClick={() => {
                  onCancel?.();
                  onClose();
                }}
              >
                {cancelText}
              </Button>
            </div>

            <Button
              className="w-full"
              onClick={() => {
                onConfirm();
                onClose();
              }}
            >
              {confirmText}
            </Button>
          </div>
        </div>
      </div>
    </ModalOverlay>
  );
};

export default ConfirmationModal;
