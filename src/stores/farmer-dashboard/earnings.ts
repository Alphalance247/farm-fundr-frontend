import { AxiosError } from "axios";
import { create } from "zustand";
import axiosInstance from "@/lib/axios";

export interface farmersEarningDataListStore {
  earnings: {
    total_earnings: string;
    total_withdrawn: string;
    pending_withdrawals: number;
    earning_by_farms: {
      id: number;
      project_name: string;
      status: string;
      earning: string;
    }[];
    current_balance: string;
  };
}

interface farmerEarningListStore {
  data: farmersEarningDataListStore | null;
  loading: boolean;
  error: string | null;
  fetchFarmerEarnings: () => Promise<void>;
}

export const getFarmersEarnings = create<farmerEarningListStore>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchFarmerEarnings: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axiosInstance.get(`farms/earnings`);
      set({ data: res.data, loading: false });
    } catch (err) {
      if (err instanceof AxiosError) {
        set({ error: err.message, loading: false });
      }
    }
  },
}));
