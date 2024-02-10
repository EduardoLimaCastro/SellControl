import { useEffect, useState } from "react";
import SupplierList, { SupplierListProps } from "../Components/SupplierList";

const SearchSuppliersSite = () => {
  const [items, setItems] = useState({} as SupplierListProps);

  useEffect(() => {
    fetch("https://brasilapi.com.br/api/cnpj/v1/34284090000101")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <section
      className="bg-[#EBF2FC] h-screen w-[100%] pt-[60px]"
      id="suppliers"
    >
      <p>Busca Cadastro</p>
      <SupplierList
        cnpj={items.cnpj}
        razao_social={items.razao_social}
        logradouro={items.logradouro}
        numero={items.numero}
        complemento={items.complemento}
        bairro={items.bairro}
        cep={items.cep}
        uf={items.uf}
        ddd_telefone_1={items.ddd_telefone_1}
      ></SupplierList>
    </section>
  );
};

export default SearchSuppliersSite;
