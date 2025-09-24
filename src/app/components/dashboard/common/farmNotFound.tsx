import { SearchIcon } from "lucide-react";
import Button from "../../common/Buttons";

interface FarmNotFoundProps {
  farmName: string;
  notFoundText?:string;
  farmNotExistText?:string;
}

const FarmNotFound = ({ farmName, notFoundText ,farmNotExistText}: FarmNotFoundProps) => {





  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        {/* Farm Icon */}
        <div className="mx-auto w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-6">
          <svg
            className="w-12 h-12 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>

        {/* Error Message */}
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
      { notFoundText ||   'Farm Not Found'}
        </h1>
        {  farmNotExistText || 
        <p className="text-gray-600 mb-6">
        


 The farm{" "}
      <span className="font-semibold text-gray-800">{farmName} </span>
      doesnt     exist or may have been removed.`
       
         
        </p>
         }

        {/* Action Buttons */}
        <div className="space-y-3 mt-4">
         

         <a href="https://farmpady.com/farm-marketplace
         " rel="noopener noreferrer" className="block">

          <Button
            className="w-full bg-[#2D865B] text-white hover:bg-[#246B4A] flex items-center justify-center gap-2"
          >
            <SearchIcon className="w-4 h-4" />
            Browse Other Farms
          </Button>

         </a>

         <a href="https://farmpady.com/
         " rel="noopener noreferrer" className="block">
          <Button
            variant="primary"
            className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            Go to Homepage
          </Button>
          </a>
        </div>

        {/* Additional Info */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Looking for a specific farm? Try searching in our{" "}

            <a href="https://farmpady.com/farm-marketplace" rel="noopener noreferrer">
            <button
              className="text-[#2D865B] hover:underline font-medium"
            >
              farm marketplace
            </button>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FarmNotFound;
