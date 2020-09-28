import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToCreateTripPage, goToTripDetailsPage, goToHomePage } from "../router/goToPages";
import styled from "styled-components";

const AdmPanelContainer = styled.div`
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

const AdmPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 20% 0 20%; 
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

const AdmPanelPage = () => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      history.push("/adm-panel");
    } else {
      history.push("/login");
    }
  }, [history]);

  return (
    <AdmPanelContainer>
        <button onClick={() => goToHomePage (history)}>VOLTAR</button>
        <p>PAINEL DE ADMINISTRAÇÃO</p>
      <AdmPanel>
        <p>Crie viagens</p>
        <button onClick={() => goToCreateTripPage (history)}>
            Criar Viagem
        </button>
        <p>Veja detalhes das viagens e aprove ou reprove candidatos(as)</p>
        <button onClick={() => goToTripDetailsPage (history)}>
            Ver detalhes
        </button>
      </AdmPanel>
    </AdmPanelContainer>
  );
};

export default AdmPanelPage;