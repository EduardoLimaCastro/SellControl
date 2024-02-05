export const links = [
  {
    name: "Home",
    hash: "#home",
    link: "home",
  },
  {
    name: "Fornecedores",
    hash: "#suppliers",
    link: "suppliers",
  },
] as const;

export const sidelinks = [
  {
    secao: "Fornecedores",
    subsecao: "Dashboard",
    to: "dashboard",
  },
  {
    secao: "Fornecedores",
    subsecao: "Cadastro",
    to: "cadastro",
  },
  {
    secao: "Fornecedores",
    subsecao: "Consulta",
    to: "consulta",
  },
];
