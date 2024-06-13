import axiosClient from "./axios";
import { getSession } from "next-auth/react";

const getHeaders = async () => {
  const session = await getSession();
  let headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${session?.user?.token}`,
  };
  return headers;
};
export const api = async ({ type = "get", body, url }) => {
  try {
    const response = await axiosClient.request({
      url,
      method: type,
      data: body,
      headers: await getHeaders(),
    });
    return { response: response?.data, responseHeaders: response?.headers };
  } catch (err) {
    return {
      error: err,
    };
  }
};
