import axios from "axios";
import { getSession } from "next-auth/react";

export const getHeaders = async () => {
  const session = await getSession();
  let headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${session?.user?.token}`,
  };
  return headers;
};

const axiosClient = await axios.create({
  baseURL: process.env.API_URL,
  headers: await getHeaders(),
  withCredentials: false,
});

export default axiosClient;
