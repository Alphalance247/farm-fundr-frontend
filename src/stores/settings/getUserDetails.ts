import { AxiosError } from "axios";
import { create } from "zustand";
import axiosInstance from "@/lib/axios";

export interface userDetailsDataStore {
  user_details: {
    email: string;
    first_name: string;
    country: string;
    city: string;
    highest_education: string;
    last_name: string;
    phone: string;
    state: string;
    street_address: string;
    university: string;
    username: string;
    whatsapp_number: string;
    fullname: string;
    image: string;
    id_doc: string;
    id_type: string;
    id_digits: string;
  };
}

interface userKYCStore {
  data: userDetailsDataStore | null;
  loading: boolean;
  error: string | null;
  fetchUserDetails: () => Promise<void>;
}

export const getUserDetailsStore = create<userKYCStore>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchUserDetails: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axiosInstance.get(`/accounts/user`);
      set({ data: res.data, loading: false });
    } catch (err) {
      if (err instanceof AxiosError) {
        set({ error: err.message, loading: false });
      }
    }
  },
}));
