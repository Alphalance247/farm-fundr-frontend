import { AxiosError } from "axios";
import { create } from "zustand";
import axiosInstance from "@/lib/axios";

export interface userKYCDataStore {
  kyc_percentage: number;
}

interface userKYCStore {
  data: userKYCDataStore | null;
  loading: boolean;
  error: string | null;
  fetchUserKYC: () => Promise<void>;
}

export const getKYCPercentageStore = create<userKYCStore>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchUserKYC: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axiosInstance.get(`accounts/kyc/status`);
      set({ data: res.data, loading: false });
    } catch (err) {
      if (err instanceof AxiosError) {
        set({ error: err.message, loading: false });
      }
    }
  },
}));
