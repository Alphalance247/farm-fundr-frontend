import { AxiosError } from "axios";
import { create } from "zustand";
import axiosInstance from "@/lib/axios";

export interface bidsDataListStore {
  bid_status_count: {
    id: number;
    accepted: number;
    pending: number;
    declined: string;
  };
  data: string[];

  bids_by_status: {
    accepted: {
      amount: number;
      created: string;
      fund_released: boolean;
      investor_name: string;
      id: string;
      status: string;
      created_at: string;
      project: {
        id: string;
        name: string;
        "farm-detail-page": string;
        project_images: {
          image: string;
        }[];
      };
    }[];

    pending: {
      amount: number;
      created: string;
      id: string;
      status: string;
      investor_name: string;
      created_at: string;
      project: {
        id: string;
        name: string;
        project_images: {
          image: string;
        }[];
      };
    }[];

    declined: {
      amount: number;
      id: string;
      created_at: string;
      status: string;
      investor_name: string;
      project: {
        id: string;
        name: string;
        project_images: {
          image: string;
        }[];
      };
    }[];
  };
}

interface bidsListStore {
  data: bidsDataListStore | null;
  loading: boolean;
  error: string | null;
  fetchFarmerBidsWithInvestor: () => Promise<void>;
}

export const getFarmerBidWithInvestorStore = create<bidsListStore>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchFarmerBidsWithInvestor: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axiosInstance.get(`farms/bids`);
      set({ data: res.data, loading: false });
    } catch (err) {
      if (err instanceof AxiosError) {
        set({ error: err.message, loading: false });
      }
    }
  },
}));
