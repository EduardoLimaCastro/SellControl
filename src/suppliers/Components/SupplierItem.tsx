import { insertMaskInCep } from "../../shared/functions/cep";
import { insertMaskInCnpj } from "../../shared/functions/cnpj";
import { insertMaskInPhone } from "../../shared/functions/phone";

type SupplierItemProps = {
  cnpj: string;
  razao_social: string;
  cidade: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cep: string;
  uf: string;
  ddd_telefone_1: string;
};

const handleOnClick = () => {
  alert("clicado");
};

const SupplierItem = (props: SupplierItemProps) => {
  return (
    <div
      className="flex flex-col gap-2 w-[350px] h-[200px] bg-green-950/75 m-6 rounded-2xl font-['Plus Jakarta Sans'] cursor-pointer"
      onClick={handleOnClick}
    >
      <h3 className="text-gray-300 font-bold mx-4 py-2">
        {props.razao_social}
      </h3>
      <h4 className="mx-2  text-white text-sm">
        {insertMaskInCnpj(props.cnpj)}
      </h4>
      <div className="flex gap-2 mx-2 text-white text-sm">
        <p>{props.logradouro},</p>
        <p>{props.numero}</p>
      </div>
      <p className="mx-2  text-white text-sm">{insertMaskInCep(props.cep)}</p>
      <p className="mx-2  text-white">
        {insertMaskInPhone(props.ddd_telefone_1)}
      </p>
    </div>
  );
};

export default SupplierItem;
