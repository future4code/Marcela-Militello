import React from "react";
import { useHistory } from "react-router-dom";
import { goToLoginPage, goToListTripsPage, gotToFormPage } from "../router/goToPages";
import styled from "styled-components";
import foguete from "../img/foguete.jpg";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 5%;
`

const HomeRouter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px dashed coral;
  padding: 50px;
  font-size: 20px;

  > button {
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

const Img = styled.img`
    border-radius: 7px;
    width: 400px;
    height: 300px;
`

const HomePage = () => {
  const history = useHistory();

  return (
    <HomeContainer>
      <HomeRouter>
        <p>Bem-vindo(a)!</p>
        <p>Administrador(a)? Faça login!</p>
        <button onClick={() => goToLoginPage (history)}>
            Login
        </button>
        <p>Candidato(a)? Inscreva-se!</p>
        <button onClick={() => gotToFormPage (history)}>Inscrição</button>
        <p>Veja as viagens disponíveis:</p>
        <button onClick={() => goToListTripsPage (history)}>
            Ver Viagens
        </button>
      </HomeRouter>
        <Img src={ foguete } />
    </HomeContainer>
  );
};

export default HomePage;

