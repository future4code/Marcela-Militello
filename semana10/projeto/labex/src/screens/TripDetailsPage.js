import React from "react";
import { useHistory } from "react-router-dom";
import { goToAdmPanelPage } from "../router/goToPages";

const TripDetailsPage = () => {
  const history = useHistory();

  return (
    <div>
        <p>Detalhes das viagens</p>
        <button onClick={() => goToAdmPanelPage (history)}>
            VOLTAR
        </button>
    </div>
  );
};

export default TripDetailsPage;