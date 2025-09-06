import { AxiosError } from "axios";
import { create } from "zustand";
import axiosInstance from "@/lib/axios";

export interface farmDetailsDataStore {
  data: {
    farm: {
      id: string;
      name: string;
      city: string;
      country: string;
      cac_reg_no: string;
      farm_branches_count: number;
      status: string;
      color: string;
      logo: string;
      active_farm_branches: string;
      created: string;
      farm_link: string;
      active_projects: string;
      inactive_projects: string;
      cac_reg_status: string;
      description: string;
      facebook_link: string;
      instagram_link: string;
      linkedln_link: string;
      x_link: string;
      owner_name: string;
      state: string;
      images: string[];
      farm_phone_number: string;
      farm_whatsapp_number: string;
      street: string;
      land_size: string;
      land_size_type: string;
      land_ownership: string;
      started_date: string;
      farm_email: string;
      cac_reg_doc: File;
      farm_images: {
        image: string;
      }[];
    };
    branches: {
      id: string;
      name: string;
      farm_name: string;
      branch_images: {
        image: string;
      }[];
      street: string;
      close_time: string;
      open_time: string;
      plots: string;
      projects: [];
      status: boolean;
    }[];
  };
}

interface farmDetailsStore {
  data: farmDetailsDataStore | null;
  loading: boolean;
  error: string | null;
  fetchFarmDetails: (farmDetailsId: string) => Promise<void>;
}

export const getFarmDetails = create<farmDetailsStore>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchFarmDetails: async (farmDetailsId: string) => {
    set({ loading: true, error: null });
    try {
      const res = await axiosInstance.get(`farms/${farmDetailsId}`);
      set({ data: res.data, loading: false });
    } catch (err) {
      if (err instanceof AxiosError) {
        set({ error: err.message, loading: false });
      }
    }
  },
}));
