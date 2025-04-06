"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRegister } from "@/hooks/useRegister";
import {
  useRegisterSchema,
  UserRegisterData,
} from "@/schema/useRegisterSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function Register() {
  const form = useForm<UserRegisterData>({
    resolver: zodResolver(useRegisterSchema),
    defaultValues: {
      name: {
        firstname: "",
        lastname: "",
      },
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      phone: "",
      address: {
        number: 0,
        city: "",
        street: "",
        zipcode: "",
      },
    },
  });
  
  const registerMutation = useRegister();

  function onSubmit(values: UserRegisterData) {
    console.log("Valores recebidos:", values);
    // Remove confirmPassword com destruturação, mas ignora o aviso do ESLint
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...userData } = values;
    registerMutation.mutate(userData);
    form.reset();
  }

  return (
    <main className="px-4 py-24 flex justify-center">
      <Card className="w-155 py-8 bg-main">
        <CardHeader>
          <CardTitle className="font-bold text-2xl">Registre-se</CardTitle>
          <CardDescription>
            Já tem uma conta, faça{" "}
            <Link href="/login" className="underline text-black font-medium"> Login</Link>.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col lg:flex-row justify-between gap-4">
                <FormField
                  control={form.control}
                  name="name.firstname"
                  render={({ field }) => (
                    <FormItem className="lg:w-1/2 flex flex-col">
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Digite seu primeiro nome"
                          className="bg-white"
                          autoComplete="given-name"
                          aria-label="Primeiro nome"
                          aria-required="true"
                          aria-invalid={!!form.formState.errors.name?.firstname}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="name.lastname"
                  render={({ field }) => (
                    <FormItem className="lg:w-1/2 flex flex-col">
                      <FormLabel>Sobrenome</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Digite seu sobrenome"
                          className="bg-white"
                          autoComplete="family-name"
                          aria-label="Sobrenome"
                          aria-required="true"
                          aria-invalid={!!form.formState.errors.name?.lastname}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col lg:flex-row justify-between gap-4">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem className="lg:w-1/2 flex flex-col">
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Ex: joaosilva123"
                          className="bg-white"
                          autoComplete="username"
                          aria-label="Nome de usuário"
                          aria-required="true"
                          aria-invalid={!!form.formState.errors.username}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="lg:w-1/2 flex flex-col">
                      <FormLabel>Telefone</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="tel"
                          placeholder="Ex: 84-99999-1234"
                          className="bg-white"
                          autoComplete="tel"
                          aria-label="Telefone"
                          aria-required="true"
                          aria-invalid={!!form.formState.errors.phone}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="exemplo@email.com"
                        className="bg-white"
                        autoComplete="email"
                        aria-label="E-mail"
                        aria-required="true"
                        aria-invalid={!!form.formState.errors.email}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-col lg:flex-row justify-between gap-4">
                <FormField
                  control={form.control}
                  name="address.city"
                  render={({ field }) => (
                    <FormItem className="lg:w-1/2 flex flex-col">
                      <FormLabel>Cidade</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Digite sua cidade"
                          className="bg-white"
                          autoComplete="address-level2"
                          aria-label="Cidade"
                          aria-required="true"
                          aria-invalid={!!form.formState.errors.address?.city}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address.zipcode"
                  render={({ field }) => (
                    <FormItem className="lg:w-1/2 flex flex-col">
                      <FormLabel>CEP</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Ex: 59000-000"
                          className="bg-white"
                          autoComplete="postal-code"
                          aria-label="CEP"
                          aria-required="true"
                          aria-invalid={
                            !!form.formState.errors.address?.zipcode
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col lg:flex-row justify-between gap-4">
                <FormField
                  control={form.control}
                  name="address.street"
                  render={({ field }) => (
                    <FormItem className="lg:w-1/2 flex flex-col">
                      <FormLabel>Rua</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Digite o nome da rua"
                          className="bg-white"
                          autoComplete="address-line1"
                          aria-label="Rua"
                          aria-required="true"
                          aria-invalid={!!form.formState.errors.address?.street}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address.number"
                  render={({ field }) => (
                    <FormItem className="lg:w-1/2 flex flex-col">
                      <FormLabel>Número</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="number"
                          onChange={(e) =>
                            field.onChange(e.target.valueAsNumber)
                          }
                          value={field.value}
                          placeholder="Ex: 123"
                          className="bg-white"
                          aria-label="Número"
                          aria-required="true"
                          aria-invalid={!!form.formState.errors.address?.number}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col lg:flex-row justify-between gap-4">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="lg:w-1/2 flex flex-col">
                      <FormLabel>Senha</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="password"
                          placeholder="Digite uma senha segura"
                          className="bg-white"
                          autoComplete="new-password"
                          aria-label="Senha"
                          aria-required="true"
                          aria-invalid={!!form.formState.errors.password}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem className="lg:w-1/2 flex flex-col">
                      <FormLabel>Confirmar senha</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="password"
                          placeholder="Repita a senha digitada"
                          className="bg-white"
                          autoComplete="new-password"
                          aria-label="Confirmar senha"
                          aria-required="true"
                          aria-invalid={!!form.formState.errors.confirmPassword}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit">Cadastrar</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </main>
  );
}
