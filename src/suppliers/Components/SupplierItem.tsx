import { insertMaskInCep } from "../../shared/functions/cep";
import { insertMaskInCnpj } from "../../shared/functions/cnpj";
import { insertMaskInPhone } from "../../shared/functions/phone";

type SupplierItemProps = {
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

const SupplierItem = (props: SupplierItemProps) => {
  return (
    <div className="flex flex-col gap-2 w-[20%] h-[150px] bg-gray-200 m-6 opacity-55 rounded-2xl font-['Plus Jakarta Sans']">
      <h3 className="text-white font-bold mx-4">{props.razao_social}</h3>
      <h4 className="mx-2">{insertMaskInCnpj(props.cnpj)}</h4>
      <div className="flex gap-2 mx-2">
        <p>{props.logradouro},</p>
        <p>{props.numero}</p>
      </div>
      <p>{insertMaskInCep(props.cep)}</p>
      <p className="mx-2">{insertMaskInPhone(props.ddd_telefone_1)}</p>
    </div>
  );
};

export default SupplierItem;
