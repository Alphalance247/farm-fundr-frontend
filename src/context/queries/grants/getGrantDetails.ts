import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import axiosInstance from "@/lib/axios";

interface grantDetailDataStore {
  data: {
    category: string;
    title: string;
    description: string;
    amount: string;
    grant_type: string;
    application_deadline: string;
    disbursement_date: string;
    disbursement_type: string;
    status: string;
    published: boolean;
    created_at: string;
    updated_at: string;
    agency: {
      id: string;
      email: string;
      username: string;
      first_name: string;
      identity_status: false;
    };
    eligibility_criteria_items: string[];
    grant_documents: [
      {
        id: string;
        document_url: string;
        uploaded_at: string;
      },
      {
        id: string;
        document_url: string;
        uploaded_at: string;
      }
    ];
  };
}

const fetchGrantDetails = async (id: string | number) => {
  const res = await axiosInstance.get<grantDetailDataStore | null>(
    `/agency/grants/${id}`
  );

  return res.data;
};

export const useGrantDetails = ({ id }: { id: string | number | null }) => {
  return useQuery<grantDetailDataStore | null, AxiosError>({
    queryKey: ["grant-details", id], // shared global key
    queryFn: () => fetchGrantDetails(id!), // your Axios call
    staleTime: 1000 * 60 * 5, // data fresh for 5 minutes
    retry: 1, //
    enabled: !!id, // only run when id exists
  });
};
