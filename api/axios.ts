import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_NOWTED_API,
  headers: { "Content-Type": "application/json" },
});

export default axiosInstance;
