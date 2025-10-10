import { AxiosError } from "axios";
import { create } from "zustand";
import axiosInstance from "@/lib/axios";

export interface farmerMessageDataStore {
  data: {
    created_by: {
      user_type: string;
      fullname: string;
      image: string;
    };
    message: string;
  }[];
}

interface farmerMessageStore {
  data: farmerMessageDataStore | null;
  loading: boolean;
  error: string | null;
  fetchFarmerMessages: (id: string) => Promise<void>;
}

export const getFarmerMessages = create<farmerMessageStore>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchFarmerMessages: async (id: string) => {
    set({ loading: true, error: null });
    try {
      const res = await axiosInstance.get(`farms/projects/${id}/updates`);
      set({ data: res.data, loading: false });
    } catch (err) {
      if (err instanceof AxiosError) {
        set({ error: err.message, loading: false });
      }
    }
  },
}));
