import { AxiosError } from "axios";
import { create } from "zustand";
import { environment } from "@/env/env.local";
import axios from "axios";

export interface farmPageProjectDataStore {
  projects: {
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
    images: string[];
    project_location: string;
    project_images: {
      image: string;
      is_main: boolean;
    }[];
  }[];
}

interface farmPageProjectListStore {
  data: farmPageProjectDataStore | null;
  loading: boolean;
  error: string | null;
  fetchFarmPageProjectList: (farmName: string) => Promise<void>;
}

export const getFarmPageProjectListStore = create<farmPageProjectListStore>(
  (set) => ({
    data: null,
    loading: false,
    error: null,

    fetchFarmPageProjectList: async (farmName: string) => {
      set({ loading: true, error: null });
      try {
        const res = await axios.get(
          `${environment?.farmPageBaseUrl}/farmpage/branches/projects?farm-name=${farmName}`
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
