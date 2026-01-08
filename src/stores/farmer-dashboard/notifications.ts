import { AxiosError } from "axios";
import { create } from "zustand";
import axiosInstance from "@/lib/axios";

export interface notificationListDataStore {
  data: {
    bid_status_count: {
      id: number;
    };
    data: string[];
  };
}

interface notificationListStore {
  data: notificationListDataStore | null;
  loading: boolean;
  error: string | null;
  fetchNotification: () => Promise<void>;
}

export const getFarmerNotification = create<notificationListStore>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchNotification: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axiosInstance.get(`farms/notifications`);
      set({ data: res.data, loading: false });
    } catch (err) {
      if (err instanceof AxiosError) {
        set({ error: err.message, loading: false });
      }
    }
  },
}));
