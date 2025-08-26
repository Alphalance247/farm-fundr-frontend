import { AxiosError } from "axios";
import { create } from "zustand";
import axiosInstance from "@/lib/axios";

export interface bidsDataListStore {
  bid_status_count: {
    id: number;
    accepted: number;
    rejected: number;
  };
  data: string[];
}

interface bidsListStore {
  data: bidsDataListStore | null;
  loading: boolean;
  error: string | null;
  fetchFarmerBids: () => Promise<void>;
}

export const getFarmerBidsStore = create<bidsListStore>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchFarmerBids: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axiosInstance.get(`farms/bids`);
      set({ data: res.data, loading: false });
    } catch (err) {
      if (err instanceof AxiosError) {
        set({ error: err.message, loading: false });
      }
    }
  },
}));
