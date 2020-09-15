import React from "react";
import { useHistory } from "react-router-dom";
import { goToHomePage } from "../router/goToPages";

const FormPage = () => {
  const history = useHistory();

  return (
    <div>
        <p>INSCRIÇÃO</p>
        <label>Nome:</label> {/*aberto*/}
        <input></input>
        <label>Idade:</label> {/*aberto, tem que ser maior de 18*/}
        <input></input>
        <label>Por que sou um bom candidato(a)?</label> {/*aberto*/}
        <input></input> 
        <label>Profissão</label> {/*aberto*/}
        <input></input>
        <label>País</label> {/*dropdown*/}
        <select></select>
        <label>Viagem</label> {/*dropdown*/}
        <select></select>
        <button>ENVIAR</button>
        <button onClick={() => goToHomePage (history)}>VOLTAR</button>
    </div>
  );
};

export default FormPage;