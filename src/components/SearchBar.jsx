import React from 'react';

export default function SearchBar() {
  return (
    <div className='flex w-full flex-grow border-2 bg-font1'>
      <input
        type='text'
        className='w-full flex-grow bg-white px-4 py-2 md:w-96'
        placeholder='Qual o mimo de hoje para seu anjinho ?'
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <button
        type='button'
        className='bg-white px-4 text-font2'
        onClick={() => searchValidation(search, setErrorMsg)}
      >
        Entrar
      </button>
    </div>
  );
}
