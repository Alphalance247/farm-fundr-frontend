// lib/axios.ts
import axios from "axios";
import { environment } from "@/env/env.local";

const axiosInstance = axios.create({
  baseURL: environment?.baseUrl, //base url
  withCredentials: true, //since am saving out access token on the server this is neccessary please caution yourself and dont delete it
});

export default axiosInstance;
