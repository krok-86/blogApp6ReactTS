// instance axios + baseURL

import axios from "axios";
import { LocalStorageUtil } from "../utils/localStorage/localStorage";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3003/blog",
});

axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = LocalStorageUtil.getItem("token");
  return config;
});
export default axiosInstance;
