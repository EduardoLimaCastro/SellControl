import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { SubmitHandler, useForm } from "react-hook-form";
import { mask } from "remask";

type FormFields = {
  cnpj: string;
  razaosocial: string;
  logradouro: string;
  complemento: string;
  numero: string;
  bairro: string;
  cidade: string;
  uf: string;
  cep: string;
  telefone: string;
};

export default function Fornecedor() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  return (
    <section className="bg-[#EBF2FC] h-screen w-[100%] pt-[60px]">
      <form className="w-[80%]" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex mt-8 mb-8 items-center">
          <label htmlFor="cnpj" className="mx-8 my-8 flex items-center">
            CNPJ:{"   "}
            <div className="ml-8 flex flex-col items-center">
              <input
                {...register("cnpj", {
                  required: "CNPJ deve ser preenchido",
                  maxLength: 14,
                  setValueAs: (v) => mask(v, "99.999.999/9999-99"),
                })}
                id="cnpj"
                placeholder="00.000.000/0000-00"
                maxLength={18}
                className="ml-2 w-[180px] h-[35px]  border-2 rounded-md pl-2"
                type="text"
              ></input>
              {errors.cnpj && (
                <span className="text-red-500">{errors.cnpj.message}</span>
              )}
            </div>
          </label>
          <IconButton
            aria-label="search"
            className="w-10 h-10 "
            style={{ color: "#1E4847", backgroundColor: "white" }}
          >
            <SearchIcon />
          </IconButton>
        </div>
        <div className="mt-8 mb-8 flex gap-4 pl-8">
          <label className=" my-8 flex items-center" htmlFor="razaosocial">
            Razão Social:
            <div className=" flex flex-col items-center">
              <input
                {...register("razaosocial", {
                  required: "Razão Social deve ser informada",
                })}
                id="razaosocial"
                type="text"
                className="ml-2 w-[180px] h-[35px]  border-2 rounded-md pl-2"
              ></input>
              {errors.razaosocial && (
                <span className="text-red-500">
                  {errors.razaosocial.message}
                </span>
              )}
            </div>
          </label>
          <label className="my-8 flex items-center" htmlFor="logradouro">
            Logradouro:
            <div className=" flex flex-col items-center">
              <input
                {...register("logradouro", {
                  required: "Logradouro deve ser informado",
                })}
                id="logradouro"
                type="text"
                className="ml-2 w-[180px] h-[35px]  border-2 rounded-md pl-2"
              ></input>
              {errors.logradouro && (
                <span className="text-red-500">
                  {errors.logradouro.message}
                </span>
              )}
            </div>
          </label>
          <label className="my-8 flex items-center" htmlFor="numero">
            Número:
            <div className=" flex flex-col items-center">
              <input
                {...register("numero", {
                  required: "Número deve ser informado",
                  valueAsNumber: true,
                })}
                id="logradouro"
                type="number"
                className="ml-2 w-[180px] h-[35px]  border-2 rounded-md pl-2"
              ></input>
              {errors.numero && (
                <span className="text-red-500">{errors.numero.message}</span>
              )}
            </div>
          </label>
        </div>
        <button
          type="submit"
          className="w-[90px] h-[45px] bg-white rounded-xl ml-8 hover:bg-[#1E4847] hover:text-white"
        >
          Cadastrar
        </button>
      </form>
    </section>
  );
}
