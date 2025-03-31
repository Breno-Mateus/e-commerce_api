import Logo from "../logo";
import { FaTwitter, FaFacebookF, FaTiktok, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-bg-black text-text-footer text-sm flex flex-col gap-8 items-center text-center py-12 px-8">
      <Logo bg="white" />

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat iure
        voluptatem incidunt nemo eos fugiat nostrum ab minima!
      </p>

      <div className="flex flex-col gap-4">
        <h3 className="font-semibold text-base text-white">Serviços</h3>
        <ul className="flex flex-col gap-4">
          <li>Programa de bônus</li>
          <li>Gift cards</li>
          <li>Crédito e pagamentos</li>
          <li>Contratos de serviço</li>
          <li>Conta sem dinheiro</li>
          <li>Pagamento</li>
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="font-semibold text-base text-white">
          Assistência ao comprador
        </h3>
        <ul className="flex flex-col gap-4">
          <li>Encontrar um pedido</li>
          <li>Condições de entrega</li>
          <li>Troca e devolução de mercadorias</li>
          <li>Garantia</li>
          <li>Perguntas frequentes</li>
          <li>Condições de uso do site</li>
        </ul>
      </div>

      <div className="flex gap-6 text-2xl">
        <FaTwitter />
        <FaFacebookF />
        <FaTiktok />
        <FaInstagram />
      </div>
    </footer>
  );
}
