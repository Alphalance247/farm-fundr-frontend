import { AxiosError } from "axios";
import { create } from "zustand";
import axiosInstance from "@/lib/axios";

export interface farmListDataSore {
  results: {
    farms: {
      id: string;
      name: string;
      city: string;
      country: string;
      cac_reg_no: string;
      farm_branches_count: number;
      logo: string;
      status: string;
      color: string;
      farm_slug: string;
    }[];
    extra_data: {
      farm_branches: number;
      published_farms: number;
      draft_farms: number;
      total_farms: number;
    };
  };
}

interface farmListStore {
  data: farmListDataSore | null;
  loading: boolean;
  error: string | null;
  fetchFarmList: () => Promise<void>;
}

export const getFarmListStore = create<farmListStore>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchFarmList: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axiosInstance.get("/farms/");
      set({ data: res.data, loading: false });
    } catch (err) {
      if (err instanceof AxiosError) {
        set({ error: err.message, loading: false });
      }
    }
  },
}));
