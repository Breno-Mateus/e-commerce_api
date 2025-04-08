import { z } from "zod";

export const useRegisterSchema = z
  .object({
    email: z.string().email("Email inválido"),
    username: z.string().min(3, "O nome de usuário precisa ter pelo menos 3 caracteres"),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
    confirmPassword: z.string().min(6, "Confirme sua senha"),
    name: z.object({
        firstname: z.string().min(2, "O primeiro nome deve ter pelo menos 2 caracteres"),
        lastname: z.string().min(2, "O sobrenome deve ter pelo menos 2 caracteres"),
    }),
    address: z.object({
        city: z.string().min(2, "A cidade deve ter pelo menos 2 caracteres"),
        street: z.string().min(2, "A rua deve ter pelo menos 2 caracteres"),
        number: z.number().min(1, "O número deve ser maior que 0"),
        zipcode: z.string().regex(/^\d{5}-\d{3}$/, "CEP inválido (formato esperado: 00000-000)"),
    }),
    phone: z
      .string()
      .min(15, "Número inválido")
      .regex(/^\(\d{2}\)\s9\d{4}-\d{4}$/, "Formato inválido. Use (84) 90000-0000"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "As senhas não coincidem",
  });

export type UserRegisterData = z.infer<typeof useRegisterSchema>;
