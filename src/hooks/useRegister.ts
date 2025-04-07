import { useMutation } from "@tanstack/react-query";
import { registerUser } from "@/services/userService";
import { toast } from "sonner";

export const useRegister = () => {
  return useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      console.log("Usuário cadastrado com sucesso:", data);
      toast.success("Usuário cadastrado com sucesso!");
    },
    onError: (error) => {
      console.error("Erro ao cadastrar usuário:", error);
      toast.error("Erro ao cadastrar usuário!");
    },
  });
};
