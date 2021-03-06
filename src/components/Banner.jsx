import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Banner({ data }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className='mx-7'>
      {data.map((index) => (
        <div
          className='h-bannerMH w-full bg-product md:h-bannerDH'
          key={index}
        ></div>
      ))}
    </Slider>
  );
}
