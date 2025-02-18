import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import Cart from './Cart';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/frontend_assets/assets';
import { ShopContext } from '../context/ShopContext';

const PlaceOrder = () => {
  const [method, setMethod] = useState('boleto');
  const { navigate } = useContext(ShopContext);

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={'ENDEREÇO DE'} text2={'ENTREGA'} />
        </div>
        <div className="flex gap-3">
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Nome" />
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full " type="text" placeholder="Sobrenome" />
        </div>
        <div className="flex gap-3">
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="CEP" />
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full " type="text" placeholder="País" />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="email"
          placeholder="Endereço de email"
        />
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="Rua / Avenida"
        />
        <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Bairro" />
        <div className="flex gap-3">
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Cidade" />
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full " type="text" placeholder="Estado" />
        </div>
        <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Telefone" />
      </div>

      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={'MÉTODO DE'} text2={'PAGAMENTO'} />
          <div className="flex gap-3 flex-col lg:flex-row">
            <div onClick={() => setMethod('boleto')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'boleto' ? 'bg-green-400' : ''} `}></p>
              <img className="h-5 mx-4" src={assets.boleto_logo} alt="" />
            </div>

            <div onClick={() => setMethod('pix')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'pix' ? 'bg-green-400' : ''} `}></p>
              <img className="h-5 mx-1" src={assets.pix_logo} alt="" />
              <p className="text-gray-500 text-sm font-medium ">Pix</p>
            </div>

            <div onClick={() => setMethod('pp')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'pp' ? 'bg-green-400' : ''} `}></p>
              <p className="text-gray-500 text-sm font-medium mx-4">Parcelar Pagamento</p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button onClick={() => navigate('/orders')} className="bg-black text-white px-16 py-3 text-sm">
              FAZER PEDIDO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
