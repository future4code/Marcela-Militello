import React, { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { goToAdmPanelPage } from "../router/goToPages";

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/marcela-jackson";

const CreateTripPage = () => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      createTrip();
    } else {
      history.push("/login");
    }
  }, [history]);

  const createTrip = () => {
    axios.get(`${baseUrl}/trips`, {
        headers: {
          auth: localStorage.getItem("token")
        }
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

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