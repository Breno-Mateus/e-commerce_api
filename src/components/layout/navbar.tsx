import { Menu } from "lucide-react";
import Logo from "../logo";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";

export default function Navbar() {
  return (
    <header className="flex justify-between px-4 py-6">
      <Logo />

      <Sheet>
        <SheetTrigger>
          <Menu size={30} />
        </SheetTrigger>

        <SheetContent>
          <SheetTitle>Menu</SheetTitle>
        </SheetContent>
      </Sheet>
    </header>
  );
}
