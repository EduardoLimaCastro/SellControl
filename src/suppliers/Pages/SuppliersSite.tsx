import { useEffect, useState } from "react";
import SupplierList from "../Components/SupplierList";
import { SupplierListProps } from "../Components/SupplierList";
import {
  Box,
  FilledInput,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SuppliersSite = () => {
  const [items, setItems] = useState({} as SupplierListProps);
  const [cnpjSearch, setCnpjSearch] = useState("");

  useEffect(() => {
    fetch("https://brasilapi.com.br/api/cnpj/v1/34284090000101")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const searchButtonClick = () => {
    fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpjSearch}`)
      .then((response) => response.json())
      .then((data) => setItems(data));
    console.log(cnpjSearch);
    console.log(items);
  };

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCnpjSearch(event.target.value);
  };

  return (
    <div>
      <p>SuppliersSite works</p>

      <div className="center flex-col gap-6">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <div className="flex items-center gap-6">
            <FormControl>
              <InputLabel htmlFor="cnpj">CNPJ</InputLabel>
              <OutlinedInput
                id="cnpj"
                placeholder="00.000.000/0000-00"
                label="cnpj"
                onChange={onChangeSearch}
              />
            </FormControl>
            <IconButton
              aria-label="delete"
              className="w-12 h-12"
              onClick={searchButtonClick}
            >
              <SearchIcon />
            </IconButton>
          </div>
          <FormControl variant="standard">
            <InputLabel htmlFor="component-simple">Name</InputLabel>
            <Input id="component-simple" defaultValue="Composed TextField" />
          </FormControl>
          <FormControl variant="standard">
            <InputLabel htmlFor="component-helper">Name</InputLabel>
            <Input
              id="component-helper"
              defaultValue="Composed TextField"
              aria-describedby="component-helper-text"
            />
            <FormHelperText id="component-helper-text">
              Some important helper text
            </FormHelperText>
          </FormControl>
          <FormControl disabled variant="standard">
            <InputLabel htmlFor="component-disabled">Name</InputLabel>
            <Input id="component-disabled" defaultValue="Composed TextField" />
            <FormHelperText>Disabled</FormHelperText>
          </FormControl>
          <FormControl error variant="standard">
            <InputLabel htmlFor="component-error">Name</InputLabel>
            <Input
              id="component-error"
              defaultValue="Composed TextField"
              aria-describedby="component-error-text"
            />
            <FormHelperText id="component-error-text">Error</FormHelperText>
          </FormControl>

          <FormControl variant="filled">
            <InputLabel htmlFor="component-filled">Name</InputLabel>
            <FilledInput
              id="component-filled"
              defaultValue="Composed TextField"
            />
          </FormControl>
        </Box>
      </div>
      <SupplierList
        cnpj={items.cnpj}
        razao_social={items.razao_social}
        logradouro={items.logradouro}
        numero={items.numero}
        complemento={items.complemento}
        bairro={items.bairro}
        cep={items.cep}
        uf={items.uf}
        ddd_telefone1={items.ddd_telefone1}
      ></SupplierList>
    </div>
  );
};

export default SuppliersSite;
