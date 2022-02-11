import React from 'react';
import Product from './Product';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Products({ title, detach, data }) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='mt-12 md:mt-16'>
      <span className='mb-6 flex justify-center'>
        <p className='text-xl font-bold text-white'>{title}</p>
        <p className='ml-1 text-xl font-bold text-font2'>{detach}</p>
      </span>
      <Slider {...settings}>
        {data.map((item, index) => (
          <Product data={item} key={index} />
        ))}
      </Slider>
    </div>
  );
}
