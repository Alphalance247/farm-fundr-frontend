import { AxiosError } from "axios";
import { create } from "zustand";
import axiosInstance from "@/lib/axios";

export interface investorTransactionListDataStore {
  results: {
    transaction_id: string;
    amount: string;
    date: string;
    type: string;
    status: string;
  }[];
}

interface investorTransactionStore {
  data: investorTransactionListDataStore | null;
  loading: boolean;
  error: string | null;
  fetchInvestorsTransaction: () => Promise<void>;
}

export const getInvestorTransaction = create<investorTransactionStore>(
  (set) => ({
    data: null,
    loading: false,
    error: null,

    fetchInvestorsTransaction: async () => {
      set({ loading: true, error: null });
      try {
        const res = await axiosInstance.get(`investment/transactions`);
        set({ data: res.data, loading: false });
      } catch (err) {
        if (err instanceof AxiosError) {
          set({ error: err.message, loading: false });
        }
      }
    },
  })
);
