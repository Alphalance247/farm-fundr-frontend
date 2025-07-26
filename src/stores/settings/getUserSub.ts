import { AxiosError } from "axios";
import { create } from "zustand";
import axiosInstance from "@/lib/axios";

export interface userSubDataStore {
  subscription: {
    plan: {
      name: string;
    };
    next_sub_date: string;
  };
}

interface userSubStore {
  data: userSubDataStore | null;
  loading: boolean;
  error: string | null;
  fetchUserSubscription: () => Promise<void>;
}

export const getUserSubStore = create<userSubStore>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchUserSubscription: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axiosInstance.get(`/farms/subscription`);
      set({ data: res.data, loading: false });
    } catch (err) {
      if (err instanceof AxiosError) {
        set({ error: err.message, loading: false });
      }
    }
  },
}));
