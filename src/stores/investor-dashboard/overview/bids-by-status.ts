import { AxiosError } from "axios";
import { create } from "zustand";
import axiosInstance from "@/lib/axios";

export interface investorBidsStatusDataStore {
  accepted: {
    amount: number;
    created: string;
    id: string;
    status: string;
    created_at: string;
    milestone: string;
    roi_earned: string;
    start_date: string;
    project: {
      id: string;
      name: string;
      budget: string;
      project_images: {
        image: string;
      }[];
    };
  }[];

  all_bids: {
    amount: number;
    created: string;
    id: string;
    status: string;
    created_at: string;
    milestone: string;
    roi_earned: string;
    start_date: string;
    project: {
      id: string;
      name: string;
      budget: string;
      project_images: {
        image: string;
      }[];
    };
  }[];

  pending: {
    amount: number;
    created: string;
    status: string;
    id: string;
    milestone: string;
    created_at: string;
    roi_earned: string;
    start_date: string;
    project: {
      id: string;
      name: string;
      budget: string;
      project_images: {
        image: string;
      }[];
    };
  }[];
  declined: {
    amount: number;
    id: string;
    created: string;
    status: string;
    milestone: string;
    created_at: string;
    roi_earned: string;
    start_date: string;
    project: {
      id: string;
      name: string;
      budget: string;
      project_images: {
        image: string;
      }[];
    };
  }[];
}

interface investorBidStatusStore {
  data: investorBidsStatusDataStore | null;
  loading: boolean;
  error: string | null;
  fetchInvestorsBidStatus: () => Promise<void>;
}

export const getInvestorBidStatus = create<investorBidStatusStore>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchInvestorsBidStatus: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axiosInstance.get(`investment/bids/statuses`);
      set({ data: res.data, loading: false });
    } catch (err) {
      if (err instanceof AxiosError) {
        set({ error: err.message, loading: false });
      }
    }
  },
}));
