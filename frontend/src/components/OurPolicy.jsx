import React from 'react';
import { assets } from '../assets/frontend_assets/assets';

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm?gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="" />
        <p className="font-simibold">Política De Troca</p>
        <p className="text-gray-400">Oferecemos uma política de troca sem complicações</p>
      </div>
    </div>
  );
};

export default OurPolicy;
