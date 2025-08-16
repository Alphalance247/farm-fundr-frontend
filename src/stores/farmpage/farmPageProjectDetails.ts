import axios, { AxiosError } from "axios";
import { create } from "zustand";
import { environment } from "@/env/env.local";

export interface projectsDetailsDataStore {
  data: {
    project: {
      id: string;
      farm_branch_name: string;
      how_it_works: string;
      progress_over_time: string;
      farm_name: string;
      name: string;
      risk_assurance: string;
      plots: string;
      description: string;
      project_location: string;
      images: string[];
      project_type: string;
      project_images: {
        image: string;
      }[];
      cac_reg_no: string;
      farm_branches_count: number;
      status: string;
      cac_reg_status: string;
      owner_name: string;
      start_date: string;
      end_date: string;
      payment_structure: string;
      budget: string;
      ROI: string;
    };
    farm_status: {
      data: string;
    };
  };
}

interface projectsDetailsStore {
  data: projectsDetailsDataStore | null;
  loading: boolean;
  error: string | null;
  fetchProjectsDetails: (
    farmName: string,
    projectDetailsId: string
  ) => Promise<void>;
}

export const getFarmPageProjectDetails = create<projectsDetailsStore>(
  (set) => ({
    data: null,
    loading: false,
    error: null,

    fetchProjectsDetails: async (
      farmName: string,
      projectDetailsId: string
    ) => {
      set({ loading: true, error: null });
      try {
        const res = await axios.get(
          `https://${farmName}.${environment?.farmPageBaseUrl}/farmpage/branches/projects/${projectDetailsId}`
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
