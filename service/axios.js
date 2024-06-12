import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: false,
});

export default axiosClient;
