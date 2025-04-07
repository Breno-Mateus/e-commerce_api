"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginSchema, UserLoginData } from "@/schema/useLoginSchema";

import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { useLogin } from "@/hooks/useLogin";
import Logo from "@/components/layout/logo";
import { ArrowLeft } from "lucide-react";

export default function Login() {
  const form = useForm<UserLoginData>({
    resolver: zodResolver(useLoginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { mutate } = useLogin();

  function onSubmit(values: UserLoginData) {
    console.log("Login data:", values);
    mutate(values);
    form.reset();
  }

  return (
    <main className="md:px-4 md:py-24 flex justify-center items-center min-h-screen">
      <Card className="w-full h-auto max-w-md py-8 bg-white shadow-none border-white md:shadow-sm md:border-black">
        <div className="w-8 mx-6 py-1 px-1 border border-black">
          <Link href="/">
            <ArrowLeft />
          </Link>
        </div>
        <div className="flex justify-center">
          <Logo />
        </div>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Identifique-se</CardTitle>
          <CardDescription>Digite seu e-mail e senha</CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Digite seu username"
                        className="bg-white border-black rounded-xs"
                        {...field}
                        autoComplete="username"
                        aria-describedby="username-help"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Digite sua senha"
                        className="bg-white border-black rounded-xs"
                        {...field}
                        autoComplete="current-password"
                        aria-describedby="password-help"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="rounded-xs my-8">
                Entrar
              </Button>
            </form>
          </Form>
        </CardContent>

        <CardFooter className="justify-center">
          <CardDescription className="text-black">
            Primeira vez na Cyber?{" "}
            <Link href="/register" className="font-bold hover:underline">
              Criar conta
            </Link>
          </CardDescription>
        </CardFooter>
      </Card>
    </main>
  );
}
