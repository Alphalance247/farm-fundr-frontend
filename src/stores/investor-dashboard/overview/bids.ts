import { AxiosError } from "axios";
import { create } from "zustand";
import axiosInstance from "@/lib/axios";

export interface investorBidsListDataStore {
  bids: {
    id: string;
    status: string;
    short_description: string;
    project: {
      created_at: string;
      name: string;
    };
  }[];
  status_counts: {
    pending: string;
  };
  total_bids: string;
  accepted_bids_count: string;
  rejected_bids_count: string;
  pending_bids_count: string;
}

interface investorBidsStore {
  data: investorBidsListDataStore | null;
  loading: boolean;
  error: string | null;
  fetchInvestorBids: () => Promise<void>;
}

export const getInvestorBids = create<investorBidsStore>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchInvestorBids: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axiosInstance.get(`investment/bids`);
      set({ data: res.data, loading: false });
    } catch (err) {
      if (err instanceof AxiosError) {
        set({ error: err.message, loading: false });
      }
    }
  },
}));
