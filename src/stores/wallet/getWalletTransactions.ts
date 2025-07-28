import { AxiosError } from "axios";
import { create } from "zustand";
import axiosInstance from "@/lib/axios";

export interface walletTransactionDataStore {
  transactions: {
    amount: number;
    description: string;
    id: string;
    status: string;
    type: string;
  }[];
}

interface walletTransactionStore {
  data: walletTransactionDataStore | null;
  loading: boolean;
  error: string | null;
  fetchWalletTransaction: () => Promise<void>;
}

export const getWalletTransactionStore = create<walletTransactionStore>(
  (set) => ({
    data: null,
    loading: false,
    error: null,

    fetchWalletTransaction: async () => {
      set({ loading: true, error: null });
      try {
        const res = await axiosInstance.get(`/farms/wallet-transactions`);
        set({ data: res.data, loading: false });
      } catch (err) {
        if (err instanceof AxiosError) {
          set({ error: err.message, loading: false });
        }
      }
    },
  })
);
