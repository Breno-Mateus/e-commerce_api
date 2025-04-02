import { IoMdMan, IoMdWoman } from "react-icons/io";
import { GiRing } from "react-icons/gi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import Link from "next/link";

export default function Subnav() {
  return (
    <div className="hidden bg-black px-40 py-2 text-text-footer lg:flex items-center justify-center border-b border-text-footer">
      <div className="border-r border-text-footer px-12">
        <Link href="/" className="flex gap-4 hover:opacity-80">
          <IoMdMan className="text-2xl" />
          <p className="text-base font-medium">Roupas Masculinas</p>
        </Link>
      </div>

      <div className="border-r border-text-footer px-12">
        <Link href="/" className="flex gap-4 hover:opacity-80">
          <IoMdWoman className="text-2xl" />
          <p className="text-base font-medium">Roupas Femininas</p>
        </Link>
      </div>

      <div className="border-r border-text-footer px-12">
        <Link href="/" className="flex gap-4 hover:opacity-80">
          <GiRing className="text-2xl" />
          <p>Joias</p>
        </Link>
      </div>

      <div className="px-12">
        <Link href="/" className="flex gap-4 hover:opacity-80">
          <IoPhonePortraitOutline className="text-2xl" />
          <p>Eletrônicos</p>
        </Link>
      </div>
    </div>
  );
}
