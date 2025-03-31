"use client"

import { Product } from "@/types/product";
import { useProducts } from "../hooks/useProducts";
import Image from "next/image";
import Logo from "@/assets/logo.svg";

export default function Home() {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) return <p>Carregando produtos...</p>;
  if (error) return <p>Erro ao carregar produtos.</p>;

  return (
    <div className="p-4 text-white">
      <Image src={Logo} alt="ddfd"/>
      {products?.map((product: Product) => (
        <div key={product.id} className="border p-4 rounded-md shadow-md">
          {/* Exibindo a imagem do produto */}
          <Image
            src={product.image} // URL da imagem do produto
            alt={product.title} // Texto alternativo
            width={200} // Largura da imagem
            height={200} // Altura da imagem
            className="object-contain w-full h-auto" // Responsividade
          />
          <h2 className="text-lg font-bold mt-2">{product.title}</h2>
          <p className="text-gray-700">Preço: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}
