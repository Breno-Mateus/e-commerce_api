import CardSubnav from "../cards/cardSubnav";
import { IoMdMan, IoMdWoman } from "react-icons/io";
import { GiRing } from "react-icons/gi";
import { IoPhonePortraitOutline } from "react-icons/io5";


export default function SubnavMobile() {
  return(
    <div className="flex flex-wrap gap-4 items-center justify-center lg:hidden">
      <CardSubnav icon={<IoMdMan />} category="Roupas Masculinas" href="/"/>
      <CardSubnav icon={<IoMdWoman />} category="Roupas Femininas" href="/"/>
      <CardSubnav icon={<GiRing />} category="Joias" href="/"/>
      <CardSubnav icon={<IoPhonePortraitOutline />} category="Eletrônicos" href="/"/>
    </div>
  );
}