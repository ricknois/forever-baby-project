import React from 'react';
import { RatingView } from 'react-simple-star-rating';
import Cart from '../assets/cart.png';

export default function Product({ data, onClick }) {
  return (
    <div className='h-96 w-44 bg-white md:w-64'>
      <div className='mb-5 h-48 bg-product'></div>
      <div className='mx-3'>
        <p className='text-sm font-bold text-font2'>{data.name}</p>
        <p className='mt-3 mb-3 text-back3'>{`R$ ${data.price
          .toString()
          .replace('.', ',')}`}</p>
        <div className='mb-3 flex justify-center'>
          <RatingView ratingValue={data.rate} size={23} />
        </div>
        <button
          type='button'
          onClick={() => onClick()}
          className='flex h-11 w-full bg-cart'
        >
          <div className='mx-2 flex h-full w-full items-center justify-center'>
            <img src={Cart} width={24} />
            <span className=' -ml-5 text-xs font-bold text-white md:ml-1 md:text-sm'>
              ADICIONAR AO CARRINHO
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}
