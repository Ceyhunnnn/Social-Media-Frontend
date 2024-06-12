import axiosClient from "./axios";

export const api = async ({ type = "get", body, url }) => {
  try {
    const response = await axiosClient.request({
      url,
      method: type,
      data: body,
    });
    return { response: response?.data, responseHeaders: response?.headers };
  } catch (err) {
    return {
      error: err,
    };
  }
};
