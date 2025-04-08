"use client";

import Logo from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import MaskedInput from "@/components/ui/maskedInput";
import { useRegister } from "@/hooks/useRegister";
import {
  useRegisterSchema,
  UserRegisterData,
} from "@/schema/useRegisterSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
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
    <main className="md:px-4 md:py-24 flex justify-center items-center min-h-screen">
      <Card className="w-full h-auto max-w-xl py-8 bg-white shadow-none border-white md:shadow-sm md:border-black">
        <div className="w-8 mx-6 py-1 px-1 border border-black">
          <Link href="/">
            <ArrowLeft />
          </Link>
        </div>
        <div className="flex justify-center">
          <Logo />
        </div>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Criação de conta</CardTitle>
          <CardDescription className="px-12">
            Cadastre-se rapidamente e acesse a plataforma ideal para suas
            compras.
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
                          className="bg-white border-black rounded-xs"
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
                          className="bg-white border-black rounded-xs"
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
                          className="bg-white border-black rounded-xs"
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
                        <MaskedInput
                          {...field}
                          placeholder="(99) 99999-9999"
                          format="(##) #####-####"
                          className="bg-white border-black rounded-xs"
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
                        className="bg-white border-black rounded-xs"
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
                          className="bg-white border-black rounded-xs"
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
                        <MaskedInput 
                          format="#####-###"
                          {...field}
                          type="text"
                          placeholder="Ex: 59000-000"
                          className="bg-white border-black rounded-xs"
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
                          className="bg-white border-black rounded-xs"
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
                          className="bg-white border-black rounded-xs"
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

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="Digite uma senha segura"
                        className="bg-white border-black rounded-xs"
                        autoComplete="new-password"
                        aria-label="Senha"
                        aria-required="true"
                        aria-invalid={!!form.formState.errors.password}
                      />
                    </FormControl>
                    <FormMessage />
                    <small>
                      A senha deve conter no mínimo 8 caracteres, uma letra
                      maiúscula, um número e um caractere especial entre:
                      !@#$%^*()_+?{}[].
                    </small>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirmar senha</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="Repita a senha digitada"
                        className="bg-white border-black rounded-xs"
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

              <Button type="submit" className="rounded-xs mt-8">
                Cadastrar
              </Button>
            </form>
          </Form>
        </CardContent>

        <CardFooter className="flex flex-col justify-center text-center gap-6">
          <CardDescription className="text-black text-xs">
            Ao criar uma conta, você concorda com os{" "}
            <Link href="" className="font-bold hover:underline">
              Termos de Uso{" "}
            </Link>
            e{" "}
            <Link href="" className="font-bold hover:underline">
              Política de Privacidade{" "}
            </Link>
            da Cyber.
          </CardDescription>

          <CardDescription className="text-black">
            Já tem uma conta?{" "}
            <Link href="/login" className="font-bold hover:underline">
              Entrar
            </Link>
          </CardDescription>
        </CardFooter>
      </Card>
    </main>
  );
}
