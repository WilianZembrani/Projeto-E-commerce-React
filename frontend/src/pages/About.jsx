import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/frontend_assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const about = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'SOBRE'} text2={'NÓS'} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <h1>Quem Somos</h1>
          <p>
            A MzModas nasceu do desejo de oferecer peças de roupa que unissem estilo, conforto e qualidade. Acreditamos
            que cada pessoa tem uma personalidade única e, por isso, nossas coleções são desenvolvidas para valorizar a
            individualidade de quem as veste, sempre com um toque moderno e atemporal.
          </p>
          <p>
            Nosso compromisso é com a satisfação de nossos clientes e a responsabilidade socioambiental. Trabalhamos com
            fornecedores selecionados, priorizando materiais de alta qualidade e processos de produção sustentáveis.
            Assim, garantimos peças duradouras e que respeitam o meio ambiente.
          </p>
          <b className="text-gray-800">Nossa missão</b>
          <p>
            Nossa missão é oferecer roupas que unam qualidade, conforto e estilo, respeitando a individualidade de cada
            cliente. Acreditamos que a moda pode ser uma ferramenta de expressão pessoal e, por isso, buscamos inspirar
            cada pessoa a se sentir confiante e única ao vestir nossas roupas.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={'POR QUE'} text2={'NOS ESCOLHER'} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-lg">Qualidade Garantida:</b>
          <p className="text-gray-600">
            Aqui a qualidade vem em primeiro lugar. Trabalhamos apenas com fornecedores selecionados, que compartilham
            do nosso compromisso com peças bem-feitas, confortáveis e duráveis.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-lg">Atendimento Excepcional:</b>
          <p className="text-gray-600 text-0.5xl">
            A satisfação dos nossos clientes é a nossa prioridade. Nossa equipe está sempre pronta para oferecer um
            atendimento ágil, atencioso e personalizado, garantindo a melhor experiência de compra possível.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default about;
