import React from 'react';
import Product from './Product';
import Slider from 'react-slick';
import { useAlert } from 'react-alert';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Products({ title, detach, data }) {
  const alert = useAlert();
  const addToCart = () => {
    return alert.show('Adicionado ao carrinho', { type: 'success' });
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className='mt-12 w-full md:mt-16'>
      <span className='mb-6 flex justify-center'>
        <p className='text-xl font-bold text-white'>{title}</p>
        <p className='ml-1 text-xl font-bold text-font2'>{detach}</p>
      </span>
      <div className=''>
        <Slider {...settings} className='mx-7 md:mx-12'>
          {data.map((item, index) => (
            <Product data={item} key={index} onClick={addToCart} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
