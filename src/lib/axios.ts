// lib/axios.ts
import axios from "axios";
import { environment } from "@/env/env.local";

const axiosInstance = axios.create({
  baseURL: environment?.baseUrl, //base url
});

// Add request interceptor to include Authorization header
axiosInstance.interceptors.request.use(
  (config) => {
    // Get token from cookies (this will work on the client side)
    if (typeof window !== "undefined") {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("access="))
        ?.split("=")[1];

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      if (typeof window !== "undefined") {
        // Clear cookies
        document.cookie =
          "access=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

        // Clear localStorage
        localStorage.removeItem("fullname");
        localStorage.removeItem("user_type");
        localStorage.removeItem("user");

        // Dispatch custom event for other components to listen to
        window.dispatchEvent(new CustomEvent("sessionConflict"));

        // Redirect to login page
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

// Add response interceptor to log errors
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
