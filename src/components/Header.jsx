import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-forever-liss-baby 1.png';
import { searchValidation, categories } from '../utils/helpers';
import People from '../assets/people.png';
import Cart from '../assets/cart.png';
import SearchBar from './SearchBar';

export default function Header() {
  const [search, setSearch] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    errorHandler();
  }, [errorMsg]);

  const errorHandler = () => {
    if (errorMsg.length > 1) {
    }
  };

  return (
    <div className=''>
      <div className='flex h-16 items-center bg-back1 pl-3 md:h-32 md:pl-7'>
        <div class='mr-2 flex flex-col space-y-1  md:hidden'>
          <div class='h-1 w-7 bg-white'></div>
          <div class='h-1 w-7 bg-white'></div>
          <div class='h-1 w-7 bg-white'></div>
        </div>
        <Link to='/'>
          <img className='w-20 md:mr-16 md:w-40' src={logo} alt='logo' />
        </Link>
        <div className='hidden flex-grow md:flex'>
          <SearchBar
            placeholder='Qual o mimo de hoje para seu anjinho ?'
            name='BUSCAR'
          />
        </div>

        <div className='mr-5 flex flex-grow justify-end md:ml-14 md:mr-10 md:flex-grow-0'>
          <div className='flex flex-col items-center'>
            <div className='flex h-10 w-10 items-center justify-center rounded-full bg-back2'>
              <img src={People} alt='logo' className='w-7' />
            </div>
            <span className=' hidden text-center text-xs md:flex'>
              Minha conta
            </span>
          </div>

          <span className='ml-5' />

          <div className='flex flex-col items-center'>
            <div className='flex h-10 w-10 items-center justify-center rounded-full bg-back2'>
              <img src={Cart} alt='logo' className='w-8' />
            </div>
            <span className=' hidden text-center text-xs md:flex'>
              Carrinho
            </span>
          </div>
        </div>
      </div>
      <div className='md:hidden'>
        <SearchBar
          placeholder='Qual o mimo de hoje para seu anjinho ?'
          name='BUSCAR'
        />
      </div>
      <div className='hidden items-center justify-around bg-back2 md:flex'>
        {categories.map((item, index) => (
          <span key={index} className='text-base font-bold text-white'>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
