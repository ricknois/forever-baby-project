import React from 'react';
import SearchBar from './SearchBar';
import { sendEmail } from '../utils/helpers';
import Alerts from './Alerts';
import { useAlert } from 'react-alert';

export default function Newsletter() {
  const alert = useAlert();

  const emailValidation = async (input) => {
    if (/\S+@\S+\.\S+/.test(input)) {
      const result = await sendEmail(input);
      return alert.show(result.Mensagem, { type: 'info' });
    }
    return alert.show('e-mail incorreto', { type: 'error' });
  };

  return (
    <div className='mt-12 flex h-48 flex-col items-center bg-back2 text-white md:mt-14'>
      <span className='mt-9 text-2xl font-bold text-white'>
        NEWSLETTER FOREVER BABY
      </span>
      <span className='mb-3 text-sm font-normal'>
        Cadastre-se agora para não perder nenhuma promoção
      </span>
      <div className='h-12 w-96 md:w-newsInputDW'>
        <SearchBar
          name='CADASTRAR'
          placeholder='Digite aqui o seu melhor e-mail'
          onClick={emailValidation}
        />
      </div>
    </div>
  );
}
