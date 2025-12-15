import axiosInstance from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

interface grantApplicationListDataStore {
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

const fetchGrantApplicationList = async () => {
  const res = await axiosInstance.get<grantApplicationListDataStore | null>(
    "agency/grants/3"
  );

  return res.data;
};

export const useGrantsApplicationList = () => {
  return useQuery<grantApplicationListDataStore | null, AxiosError>({
    queryKey: ["grant-application-list"],
    queryFn: fetchGrantApplicationList,
    staleTime: 1000 * 60 * 5, // data fresh for 5 minutes
    retry: 1,
  });
};
