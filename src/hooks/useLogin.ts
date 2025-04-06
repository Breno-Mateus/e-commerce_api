import { useMutation } from "@tanstack/react-query";
import { loginUser } from "@/services/authService";

export const useLogin = () => {
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      console.log("Login bem-sucedido!", data.token);
    },
    onError: (error) => {
      console.error("Erro ao fazer login:", error);
    },
  });
};
