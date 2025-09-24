import { AxiosError } from "axios";
import { create } from "zustand";
import axiosInstance from "@/lib/axios";

export interface investorInvestmentDataStore {
  overview: {
    total_investment: number;
    ongoing: number;
    completed: number;
    cancelled: number;
  };
  data: {
    project_name: string;
    project_image: string;
    milestone: string;
    roi_earned: string;
    start_date: string;
    project: {
      id: string;
      status: string;
      budget: string;
    };
  }[];
}

interface investorInvestmentStore {
  data: investorInvestmentDataStore | null;
  loading: boolean;
  error: string | null;
  fetchInvestorsInvestment: () => Promise<void>;
}

export const getInvestorInvestment = create<investorInvestmentStore>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchInvestorsInvestment: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axiosInstance.get(`investment/investor-investments`);
      set({ data: res.data, loading: false });
    } catch (err) {
      if (err instanceof AxiosError) {
        set({ error: err.message, loading: false });
      }
    }
  },
}));
