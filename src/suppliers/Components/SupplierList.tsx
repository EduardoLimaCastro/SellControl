export type SupplierListProps = {
  cnpj: String;
  razao_social: String;
  logradouro: String;
  numero: String;
  complemento: String;
  bairro: String;
  cep: Number;
  uf: String;
  ddd_telefone1: String;
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
      <p>{props.razao_social}</p>
    </>
  );
}
