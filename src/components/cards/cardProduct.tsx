import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { Button } from "../ui/button";
import { Product } from "@/types/product";

interface PropsCardProduct {
  product: Product;
}

export default function CardProduct({ product } : PropsCardProduct) {
  return (
    <div className="bg-white w-40 h-80 py-6 px-3 flex flex-col items-center justify-between gap-2 rounded-md lg:w-67 lg:h-108">
      <div className="flex justify-end w-full">
        <CiHeart className="text-2xl lg:text-3xl" />
      </div>

      <div className="lg:hidden w-24 h-24">
        <Image src={product.image} alt={product.description} width={96} height={96} className="w-24 h-24" />
      </div>

      <div className="hidden lg:block w-40 h-40">
        <Image src={product.image} alt={product.description} width={96} height={96} className="w-40 h-40" />
      </div>

      <div className="text-center flex flex-col gap-4">
        <p className="text-base font-medium line-clamp-2">
          {product.title}
        </p>
        <p className="text-2xl font-semibold">R${product.price}</p>
      </div>

      <Button className="text-[14px] font-medium py-3 w-full">Comprar</Button>
    </div>
  );
}
