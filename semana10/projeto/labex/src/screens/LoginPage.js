import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { goToAdmPanelPage, goToHomePage } from "../router/goToPages";

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/marcela-jackson";

const LoginPage = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      history.push("/adm-panel");
    }
  }, [history]);

  const onChangeEmail = (event) => {
    setEmailValue(event.target.value);
  };

  const onChangePassword = (event) => {
    setPasswordValue(event.target.value);
  };

  const tokenLogin = () => {
    const body = {
      email: emailValue,
      password: passwordValue
    };

    axios.post(`${baseUrl}/login`, body)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        goToAdmPanelPage (history)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
        <p>Faça o login</p>
        <label>E-mail</label>
        <input value={emailValue} onChange={onChangeEmail} />
        <label>Senha</label>
        <input value={passwordValue} onChange={onChangePassword} />
        <button onClick={tokenLogin}>ENTRAR</button>
        <button onClick={() => goToHomePage (history)}>VOLTAR</button>
    </div>
  );
};

export default LoginPage;