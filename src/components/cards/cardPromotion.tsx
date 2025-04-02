import Image from "next/image";
import { Button } from "../ui/button";

export default function CardPromotion() {
  return(
    <div className="bg-black flex flex-col items-center gap-12 px-4 pt-20 lg:flex-row lg:px-40">
      <div className="flex flex-col items-center gap-4 text-center text-text-footer lg:items-start">
        <p className="font-semibold text-2xl">Pro.Beyond.</p>
        <h1 className="font-extralight text-7xl">IPhone 14 <span className="font-semibold">Pro</span></h1>
        <p className="font-medium text-lg">Criado para mudar tudo para melhor. Para todos</p>
        <Button className="bg-transparent border border-text-footer text-text-footer font-medium text-base w-48 h-14">compre agora</Button>
      </div>

      <Image 
        src="/IphoneMobile.png"
        alt="Iphone 14 Pro"
        width={321}
        height={289}
        className="lg:hidden"
      />

      <Image 
        src="/IphoneDesktop.png"
        alt="Iphone 14 Pro"
        width={406}
        height={632}
        className="hidden lg:block"
      />
    </div>
  );
}