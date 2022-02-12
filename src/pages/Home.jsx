import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import { products } from '../utils/helpers';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className='bg-back1'>
      <Header />
      <Banner data={[0, 0, 0, 0, 0, 0, 0]} />
      <Products title='FOREVER BABY' detach='DESTAQUES' data={products} />
      <Products title='FOREVER BABY' detach='DESTAQUES' data={products} />
      <Newsletter />
      <Footer />
    </div>
  );
}
