import ModalOverlay from "./modalOverlay";

const SpinnerModal = ({
  message,
  onClose,
}: {
  message?: string;
  onClose: () => void;
}) => {
  return (
    <ModalOverlay onClose={onClose}>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white/90 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-xl flex flex-col items-center w-[90%] max-w-sm animate-scale-in">
          <svg
            className="animate-spin h-12 w-12 md:h-14 md:w-14 text-green-600"
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
              d="M4 12a8 8 0 018-8V0C5.373 0 0 
              5.373 0 12h4zm2.93 6.93A8.003 
              8.003 0 014 12H0c0 5.523 4.477 
              10 10 10v-4a6.002 6.002 0 
              01-3.07-1.07z"
            ></path>
          </svg>
          <p className="mt-4 text-center text-gray-700 font-medium text-base md:text-lg">
            {message || "Loading... Please wait"}
          </p>
        </div>
      </div>

      <style jsx>{`
        .animate-scale-in {
          animation: scaleIn 0.25s ease-out;
        }
        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </ModalOverlay>
  );
};

export default SpinnerModal;
