import React, { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { goToAdmPanelPage } from "../router/goToPages";

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/marcela-jackson";

const TripDetailsPage = () => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      getTripDetail();
    } else {
      history.push("/login");
    }
  }, [history]);

  const getTripDetail = () => {
    axios.get(`${baseUrl}/trip/id`, {
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
        <p>DETALHES DAS VIAGENS</p>

        <button onClick={() => goToAdmPanelPage (history)}>
            VOLTAR
        </button>
    </div>
  );
};

export default TripDetailsPage;

