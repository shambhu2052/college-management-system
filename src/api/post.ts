import { axiosClient } from "../config/axiosConfig";
import type { RegistrationpayloadType } from "../type";

export const createUser = async (data: RegistrationpayloadType) => {
  const res = await axiosClient.post("/user", data);
  return res?.data;
};
