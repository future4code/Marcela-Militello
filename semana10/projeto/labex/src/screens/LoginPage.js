import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { goToAdmPanelPage, goToHomePage } from "../router/goToPages";
import styled from "styled-components";

const LoginPageContainer = styled.div`
  > button {
    margin: 10px 10px;
    border: none;
    outline: none;
    border-radius: 7px;
    cursor: pointer;
    width: 100px;
    height: 40px;
    font-weight: bold;

    :hover {
      background-color: coral;
      color: white;
    }
  }

  > p {
      text-align: center;
      font-weight: bold;
  }
`

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 25% 2% 25%;
  border-radius: 5px;
  background-color: lightgrey;
  padding: 20px;

  > label {
    margin-top: 10px;
  }

  > input {
    width: 250px;
    height: 30px;
    border: none;
    outline: none;
    margin-top: 10px;
  }

  > button {
    margin: 20px;
    border: none;
    outline: none;
    border-radius: 7px;
    cursor: pointer;
    width: 100px;
    height: 40px;
    font-weight: bold;

    :hover {
      background-color: coral;
      color: white;
    }
  }
`

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
    <LoginPageContainer>
        <button onClick={() => goToHomePage (history)}>VOLTAR</button>
        <p>FAÇA O LOGIN</p>
      <LoginContainer>
        <label>E-mail</label>
        <input value={emailValue} onChange={onChangeEmail} />
        <label>Senha</label>
        <input value={passwordValue} onChange={onChangePassword} />
        <button onClick={tokenLogin}>ENTRAR</button>
      </LoginContainer>
    </LoginPageContainer>
  );
};

export default LoginPage;