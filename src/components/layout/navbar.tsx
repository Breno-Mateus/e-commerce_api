import { Menu, Search } from "lucide-react";
import Logo from "./logo";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Input } from "../ui/input";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-4 py-6 border-b-[1px] border-text-input lg:px-40 lg:py-7">
      <Logo />

      <div className="hidden lg:flex items-center gap-2 bg-input rounded-md p-4 text-text-input w-md">
        <Search />
        <Input className="border-none shadow-none" placeholder="Procurar" />
      </div>

      <div className="hidden lg:flex items-center gap-4 text-2xl">
        <FaRegHeart />
        <GrCart />
        <Link href="/login"><FaRegUser /></Link>
      </div>

      <Sheet>
        <SheetTrigger className="lg:hidden">
          <Menu size={30} />
        </SheetTrigger>

        <SheetContent>
          <SheetTitle>Menu</SheetTitle>
        </SheetContent>
      </Sheet>
    </header>
  );
}
