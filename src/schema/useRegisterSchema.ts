import { z } from "zod";

export const useRegisterSchema = z.object({
  firstname: z.string().min(2, "O primeiro nome deve ter pelo menos 2 caracteres"),
  lastname: z.string().min(2, "O sobrenome deve ter pelo menos 2 caracteres"),
  username: z.string().min(3, "O nome de usuário precisa ter pelo menos 3 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().regex(/^\d{2,3}-\d{4,5}-\d{4}$/, "Telefone inválido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
})

export type UserRegisterData = z.infer<typeof useRegisterSchema>;