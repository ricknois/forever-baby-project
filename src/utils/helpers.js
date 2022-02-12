import Insta from '../assets/Insta.png';
import Face from '../assets/Face.png';
import Yt from '../assets/Yt.png';
import Tik from '../assets/tik.png';

export const searchValidation = (input, stateSetter) => {
  if (input.length < 3) {
    return stateSetter('O formulário deve haver ao menos 3 caracteres');
  } else if (/[^0-9a-zA-Z]/.test(input)) {
    return stateSetter('O formulário não pode conter caracteres especiais');
  }
};

export const sendEmail = async (email) => {
  const response = await fetch(
    'https://foreverliss1.websiteseguro.com/teste-dev/newsletter.php',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ email: email }),
    }
  );
  const json = await response.json();
  return json;
};

export const categories = [
  'Perfume infantil',
  'Sabonetes',
  'Pós banho',
  'Assaduras',
  'Hidratantes',
  'Lenços umedecidos',
];

export const networks = [
  { logo: Insta, link: 'https://www.instagram.com/foreverliss/' },
  { logo: Face, link: 'https://www.facebook.com/foreverliss' },
  { logo: Yt, link: 'https://www.youtube.com/c/ForeverLissOficial' },
  { logo: Tik, link: 'https://www.tiktok.com/@foreverlissprofessional' },
];

export const products = [
  { name: 'Lorem ipsum', price: 99.99, rate: 5 },
  { name: 'Lorem ipsum', price: 99.99, rate: 4 },
  { name: 'Lorem ipsum', price: 99.99, rate: 2 },
  { name: 'Lorem ipsum', price: 99.99, rate: 3 },
  { name: 'Lorem ipsum', price: 99.99, rate: 1 },
  { name: 'Lorem ipsum', price: 99.99, rate: 5 },
];
