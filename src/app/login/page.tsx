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
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { useLogin } from "@/hooks/useLogin";

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
    <main className="px-4 py-24 flex justify-center">
      <Card className="w-full max-w-md py-8 bg-main">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>
            Não tem uma conta,{" "}
            <Link href="/register" className="underline text-black font-medium">
              crie uma nova
            </Link>
            .
          </CardDescription>
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
                        className="bg-white"
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
                        className="bg-white"
                        {...field}
                        autoComplete="current-password"
                        aria-describedby="password-help"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">Entrar</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </main>
  );
}
