import SupplierItem from "./SupplierItem";

export type SupplierListProps = {
  cnpj: string;
  razao_social: string;
  municipio: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cep: string;
  uf: string;
  ddd_telefone_1: string;
};

export default function SupplierList(props: SupplierListProps) {
  if (!props.cnpj) {
    return (
      <div>
        <p>Não há Fornecedores cadastrados no sistema</p>
      </div>
    );
  }

  return (
    <>
      <SupplierItem
        cnpj={props.cnpj}
        razao_social={props.razao_social}
        cidade={props.municipio}
        logradouro={props.logradouro}
        numero={props.numero}
        complemento={props.complemento}
        bairro={props.bairro}
        cep={props.cep}
        uf={props.uf}
        ddd_telefone_1={props.ddd_telefone_1}
      ></SupplierItem>
    </>
  );
}
