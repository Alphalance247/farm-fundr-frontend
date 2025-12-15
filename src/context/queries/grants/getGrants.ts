import axiosInstance from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

interface grantListDataStore {
  data: {
    id: string;
    title: string;
    application_deadline: string;
    status: string;
    agency: {
      image: string;
    };
  }[];
}

const fetchGrantList = async () => {
  const res = await axiosInstance.get<grantListDataStore | null>(
    "agency/grants"
  );

  return res.data;
};

export const useGrantsList = () => {
  return useQuery<grantListDataStore | null, AxiosError>({
    queryKey: ["grant-list"],
    queryFn: fetchGrantList,
    staleTime: 1000 * 60 * 5, // data fresh for 5 minutes
    retry: 1,
  });
};
