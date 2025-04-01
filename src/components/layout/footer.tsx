import Logo from "../logo";
import { FaTwitter, FaFacebookF, FaTiktok, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-text-footer text-sm flex flex-col gap-8 items-center text-center py-12 px-8 lg:px-40 lg:py-24 lg:items-start lg:text-start">
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:w-full lg:justify-between">
        <div className="flex flex-col items-center gap-8 lg:items-start lg:w-96">
          <Logo bg="white" />

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
            iure voluptatem incidunt nemo eos fugiat nostrum ab minima!
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-base text-white">Serviços</h3>
          <ul className="flex flex-col gap-4">
            <li className="hover:underline hover:cursor-pointer">
              Programa de bônus
            </li>
            <li className="hover:underline hover:cursor-pointer">Gift cards</li>
            <li className="hover:underline hover:cursor-pointer">
              Crédito e pagamentos
            </li>
            <li className="hover:underline hover:cursor-pointer">
              Contratos de serviço
            </li>
            <li className="hover:underline hover:cursor-pointer">
              Conta sem dinheiro
            </li>
            <li className="hover:underline hover:cursor-pointer">Pagamento</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-base text-white">
            Assistência ao comprador
          </h3>
          <ul className="flex flex-col gap-4">
            <li className="hover:underline hover:cursor-pointer">
              Encontrar um pedido
            </li>
            <li className="hover:underline hover:cursor-pointer">
              Condições de entrega
            </li>
            <li className="hover:underline hover:cursor-pointer">
              Troca e devolução de mercadorias
            </li>
            <li className="hover:underline hover:cursor-pointer">Garantia</li>
            <li className="hover:underline hover:cursor-pointer">
              Perguntas frequentes
            </li>
            <li className="hover:underline hover:cursor-pointer">
              Condições de uso do site
            </li>
          </ul>
        </div>
      </div>

      <div className="flex gap-6 text-2xl">
        <FaTwitter className="hover:opacity-75 hover:cursor-pointer transition-opacity" />
        <FaFacebookF className="hover:opacity-75 hover:cursor-pointer transition-opacity" />
        <FaTiktok className="hover:opacity-75 hover:cursor-pointer transition-opacity" />
        <FaInstagram className="hover:opacity-75 hover:cursor-pointer transition-opacity" />
      </div>
    </footer>
  );
}
