import { useMutation } from "@tanstack/react-query";
import { loginUser } from "@/services/authService";
import { toast } from "sonner";
import { useAuthStore } from "@/store/useAuthStore";

export const useLogin = () => {
  const setToken = useAuthStore((state) => state.setToken);

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      setToken(data.token);
      toast.success("Login bem-sucedido!")
      console.log("Login bem-sucedido!", data.token);
    },
    onError: (error) => {
      console.error("Erro ao fazer login:", error);
      toast.error("Erro ao fazer login!");
    },
  });
};
