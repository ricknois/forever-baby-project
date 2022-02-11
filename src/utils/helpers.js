export const searchValidation = (input, stateSetter) => {
  if (input.length < 3) {
    return stateSetter('O formulário deve haver ao menos 3 caracteres');
  } else if (/[^0-9a-zA-Z]/.test(input)) {
    return stateSetter('O formulário não pode conter caracteres especiais');
  }
};

export const categories = [
  'Perfume infantil',
  'Sabonetes',
  'Pós banho',
  'Assaduras',
  'Hidratantes',
  'Lenços umedecidos',
];
