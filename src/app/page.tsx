import CardProduct from "@/components/cards/cardProduct";
import Subnav from "@/components/layout/subnav";
import SubnavMobile from "@/components/layout/subnavMobile";

export default function Home() {
  return (
    <main className="bg-main">
      <SubnavMobile />
      <Subnav />
      Página home
      <CardProduct />
    </main>
  );
}
