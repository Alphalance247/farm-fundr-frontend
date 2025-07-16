import { AxiosError } from "axios";
import { create } from "zustand";
import axiosInstance from "@/lib/axios";

export interface projectsDetailsDataStore {
  data: {
    id: string;
    farm_branch_name: string;
    how_it_works: string;
    progress_over_time: string;
    farm_name: string;
    name: string;
    plots: string;
    description: string;
    street: string;
    project_type: string;
    project_images: {
      image: string;
    }[];
    city: string;
    country: string;
    cac_reg_no: string;
    farm_branches_count: number;
    status: string;
    cac_reg_status: string;
    owner_name: string;
  };
}

interface projectsDetailsStore {
  data: projectsDetailsDataStore | null;
  loading: boolean;
  error: string | null;
  fetchProjectsDetails: (farmDetailsId: string) => Promise<void>;
}

export const getProjectDetails = create<projectsDetailsStore>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchProjectsDetails: async (farmDetailsId: string) => {
    set({ loading: true, error: null });
    try {
      const res = await axiosInstance.get(`farms/projects/${farmDetailsId}`);
      set({ data: res.data, loading: false });
    } catch (err) {
      if (err instanceof AxiosError) {
        set({ error: err.message, loading: false });
      }
    }
  },
}));
