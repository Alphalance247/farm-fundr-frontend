import { AxiosError } from "axios";
import { create } from "zustand";
import { environment } from "@/env/env.local";
import axiosInstance from "@/lib/axios";

export interface grantListDataStore {
  data: {
    id: string;
    title: string;
    application_deadline: string;
    status: string;
    agency: {
      image: string;
    };
  }[];
}

interface grantListStore {
  data: grantListDataStore | null;
  loading: boolean;
  error: string | null;
  fetchGrantList: () => Promise<void>;
}

export const getGrantList = create<grantListStore>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchGrantList: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axiosInstance.get(
        `${environment?.baseUrl}agency/grants`
      );
      set({ data: res.data, loading: false });
    } catch (err) {
      if (err instanceof AxiosError) {
        set({ error: err.message, loading: false });
      }
    }
  },
}));
