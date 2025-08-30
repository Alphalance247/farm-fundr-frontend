"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useFarmName = () => {
  const searchParams = useSearchParams();
  const [farmName, setFarmName] = useState<string>('');

  useEffect(() => {
    // First try to get from search params
    const paramFarmName = searchParams.get("farm");

    if (paramFarmName) {
      setFarmName(paramFarmName);
    } else if (typeof window !== "undefined") {
      // Fallback to extracting from hostname
      const hostname = window.location.hostname;
      const subdomain = hostname.split(".")[0];

      // Only use subdomain if it's not the main domain
      if (
        subdomain &&
        subdomain !== "localhost" &&
        !hostname.includes("padycvgcoops.name.ng")
      ) {
        setFarmName(subdomain);
      }
    }
  }, [searchParams]);

  return farmName;
};
