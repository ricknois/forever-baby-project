import React from 'react';
import { Link } from 'react-router-dom';
import Insta from '../assets/Insta.png';
import { networks, categories } from '../utils/helpers';
import Pagamentos from '../assets/pagamentos.png';

export default function Footer() {
  return (
    <div>
      <div className='flex h-80  w-full flex-col items-center bg-product md:h-72'>
        <span className='mt-7 text-base font-bold text-font2'>
          VISITE NOSSAS REDES SOCIAIS
        </span>
        <div className='flex '>
          {networks.map((item, index) => (
            <Link
              key={index}
              to={'/'}
              onClick={() => {
                window.location.href = item.link;
              }}
              target='_blank'
            >
              <img className='m-1' src={item.logo} />
            </Link>
          ))}
        </div>
        <div className='mx-8 mt-9 flex w-full flex-wrap justify-center'>
          {categories.map((item, index) => (
            <span
              className='mx-4 text-sm font-normal text-font2 md:mx-8'
              key={index}
            >
              {item}
            </span>
          ))}
        </div>
        <div className='mt-8 flex flex-col items-center '>
          <span className='text-base font-bold text-font1'>
            FORMAS DE PAGAMENTO
          </span>
          <img
            alt='
          formas de pagamento'
            src={Pagamentos}
          />
        </div>
      </div>
      <div className='flex h-44 w-full  flex-col bg-white text-center text-xs text-footer md:h-36 md:px-40'>
        <span className='mt-5'>2021 www.foreverliss.com.br</span>
        <span>Todos os direitos reservados.</span>
        <span className='mt-3'>
          Proibida reprodução total ou parcial. IMPORTANTE! Os preços e estoque
          sujeitos a alterações e podem variar sem aviso prévio. Em caso de
          divergência no valor do produto, irá prevalecer sempre o valor do
          carrinho de compras.
        </span>
        <span>
          FOREVER COMPANY COSMETICOS LTDA / www.foreverliss.com.br / Rua José
          Bonifácio, N° 690 Lençóis Paulista - SP Cep: 18683-420 | CNPJ:
          08.958.817/0001-89 | Inscrição Estadual: 416.118.979.112
        </span>
      </div>
    </div>
  );
}
