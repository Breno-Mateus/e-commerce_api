import { UserRegisterData } from "@/schema/useRegisterSchema";
import axios from "axios";

export type UserDataToSend = Omit<UserRegisterData, "confirmPassword">;

export const registerUser = async (userData: UserDataToSend) => {
  const response = await axios.post("https://fakestoreapi.com/users", userData);
  return response.data;
};
