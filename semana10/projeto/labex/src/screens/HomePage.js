import React from "react";
import { useHistory } from "react-router-dom";
import { goToLoginPage, goToListTripsPage, gotToFormPage } from "../router/goToPages";

const HomePage = () => {
  const history = useHistory();

  return (
    <div>
        <p>Bem-vindo(a)</p>
        <button onClick={() => goToLoginPage (history)}>
            LOGIN
        </button>
        <button onClick={() => gotToFormPage (history)}>INSCREVA-SE</button>
        <button onClick={() => goToListTripsPage (history)}>
            Ver Viagens
        </button>
    </div>
  );
};

export default HomePage;

