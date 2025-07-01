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

      console.log("🔐 Token found:", !!token);
      console.log("🌐 Request URL:", config.url);
      console.log("📤 Request method:", config.method);

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        console.log("✅ Authorization header added");
      } else {
        console.log("❌ No token found in cookies");
      }
    }
    return config;
  },
  (error) => {
    console.log("❌ Request interceptor error:", error);
    return Promise.reject(error);
  }
);

// Add response interceptor to log errors
axiosInstance.interceptors.response.use(
  (response) => {
    console.log("✅ Response received:", response.status, response.data);
    return response;
  },
  (error) => {
    console.log("❌ Response error:", {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
      config: error.config,
    });
    return Promise.reject(error);
  }
);

export default axiosInstance;
