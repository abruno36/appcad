import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/formularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h4" align="center" component="h1">
          Formulário de Cadastro
        </Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF}/>
      </Container>
    );
  }
}

function aoEnviarForm(dados){
  console.log(dados);
}

function validarCPF(cpf) {
  if(cpf.length !== 11){
    return {valido:false, texto:"CPF deve ter 11 digitos"}
  }else{
    return {valido:true, texto:""}
  }
}

export default App;
