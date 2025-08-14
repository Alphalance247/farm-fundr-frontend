import { AxiosError } from "axios";
import { create } from "zustand";
import { environment } from "@/env/env.local";
import axios from "axios";

export interface farmPageBranchDataStore {
  branches: {
    id: string;
    farm: number;
    name: string;
    farm_name: string;
    plots: number;
    street: string;
    city: string;
    state: string;
    status: boolean;
    open_time: string;
    close_time: string;
    branch_images: {
      image: string;
    }[];
    description: string;
    projects: string[];
    images: string[];
  }[];
}

interface farmPageBranchListStore {
  data: farmPageBranchDataStore | null;
  loading: boolean;
  error: string | null;
  fetchFarmPageBranchList: () => Promise<void>;
}

export const getFarmPageBranchesListStore = create<farmPageBranchListStore>(
  (set) => ({
    data: null,
    loading: false,
    error: null,

    fetchFarmPageBranchList: async () => {
      set({ loading: true, error: null });
      try {
        const res = await axios.get(
          `${environment?.farmPageBaseUrl}/farmpage/branches`
        );
        set({ data: res.data, loading: false });
      } catch (err) {
        if (err instanceof AxiosError) {
          set({ error: err.message, loading: false });
        }
      }
    },
  })
);
