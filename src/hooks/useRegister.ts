import { useMutation } from "@tanstack/react-query";
import { registerUser } from "@/services/userService";

export const useRegister = () => {
  return useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      console.log("Usuário cadastrado com sucesso:", data);
    },
    onError: (error) => {
      console.error("Erro ao cadastrar usuário:", error);
    },
  });
};
