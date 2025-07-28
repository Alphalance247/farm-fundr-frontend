import { AxiosError } from "axios";
import { create } from "zustand";
import axiosInstance from "@/lib/axios";

export interface userBankDataStore {
  bank_details: {
    bank_name: string;
    account_number: string;
    account_name: string;
  };
}

interface userBankStore {
  data: userBankDataStore | null;
  loading: boolean;
  error: string | null;
  fetchUserBank: () => Promise<void>;
}

export const getUserBankStore = create<userBankStore>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchUserBank: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axiosInstance.get(`/farms/banks/account`);
      set({ data: res.data, loading: false });
    } catch (err) {
      if (err instanceof AxiosError) {
        set({ error: err.message, loading: false });
      }
    }
  },
}));
