import React from "react";
import { useHistory } from "react-router-dom";
import { goToCreateTripPage, goToTripDetailsPage, goToHomePage } from "../router/goToPages";

const AdmPanelPage = () => {
  const history = useHistory();

  return (
    <div>
        <p>PAINEL DE ADMINISTRAÇÃO</p>
        <button onClick={() => goToCreateTripPage (history)}>
            Criar Viagem
        </button>
        <button onClick={() => goToTripDetailsPage (history)}>
            Ver detalhes
        </button>
        <button onClick={() => goToHomePage (history)}>VOLTAR</button>
    </div>
  );
};

export default AdmPanelPage;