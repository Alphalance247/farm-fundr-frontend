import { AxiosError } from "axios";
import { create } from "zustand";
import axiosInstance from "@/lib/axios";

export interface grantDetailDataStore {
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

interface grantDetailsStore {
  data: grantDetailDataStore | null;
  loading: boolean;
  error: string | null;
  fetchGrantDetails: (id: string) => Promise<void>;
}

export const getGrantDetails = create<grantDetailsStore>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchGrantDetails: async (id: string) => {
    set({ loading: true, error: null });
    try {
      const res = await axiosInstance.get(`/agency/grants/${id}`);
      set({ data: res.data, loading: false });
    } catch (err) {
      if (err instanceof AxiosError) {
        set({ error: err.message, loading: false });
      }
    }
  },
}));
