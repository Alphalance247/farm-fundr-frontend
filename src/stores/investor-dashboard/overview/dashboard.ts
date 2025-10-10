import { AxiosError } from "axios";
import { create } from "zustand";
import axiosInstance from "@/lib/axios";

export interface investorDashboardListDataStore {
  total_funds_invested: number;
  total_earning: number;
  ongoing_investments: number;
  total_bid_sent: number;
  wallet_balance: number;
  roi_total: number;
  audit_logs: {
    content: string;
    created: string;
    title: string;
  }[];
}

interface investorDashboardListStore {
  data: investorDashboardListDataStore | null;
  loading: boolean;
  error: string | null;
  fetchInvestorDashboardData: () => Promise<void>;
}

export const getInvestorDashboardStore = create<investorDashboardListStore>(
  (set) => ({
    data: null,
    loading: false,
    error: null,

    fetchInvestorDashboardData: async () => {
      set({ loading: true, error: null });
      try {
        const res = await axiosInstance.get(`investment/dashboard`);
        set({ data: res.data, loading: false });
      } catch (err) {
        if (err instanceof AxiosError) {
          set({ error: err.message, loading: false });
        }
      }
    },
  })
);
