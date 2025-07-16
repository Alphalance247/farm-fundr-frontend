import { AxiosError } from "axios";
import { create } from "zustand";
import axiosInstance from "@/lib/axios";

export interface projectListDataSore {
  data: {
    id: string;
    name: string;
    city: string;
    country: string;
    cac_reg_no: string;
    farm_branches_count: number;
    status: string;
    description: string;
    farm_name: string;
    ROI: number;
    project_location: string;
    project_images: {
      image: string;
      is_main: boolean;
    }[];
  }[];
}

interface projectListStore {
  data: projectListDataSore | null;
  loading: boolean;
  error: string | null;
  fetchProjectsList: (projectId: string, farmId: string) => Promise<void>;
}

export const getProjectsListStore = create<projectListStore>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchProjectsList: async (projectId: string, farmId: string) => {
    set({ loading: true, error: null });
    try {
      const res = await axiosInstance.get(
        `farms/${farmId}/branches/${projectId}/projects`
      );
      set({ data: res.data, loading: false });
    } catch (err) {
      if (err instanceof AxiosError) {
        set({ error: err.message, loading: false });
      }
    }
  },
}));
