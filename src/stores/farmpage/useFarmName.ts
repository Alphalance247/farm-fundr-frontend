import { useSearchParams } from "next/navigation";

export const useFarmName = () => {
  const searchParams = useSearchParams();
  const farmName = searchParams.get("farm");

  // // If no farm name is provided, try to extract from hostname
  // if (!farmName && typeof window !== "undefined") {
  //   const hostname = window.location.hostname;
  //   const subdomain = hostname.split(".")[0];
  //   // Only use subdomain if it's not the main domain
  //   if (subdomain && !hostname.includes("padycvgcoops.name.ng")) {
  //     return subdomain;
  //   }
  // }

  return farmName || "bandele-farm";
};
