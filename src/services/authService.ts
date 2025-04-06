import { UserLoginData } from "@/schema/useLoginSchema";
import axios from "axios";

export const loginUser = async ({ username, password }: UserLoginData) => {
  const response = await axios.post("https://fakestoreapi.com/auth/login", {
    username,
    password,
  });

  return response.data;
};
