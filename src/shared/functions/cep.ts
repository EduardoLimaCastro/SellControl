export const insertMaskInCep = (cep: Number) => {
  const cepString = cep.toString();
  return cepString.replace(/(\d{2})(\d{3})(\d{3})/g, "$1.$2-$3");
};
