import React, { useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { goToAdmPanelPage } from "../router/goToPages";
import styled from "styled-components";

const HeaderTripDetails = styled.div`
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

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/marcela-jackson";

const TripDetailsPage = () => {
  const history = useHistory();
  const pathParams = useParams();

  useEffect(() => {
    const token = localStorage.getItem("token");
    getTripDetail();

    if (!token) {
      history.push("/login");
    }
  }, [history]);

  const getTripDetail = () => {
    axios.get(`${baseUrl}/trip/${pathParams.id}`, {
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
      <HeaderTripDetails>
        <button onClick={() => goToAdmPanelPage (history)}>
            VOLTAR
        </button>
        <p>DETALHES DAS VIAGENS</p>
      </HeaderTripDetails>
      <div>
        
      </div>
    </div>
  );
};

export default TripDetailsPage;

