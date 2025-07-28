/////This is spinner modal component that can be used to show a loading spinner
/////Specically designed for uploading files or performing long-running tasks

import ModalOverlay from "./modalOverlay";

const SpinnerModal = ({
  message,
  onClose,
}: {
  message?: string;
  onClose: () => void;
}) => {
  return (
    <ModalOverlay
      onClose={() => {
        onClose();
      }}
    >
      <div className="flex items-center justify-center h-full relative z-40">
        <div className="flex flex-col items-center justify-center">
          <svg
            className="animate-spin h-10 w-10 text-green-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2.93 6.93A8.003 8.003 0 014 12H0c0 5.523 4.477 10 10 10v-4a6.002 6.002 0 01-3.07-1.07z"
            ></path>
          </svg>
          <p className="mt-2 text-white">{message || "Loading..."}</p>
        </div>
      </div>
    </ModalOverlay>
  );
};

export default SpinnerModal;
