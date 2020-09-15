import React from "react";
import { useHistory } from "react-router-dom";
import { goToHomePage } from "../router/goToPages";

const ListTripsPage = () => {
  const history = useHistory();

  return (
    <div>
        <p>LISTA DE VIAGENS</p>
        <button onClick={() => goToHomePage(history)}>
            VOLTAR
        </button>
    </div>
  );
};

export default ListTripsPage;
