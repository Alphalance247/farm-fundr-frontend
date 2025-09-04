import { AxiosError } from "axios";
import { create } from "zustand";
import { environment } from "@/env/env.local";
import axios from "axios";

export interface farmPageDataStore {
  farm_data: {
    id: number;
    name: string;
    owner: string;
    description: string;
    started_date: string;
    status: string;
    street: string;
    city: string;
    state: string;
    country: string;
    farm_whatsapp_number: string;
    farm_email: string;
    farm_phone_number: string;
    land_size: string;
    land_size_type: string;
    land_ownership: string;
    cac_reg_no: string;
    cac_reg_doc: string;
    color: string;
    logo: string;
    farm_slug: string;
    cac_reg_status: string;
    created: string;
    farm_link: string;
    farm_branches: {
      id: number;
      farm: number;
      name: string;
      farm_name: string;
      plots: number;
      street: string;
      city: string;
      state: string;
      status: string;
      open_time: string;
      close_time: string;
      branch_images: {
        image: string;
      }[];
      description: string;
      projects: string[];
      images: string[];
    };
    owner_name: string;
    owner_email: string;
    farm_branches_count: number;
    verified: boolean;
    active_farm_branches: number;
    inactive_farm_branches: string;
    farm_images: {
      image: string;
    }[];
    projects_count: number;
    active_projects: number;
    inactive_projects: number;
    draft_projects: string;
  };

  other_farms: number;
  farmer_details: {
    email: string;
    fullname: string;
    highest_education: string;
    kyc_status: boolean;
    city: string;
    country: string;
    university: string;
    whatsapp_number: string;
    id_doc: string;
    image: string;
    kyc_completion_percentage: number;
    phone: string;
    years_of_exp: string;
  };
}

interface farmPageListStore {
  data: farmPageDataStore | null;
  loading: boolean;
  error: string | null;
  fetchFarmPageList: (farmName: string) => Promise<void>;
}

export const getFarmPageListStore = create<farmPageListStore>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchFarmPageList: async (farmName: string) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.get(
        `${environment?.farmPageBaseUrl}/farmpage?farm-name=${farmName}`
      );
      set({ data: res.data, loading: false });
    } catch (err) {
      if (err instanceof AxiosError) {
        set({ error: err.message, loading: false });
      }
    }
  },
}));
