import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import Cart from './Cart';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/frontend_assets/assets';
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';
import axios from 'axios';


const PlaceOrder = () => {
  const [method, setMethod] = useState('boleto');
  const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    neighborhood: '',
    city: '',
    state: '',
    cep: '',
    country: '',
    phone: ''
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData(data => ({ ...data, [name]: value }))

  }

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try {
      const orderItems = []
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(products.find(product => product._id === items))
            if (itemInfo) {
              itemInfo.size = item
              itemInfo.quantity = cartItems[items][item]
              orderItems.push(itemInfo)
            }
          }
        }
      }
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee
      }
      switch (method) {
        case 'boleto':
          const response = await axios.post(backendUrl + '/api/order/place', orderData, { headers: { token } })
          console.log(response.data);

          if (response.data.success) {
            setCartItems({})
            navigate('/orders')
          } else {
            toast.error(response.data.message)
          }
          break;
        default:
          break;
      }
    } catch (error) {

    }

  }

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={'ENDEREÇO DE'} text2={'ENTREGA'} />
        </div>
        <div className="flex gap-3">
          <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Nome" />
          <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} className="border border-gray-300 rounded py-1.5 px-3.5 w-full " type="text" placeholder="Sobrenome" />
        </div>
        <div className="flex gap-3">
          <input required onChange={onChangeHandler} name='cep' value={formData.cep} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="CEP" />
          <input required onChange={onChangeHandler} name='country' value={formData.country} className="border border-gray-300 rounded py-1.5 px-3.5 w-full " type="text" placeholder="País" />
        </div>
        <input required
          onChange={onChangeHandler} name='email' value={formData.email}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="email"
          placeholder="Endereço de email"
        />
        <input
          onChange={onChangeHandler} name='street' value={formData.street}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="Rua / Avenida"
        />
        <input required onChange={onChangeHandler} name='neighborhood' value={formData.neighborhood} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Bairro" />
        <div className="flex gap-3">
          <input required onChange={onChangeHandler} name='city' value={formData.city} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Cidade" />
          <input required onChange={onChangeHandler} name='state' value={formData.state} className="border border-gray-300 rounded py-1.5 px-3.5 w-full " type="text" placeholder="Estado" />
        </div>
        <input required onChange={onChangeHandler} name='phone' value={formData.phone} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Telefone" />
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
            <button type='submit' className="bg-black text-white px-16 py-3 text-sm">
              FAZER PEDIDO
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
