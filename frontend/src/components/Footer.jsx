import React from 'react';
import { assets } from '../assets/frontend_assets/assets';

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div className="">
          <img src={assets.logo} alt="" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Na MzModas, acreditamos que a moda deve ser acessível, estilosa e atemporal. Oferecemos peças de alta
            qualidade, seguindo as últimas tendências para que você se sinta incrível em qualquer ocasião.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">EMPRESA</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li className="">Home</li>
            <li>Sobre nós</li>
            <li>Entrega</li>
            <li>Política de Privacidade</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">ENTRE EM CONTATO</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+55 (49)999178291</li>
            <li>mzmodas@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2025 mzmodas.com - Todos os Direitos Reservados</p>
      </div>
    </div>
  );
};

export default Footer;
