import React, { useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../App';

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const onSubmitHandler = async e => {
    try {
      e.preventDefault();
      setLoading(true);
      const response = await axios.post(backendUrl + '/api/user/admin', { email, password });
      if (response.data.success) {
        setToken(response.data.token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold mb-4">Painel Admin</h1>
        <form onSubmit={onSubmitHandler} action="">
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2">Email</p>
            <input
              onChange={e => setEmail(e.target.value)}
              value={email}
              className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none"
              type="email"
              placeholder="seuemail@email.com"
              required
            />
          </div>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2">Senha</p>
            <input
              onChange={e => setPassword(e.target.value)}
              value={password}
              className="rouded-md w-full px-3 py-2 border border-gray-300 outline-none"
              type="password"
              placeholder="Adicione Sua Senha"
              required
            />
          </div>
          <button className="mt-2 w-full py-2 px-4 rounded-md text-white bg-black cursor-pointer" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
