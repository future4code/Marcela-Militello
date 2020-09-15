import React from "react";
import { useHistory } from "react-router-dom";
import { goToAdmPanelPage, goToHomePage } from "../router/goToPages";

const LoginPage = () => {
  const history = useHistory();

  return (
    <div>
        <p>Faça o login</p>
        <label>E-mail</label>
        <input></input>
        <label>Senha</label>
        <input></input>
        <button onClick={() => goToAdmPanelPage (history)}>
            ENTRAR
        </button>
        <button onClick={() => goToHomePage (history)}>VOLTAR</button>
    </div>
  );
};

export default LoginPage;