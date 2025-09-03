import { AxiosError } from "axios";
import { create } from "zustand";
import { environment } from "@/env/env.local";
import axios from "axios";

// API response types
export interface ProjectImage {
  id: number;
  image: string;
  is_main: boolean;
}

export interface Project {
  id: number;
  farm_name: string;
  name: string;
  short_description: string;
  description: string;
  status: string;
  how_it_works: string;
  progress_over_time: string;
  fund_type: string;
  published: boolean;
  no_of_fundr: number;
  plots: number;
  budget: string;
  start_date: string;
  end_date: string;
  farm_branch_name: string;
  risk_assurance: string;
  involve_farm_fundr: boolean;
  project_images: ProjectImage[];
  payment_structure: string;
  project_type: string;
  ROI: number;
  project_location: string;
  images: string[];
}

export interface FarmMarketPlaceResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    statusmessage: string;
    data: Project[];
  };
}

// Store interface
interface FarmMarketPlaceListStore {
  data: FarmMarketPlaceResponse | null;
  loading: boolean;
  error: string | null;
  fetchFarmMarketPlaceList: () => Promise<void>;
}

// Zustand store
export const getFarmMarketPlaceListStore = create<FarmMarketPlaceListStore>(
  (set) => ({
    data: null,
    loading: false,
    error: null,

    fetchFarmMarketPlaceList: async () => {
      set({ loading: true, error: null });
      try {
        const res = await axios.get<FarmMarketPlaceResponse>(
          `${environment?.farmPageBaseUrl}/farm-marketplace`
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
