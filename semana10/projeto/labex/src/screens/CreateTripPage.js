import React from "react";
import { useHistory } from "react-router-dom";
import { goToAdmPanelPage } from "../router/goToPages";

const CreateTripPage = () => {
  const history = useHistory();

  return (
    <div>
        <p>Crie uma nova viagem</p>
        <button onClick={() => goToAdmPanelPage (history)}>
            VOLTAR
        </button>
    </div>
  );
};

export default CreateTripPage;