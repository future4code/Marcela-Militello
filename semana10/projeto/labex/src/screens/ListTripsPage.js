import React, { useState, useEffect }  from "react";
import { useHistory } from "react-router-dom";
import { goToHomePage } from "../router/goToPages";
import axios from "axios";
import styled from "styled-components";

const TripsContainer = styled.div`
  
  > p {
    text-align: center;
    font-weight: bold;
  }

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
`

const TripsListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

const CardContainer = styled.div`
  border: 1px dashed coral;
  margin: 20px;
  text-align: center;
`  

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/marcela-jackson";

const ListTripsPage = () => {
  const history = useHistory();
  const [getTripsList, setGetTrips ] = useState([]);
  
  useEffect(() => {
    getTrips();
  }, []);

  const getTrips = () => {
    axios.get(`${baseUrl}/trips`)
      .then((response) => {
        setGetTrips(response.data.trips);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <TripsContainer>
        <button onClick={() => goToHomePage(history)}>
            VOLTAR
        </button>
        <p>LISTA DE VIAGENS</p>
      </TripsContainer>
      <TripsListContainer>
        {getTripsList.map((trip) => {
            return (
              <CardContainer>
                <p value={trip.name}>{trip.name}</p>
                <p value={trip.description}>{trip.description}</p>
                <p value={trip.planet}>Planeta: {trip.planet}</p>
                <p value={trip.durationInDays}>Duração: {trip.durationInDays} dias</p>
                <p value={trip.date}>Data: {trip.date}</p>
              </CardContainer>
            )
          })}
      </TripsListContainer>
    </div>
  );
};

export default ListTripsPage;
