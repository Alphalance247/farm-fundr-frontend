import { useSearchParams } from "next/navigation";

export const useFarmName = () => {
  const searchParams = useSearchParams();
  const farmName = searchParams.get("farm") || "bandele-farm"; // fallback for development
  return farmName;
};
