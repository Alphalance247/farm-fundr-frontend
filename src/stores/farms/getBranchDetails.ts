import { AxiosError } from "axios";
import { create } from "zustand";
import axiosInstance from "@/lib/axios";

export interface branhDetailsDataStore {
  data: {
    id: string;
    name: string;
    farm_name: string;
    branch_images: {
      image: string;
    }[];
    street: string;
    images: string;
    close_time: string;
    open_time: string;
    plots: string;
    projects: [];
    status: boolean;
    state: string;
    city: string;
    description: string;
  };
}

interface branchListStore {
  data: branhDetailsDataStore | null;
  loading: boolean;
  error: string | null;
  fetchBranchDetails: (branchId: string) => Promise<void>;
}

export const getBranchDetails = create<branchListStore>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchBranchDetails: async (branchId: string) => {
    set({ loading: true, error: null });
    try {
      const res = await axiosInstance.get(`/farms/branches/${branchId}`);
      set({ data: res.data, loading: false });
    } catch (err) {
      if (err instanceof AxiosError) {
        set({ error: err.message, loading: false });
      }
    }
  },
}));
