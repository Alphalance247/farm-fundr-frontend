import { AxiosError } from "axios";
import { create } from "zustand";
import axiosInstance from "@/lib/axios";

export interface dashboardListDataStore {
  data: {
    ongoing_investments: number;
    total_investors_engaged: number;
    farm_by_status: {
      published: number;
      draft: string;
    };
    farms: string[];
    total_farms: string;
  };
}

interface dashboardListStore {
  data: dashboardListDataStore | null;
  loading: boolean;
  error: string | null;
  fetchDashboardData: () => Promise<void>;
}

export const getDashboardStore = create<dashboardListStore>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchDashboardData: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axiosInstance.get(`farms/dashboard`);
      set({ data: res.data, loading: false });
    } catch (err) {
      if (err instanceof AxiosError) {
        set({ error: err.message, loading: false });
      }
    }
  },
}));
