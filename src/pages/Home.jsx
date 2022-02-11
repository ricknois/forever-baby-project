import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import {} from '../utils/helpers';

export default function Home() {
  return (
    <div className='bg-back1'>
      <Header />
      <Banner data={[0, 0, 0, 0, 0, 0, 0]} />
    </div>
  );
}
