import { axiosClient } from "../config/axiosConfig";

export const getUser = async () => {
  const data = await axiosClient.get("/user");
  return data?.data;
};
