import { AxiosError } from "axios";
import { create } from "zustand";
import axiosInstance from "@/lib/axios";

export interface farmerBalanceDataStore {
  wallet: {
    balance: number;
  };
}

interface farmerBalanceStore {
  data: farmerBalanceDataStore | null;
  loading: boolean;
  error: string | null;
  fetchFarmerBalance: () => Promise<void>;
}

export const getFarmerBalanceStore = create<farmerBalanceStore>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchFarmerBalance: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axiosInstance.get(`/farms/farmer-wallet`);
      set({ data: res.data, loading: false });
    } catch (err) {
      if (err instanceof AxiosError) {
        set({ error: err.message, loading: false });
      }
    }
  },
}));
