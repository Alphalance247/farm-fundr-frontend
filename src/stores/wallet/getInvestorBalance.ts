import { create } from "zustand";
import { AxiosError } from "axios";
import axiosInstance from "@/lib/axios";

interface investorBalanceData {
  data: {
    balance: number;
  };
}

interface investorBalanceStore {
  data: investorBalanceData | null;
  loading: boolean;
  error: string | null;
  fetchInvestorBalance: () => Promise<void>;
}

export const getInvestorBalanceStore = create<investorBalanceStore>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchInvestorBalance: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axiosInstance.get(`/investment/wallets`);
      set({ data: res.data, loading: false });
    } catch (err) {
      if (err instanceof AxiosError) {
        set({ error: err.message, loading: false });
      }
    }
  },
}));
