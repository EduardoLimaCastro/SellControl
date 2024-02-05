import SupplierItem from "./SupplierItem";

export type SupplierListProps = {
  cnpj: String;
  razao_social: String;
  logradouro: String;
  numero: String;
  complemento: String;
  bairro: String;
  cep: Number;
  uf: String;
  ddd_telefone_1: String;
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
