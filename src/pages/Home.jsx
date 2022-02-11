import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import { products } from '../utils/helpers';
import Products from '../components/Products';

export default function Home() {
  return (
    <div className='bg-back1'>
      <Header />
      <Banner data={[0, 0, 0, 0, 0, 0, 0]} />
      <Products title='FOREVER BABY' detach='DESTAQUES' data={products} />
      <Products title='FOREVER BABY' detach='DESTAQUES' data={products} />
    </div>
  );
}
