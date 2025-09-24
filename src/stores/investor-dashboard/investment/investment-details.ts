import { AxiosError } from "axios";
import { create } from "zustand";
import axiosInstance from "@/lib/axios";

export interface investDetailsDataStore {
  data: {
    farm_status: {
      name: string;
    };
    project: {
      budget: number;
      name: string;
      description: string;
      images: string[];
      start_date: string;
      status: string;
      project_location: string;
      duration_month: string;
      dutation: string;
      investment_start_date: string;
      farm_page_link: string;
      estimated_payout_day: string;
    };
  };
}

interface investmentDetailsStore {
  data: investDetailsDataStore | null;
  loading: boolean;
  error: string | null;
  fetchInvestmentDetails: (id: string) => Promise<void>;
}

export const getInvestmentDetails = create<investmentDetailsStore>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchInvestmentDetails: async (id: string) => {
    set({ loading: true, error: null });
    try {
      const res = await axiosInstance.get(
        `investment/bids/${id}/project-details`
      );
      set({ data: res.data, loading: false });
    } catch (err) {
      if (err instanceof AxiosError) {
        set({ error: err.message, loading: false });
      }
    }
  },
}));
