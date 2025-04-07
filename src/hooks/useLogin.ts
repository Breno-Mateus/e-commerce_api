import { useMutation } from "@tanstack/react-query";
import { loginUser } from "@/services/authService";
import { toast } from "sonner";

export const useLogin = () => {
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      toast.success("Login bem-sucedido!")
      console.log("Login bem-sucedido!", data.token);
    },
    onError: (error) => {
      console.error("Erro ao fazer login:", error);
      toast.error("Erro ao fazer login!");
    },
  });
};
