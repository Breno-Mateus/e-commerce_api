import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { Button } from "../ui/button";

export default function CardProduct() {
  return (
    <div className="bg-white w-40 h-80 pt-6 px-3 flex flex-col items-center gap-2 rounded-md">
      <div className="flex justify-end w-full">
        <CiHeart className="text-2xl" />
      </div>

      <div className="w-24 h-24 bg-amber-200">
        <Image src="" alt="" className="" />
      </div>

      <div className="text-center flex flex-col gap-4">
        <p className="text-base font-medium line-clamp-2">
          Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)
        </p>
        <p className="text-2xl font-semibold">$900</p>
      </div>

      <Button className="text-[14px] font-medium py-3 w-full">Comprar</Button>
    </div>
  );
}
