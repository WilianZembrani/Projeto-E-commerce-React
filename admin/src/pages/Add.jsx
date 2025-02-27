import React, { useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Men');
  const [subCategory, setSubCategory] = useState('Topwear');
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();


      formData.append('name', name),
        formData.append('description', description),
        formData.append('price', price),
        formData.append('category', category),
        formData.append('subCategory', subCategory),
        formData.append('bestseller', bestseller),
        formData.append('sizes', JSON.stringify(sizes))

      image1 && formData.append('image1', image1),
        image2 && formData.append('image2', image2),
        image3 && formData.append('image3', image3),
        image4 && formData.append('image4', image4)



      const response = await axios.post(backendUrl + "/api/product/add", formData, { headers: { token } })
      console.log("Resposta da API:", response.data); // Veja o que a API retorna
      if (response.data.success) {
        toast.success(response.data.message)
        setName('')
        setDescription('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice('')
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.error();
      toast.error(error.message)

    }
  }

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-3">
      <div>
        <p className="mb-2">Enviar Imagem</p>
        <div className="flex gap-2">
          <label htmlFor="image1">
            <img
              className="w-25 cursor-pointer"
              src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
              alt=""
            />
            <input onChange={e => setImage1(e.target.files[0])} type="file" id="image1" hidden />
          </label>
          <label htmlFor="image2">
            <img
              className="w-25 cursor-pointer"
              src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}
              alt=""
            />
            <input onChange={e => setImage2(e.target.files[0])} type="file" id="image2" hidden />
          </label>
          <label htmlFor="image3">
            <img
              className="w-25 cursor-pointer"
              src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}
              alt=""
            />
            <input onChange={e => setImage3(e.target.files[0])} type="file" id="image3" hidden />
          </label>
          <label htmlFor="image4">
            <img
              className="w-25 cursor-pointer"
              src={!image4 ? assets.upload_area : URL.createObjectURL(image4)}
              alt=""
            />
            <input onChange={e => setImage4(e.target.files[0])} type="file" id="image4" hidden />
          </label>
        </div>
      </div>
      <div className="w-full">
        <p className="mb-2">Nome do Produto</p>
        <input
          onChange={e => setName(e.target.value)}
          value={name}
          className="w-full max-w-[600px] px-3 py-2"
          type="text"
          placeholder="Digite aqui"
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Descrição do produto</p>
        <textarea
          onChange={e => setDescription(e.target.value)}
          value={description}
          className="w-full max-w-[600px] px-3 py-2"
          type="text"
          placeholder="Escreva a descrição aqui "
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">Categoria do produto</p>
          <select onChange={e => setCategory(e.target.value)} value={category} className="w-full px-3 py-2">
            <option value="Men">Homen</option>
            <option value="Women">Mulher</option>
            <option value="Kids">Criança</option>
          </select>
        </div>
        <div>
          <p className="mb-2">SubCategoria</p>
          <select onChange={e => setSubCategory(e.target.value)} value={subCategory} className="w-full px-3 py-2">
            <option value="Topwear">Camisas, blusas...</option>
            <option value="Bottomwear">Calças, shorts, saias...</option>
            <option value="Winterwear">Casacos, Agasalhos...</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Preço do produto</p>
          <input
            onChange={e => setPrice(e.target.value)}
            value={price}
            className="w-full px-3 py-2 sm:w-[120px]"
            placeholder="25"
            type="Number"
          />
        </div>
      </div>

      <div>
        <p className="mb-2">Tamanho do produto</p>
        <div className="flex gap-3">
          <div
            onClick={() =>
              setSizes(prev => prev.includes('PP') ? prev.filter(item => item !== 'PP') : [...prev, 'PP'])}>
            <p className={`${sizes.includes('PP') ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>
              PP
            </p>
          </div>
          <div
            onClick={() => setSizes(prev => prev.includes('P') ? prev.filter(item => item !== 'P') : [...prev, 'P'])}>
            <p className={`${sizes.includes('P') ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>P</p>
          </div>
          <div
            onClick={() => setSizes(prev => prev.includes('M') ? prev.filter(item => item !== 'M') : [...prev, 'M'])}>
            <p className={`${sizes.includes('M') ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>M</p>
          </div>
          <div
            onClick={() => setSizes(prev => prev.includes('G') ? prev.filter(item => item !== 'G') : [...prev, 'G'])}>
            <p className={`${sizes.includes('G') ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>G</p>
          </div>
          <div
            onClick={() =>
              setSizes(prev => prev.includes('GG') ? prev.filter(item => item !== 'GG') : [...prev, 'GG'])}>
            <p className={`${sizes.includes('GG') ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>
              GG
            </p>
          </div>
          <div
            onClick={() =>
              setSizes(prev => prev.includes('2G') ? prev.filter(item => item !== '2G') : [...prev, '2G'])}>
            <p className={`${sizes.includes('2G') ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>
              2G
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        <input onChange={() => setBestseller(prev => !prev)} checked={bestseller} type="checkbox" name="" id="bestseller" />
        <label className="cursor-pointer" htmlFor="bestseller">
          Adicionar aos mais vendidos
        </label>
      </div>
      <button type="submit" className="w-28 py-3 mt-4 bg-black text-white cursor-pointer">
        Adicionar
      </button>
    </form>
  );
};

export default Add;
