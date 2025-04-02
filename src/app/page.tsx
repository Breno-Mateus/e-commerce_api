"use client"

import CardProduct from "@/components/cards/cardProduct";
import CardPromotion from "@/components/cards/cardPromotion";
import Subnav from "@/components/layout/subnav";
import SubnavMobile from "@/components/layout/subnavMobile";
import PaginationComponent from "@/components/pagination/paginatioComponent";
import { useProducts } from "@/hooks/useProducts";
import { Product } from "@/types/product";
import { useState } from "react";

export default function Home() {
  
  const { data: products, isLoading, isError } = useProducts();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Número de produtos por página
  const totalPages = Math.ceil(20 / itemsPerPage); // A Fake Store API tem 20 produtos

  if (isLoading) return <p>Carregando produtos...</p>;
  if (isError) return <p>Erro ao carregar produtos.</p>;

  // Calcula os produtos a serem exibidos na página atual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <main className="">
      <Subnav />
      <CardPromotion />
      <div className="lg:hidden py-16">
        <SubnavMobile />
      </div>

      <div className="bg-main flex flex-wrap gap-4 justify-center py-8 px-4">
        {displayedProducts.map((product: Product) => (
          <CardProduct key={product.id} product={product} />
        ))}

        <PaginationComponent 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={setCurrentPage} 
        />
      </div>
    </main>
  );
}
