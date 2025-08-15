import Button from "./Buttons";

const ErrorFetch = ({
  message,
  onRefetch,
}: {
  message: string;
  onRefetch: () => void;
}) => {
  return (
    <div className={`flex justify-center items-center flex-col h-full`}>
      <p className="text-center text-gray-500 mt-4 flex content-center">
        {message}
      </p>

      <Button
        className="flex items-center gap-x-1 mt-4"
        onClick={onRefetch}
        type="button"
      >
        Retry
      </Button>
    </div>
  );
};

export default ErrorFetch;
