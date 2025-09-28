import { AxiosError } from "axios";
import { create } from "zustand";
import axiosInstance from "@/lib/axios";

export interface investorMessageDataStore {
  data: {
    created_by: {
      user_type: string;
      fullname: string;
      image: string;
    };
    message: string;
  }[];
}

interface investorMessageStore {
  data: investorMessageDataStore | null;
  loading: boolean;
  error: string | null;
  fetchInvestorMessages: (id: string, bid_id: string) => Promise<void>;
}

export const getInvestorMessages = create<investorMessageStore>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchInvestorMessages: async (id: string, bid_id: string) => {
    set({ loading: true, error: null });
    try {
      const res = await axiosInstance.get(
        `investment/bids/${id}/${bid_id}/project-updates`
      );
      set({ data: res.data, loading: false });
    } catch (err) {
      if (err instanceof AxiosError) {
        set({ error: err.message, loading: false });
      }
    }
  },
}));
