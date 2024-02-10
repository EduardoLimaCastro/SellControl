import { useEffect, useState } from "react";
import { mask, unmask } from "remask";
import SearchIcon from "@mui/icons-material/Search";

import { SupplierListProps } from "../Components/SupplierList";
import { useSectionInView } from "../../shared/libs/hooks";
import { IconButton } from "@mui/material";
import { ufList } from "../../shared/libs/uflist";

const InsertSuppliersSite = () => {
  const [items, setItems] = useState({} as SupplierListProps);
  const [razaosocial, setRazaoSocial] = useState("");
  const [numero, setNumero] = useState("");
  const [logradouro, setlogradouro] = useState("");
  const [cep, setCep] = useState("");
  const [bairro, setBairro] = useState("");
  const [uf, setUf] = useState("");
  const [cidade, setCidade] = useState("");
  const [complemento, setComplemento] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [email, setEmail] = useState("");
  const { ref } = useSectionInView("Fornecedores");

  useEffect(() => {
    setRazaoSocial(items.razao_social);
    setlogradouro(items.logradouro);
    setNumero(items.numero);
    setComplemento(items.complemento);
    setBairro(items.bairro);
    setCidade(items.municipio);
    setUf(items.uf);
    setCep(items.cep);
    setTelefone(items.ddd_telefone_1);
  }, [items]);

  const searchButtonClick = () => {
    fetch(`https://brasilapi.com.br/api/cnpj/v1/${unmask(cnpj)}`)
      .then((response) => response.json())
      .then((data) => setItems(data));
  };

  const handleCancel = () => {
    setRazaoSocial("");
    setlogradouro("");
    setNumero("");
    setComplemento("");
    setBairro("");
    setCidade("");
    setUf("");
    setCep("");
    setTelefone("");
    setEmail("");
  };

  const submitHandler = (event: React.FormEvent) => {
    event?.preventDefault();
    const form = {
      cnpj,
      razaosocial,
      logradouro,
      numero,
      complemento,
      bairro,
      cidade,
      uf,
      cep,
      telefone,
      email,
    };
    console.log(form);
  };

  return (
    <section
      ref={ref}
      className="bg-[#EBF2FC] h-screen w-[100%] pt-[60px]"
      id="suppliers"
    >
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={submitHandler}
      >
        <div className="mt-8 mb-8">
          <label htmlFor="cnpj" className="mx-8 my-8">
            CNPJ:{"   "}
            <input
              id="cnpj"
              placeholder="00.000.000/0000-00"
              onChange={(e) =>
                setCnpj(mask(e.target.value, "99.999.999/9999-99"))
              }
              maxLength={18}
              value={cnpj}
              className="ml-2 w-[180px] h-[35px]  border-2 rounded-md pl-2"
              type="text"
            ></input>
          </label>
          <IconButton
            aria-label="search"
            className="w-10 h-10 "
            onClick={searchButtonClick}
            style={{ color: "#1E4847", backgroundColor: "white" }}
          >
            <SearchIcon />
          </IconButton>
        </div>
        <div className="flex flex-col flex-wrap items-start w-[80%] border-2 border-indigo-500/15 rounded-xl p-4">
          <div>
            <label htmlFor="razaosocial">
              Razão Social:
              <input
                id="razaosocial"
                value={razaosocial}
                type="text"
                className="ml-2 w-[300px] h-[35px]  border-2 rounded-md pl-2"
                onChange={(event) => setRazaoSocial(event.target.value)}
              ></input>
            </label>
          </div>
          <div className="flex flex-wrap gap-8 mt-2">
            <label htmlFor="logradouro" className="flex items-center">
              Logradouro:
              <input
                id="logradouro"
                value={logradouro}
                type="text"
                className="ml-2 w-[300px] h-[35px]  border-2 rounded-md pl-2"
                onChange={(event) => setlogradouro(event.target.value)}
              ></input>
            </label>
            <label htmlFor="numero" className="flex items-center">
              Nº:
              <input
                id="numero"
                value={numero}
                type="text"
                className="ml-2 w-[80px] h-[35px]  border-2 rounded-md pl-2"
                onChange={(event) => setNumero(event.target.value)}
              ></input>
            </label>
            <label htmlFor="complemento" className="flex items-center">
              Comlemento:
              <input
                id="complemento"
                value={complemento}
                type="text"
                className="ml-2 w-[150px] h-[35px]  border-2 rounded-md pl-2"
                onChange={(event) => setComplemento(event.target.value)}
              ></input>
            </label>
          </div>
          <div className="flex flex-wrap gap-8 mt-2">
            <label htmlFor="bairro">
              Bairro:
              <input
                id="bairro"
                value={bairro}
                type="text"
                className="ml-2 w-[150px] h-[35px]  border-2 rounded-md pl-2"
                onChange={(event) => setBairro(event.target.value)}
              ></input>
            </label>
            <label htmlFor="cidade">
              Cidade:
              <input
                id="cidade"
                value={cidade}
                type="text"
                className="ml-2 w-[200px] h-[35px]  border-2 rounded-md pl-2"
                onChange={(event) => setCidade(event.target.value)}
              ></input>
            </label>
            <label htmlFor="cep">
              CEP:
              <input
                id="cep"
                value={mask(cep, "99.999-999")}
                type="text"
                className="ml-2 w-[100px] h-[35px]  border-2 rounded-md pl-2"
                onChange={(event) =>
                  setCep(mask(event.target.value, "99.999-999"))
                }
              ></input>
            </label>
            <label htmlFor="uf">
              UF:{" "}
              <select
                id="uf"
                value={uf}
                className="h-[35px] rounded-lg border-2"
              >
                {ufList.map((ufs, index) => (
                  <option key={index} value={ufs}>
                    {ufs}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="flex gap-4">
            <label htmlFor="telefone" className="mt-2">
              Telefone:
              <input
                id="telefone"
                value={mask(telefone, "(99) 9999-9999")}
                type="text"
                className="ml-2 w-[130px] h-[35px]  border-2 rounded-md pl-2"
                onChange={(event) =>
                  setTelefone(mask(event.target.value, "(99) 9999-9999"))
                }
              ></input>
            </label>
            <label htmlFor="email" className="mt-2 ">
              Email:
              <input
                id="email"
                value={email}
                type="email"
                className="ml-2 w-[500px] h-[35px]  border-2 rounded-md pl-2"
                onChange={(event) => setEmail(event.target.value)}
              ></input>
            </label>
          </div>
        </div>
        <div className="flex gap-4 mt-8">
          <button
            type="submit"
            className="w-[90px] h-[45px] bg-white rounded-xl ml-8 hover:bg-[#1E4847] hover:text-white"
          >
            Cadastrar
          </button>
          <button
            onClick={handleCancel}
            className="w-[90px] h-[45px] bg-red-700 text-white rounded-xl ml-8 hover:bg-red-500 hover:text-black"
          >
            Cancelar
          </button>
        </div>
      </form>
    </section>
  );
};

export default InsertSuppliersSite;
