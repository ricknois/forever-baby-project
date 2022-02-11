import React, { useState, useEffect } from 'react';

export default function SearchBar({ placeholder, name, onClick }) {
  const [input, setInput] = useState('');

  return (
    <div className='flex w-full flex-grow border-2'>
      <input
        type='text'
        className='w-full flex-grow px-4 py-2 text-black md:w-96'
        placeholder={placeholder}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button
        type='button'
        className='bg-white px-4 text-sm font-bold text-font2'
        onClick={() => onClick(input)}
      >
        {name}
      </button>
    </div>
  );
}
