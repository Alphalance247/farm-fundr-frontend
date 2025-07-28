import { AxiosError } from "axios";
import { create } from "zustand";
import axiosInstance from "@/lib/axios";

export interface branchListDataStore {
  results: {
    data: {
      id: string;
      name: string;
    }[];
  };
}

interface branchListStore {
  data: branchListDataStore | null;
  loading: boolean;
  error: string | null;
  fetchBranchList: (farmId: string) => Promise<void>;
}

export const getBranchListStore = create<branchListStore>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchBranchList: async (farmId: string) => {
    set({ loading: true, error: null });
    try {
      const res = await axiosInstance.get(`/farms/${farmId}/branches`);
      set({ data: res.data, loading: false });
    } catch (err) {
      if (err instanceof AxiosError) {
        set({ error: err.message, loading: false });
      }
    }
  },
}));
