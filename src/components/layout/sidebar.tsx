import { Box, Heart, Settings, User } from "lucide-react"

export default function Sidebar() {
  return (
    <aside className="border-r border-black h-screen px-4 flex flex-col gap-12 bg-text-footer">
      <div className="border-b border-black flex flex-col gap-4 items-center py-4">
        <div className="bg-white rounded-full w-16 h-16"></div>
        <p className="font-bold">Breno Mateus</p>
      </div>

      <nav className="">
        <ul className="flex flex-col gap-4">
          <li className="flex gap-4 hover:bg-main rounded-sm p-2 hover:cursor-pointer transition-colors">
            <User />
            <p>Perfil</p>
          </li>

          <li className="flex gap-4 hover:bg-main rounded-sm p-2 hover:cursor-pointer transition-colors">
            <Box />
            <p>Pedidos</p>
          </li>

          <li className="flex gap-4 hover:bg-main rounded-sm p-2 hover:cursor-pointer transition-colors">
            <Heart />
            <p>Favoritos</p>
          </li>

          <li className="flex gap-4 hover:bg-main rounded-sm p-2 hover:cursor-pointer transition-colors">
            <Settings />
            <p>Configurações</p>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
