import { AxiosError } from "axios";
import { create } from "zustand";
import { environment } from "@/env/env.local";
import axiosInstance from "@/lib/axios";

export interface grantApplicationListDataStore {
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

interface grantApplicationListStore {
  data: grantApplicationListDataStore | null;
  loading: boolean;
  error: string | null;
  fetchApllicationList: () => Promise<void>;
}

export const getGrantApplication = create<grantApplicationListStore>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchApllicationList: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axiosInstance.get(
        `${environment?.baseUrl}agency/grants/3`
      );
      set({ data: res.data, loading: false });
    } catch (err) {
      if (err instanceof AxiosError) {
        set({ error: err.message, loading: false });
      }
    }
  },
}));
