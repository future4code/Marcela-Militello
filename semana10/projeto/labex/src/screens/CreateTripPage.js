import React, { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { goToAdmPanelPage } from "../router/goToPages";
import { useForm } from "../hooks/UseForm";
import styled from "styled-components";

const CreateTripContainer = styled.div`
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

const FormCreateTrip = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 25% 2% 25%;
  border-radius: 5px;
  background-color: lightgrey;
  padding: 20px;

  > label {
    margin-top: 10px;
  }

  > input {
    width: 250px;
    height: 30px;
    border: none;
    outline: none;
    margin-top: 10px;
  }
  
  > select {
    width: 250px;
    height: 30px;
    border: none;
    outline: none;
    margin-top: 10px;
  }

  > button {
    margin: 20px;
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

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/marcela-jackson";

const CreateTripPage = () => {
  const { form, onChange, resetState } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: 0,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createTrip();
    resetState();
  };

  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      history.push("/login");
    }
  }, [history]);

  const createTrip = () => {
    const body = { 
      name: form.name, 
      planet: form.planet, 
      date: form.date, 
      description: form.description, 
      durationInDays: form.durationInDays }
    axios.post(`${baseUrl}/trips`, body, {
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
    <CreateTripContainer>
      <button onClick={() => goToAdmPanelPage (history)}>
            VOLTAR
      </button>
      <p>CRIE UMA NOVA VIAGEM</p>
        <FormCreateTrip onSubmit={handleSubmit}>
          <label>Nome:</label>
          <input
            value={form.name}
            name="name"
            onChange={handleInputChange}
            type="text"
            pattern="\D{5,}\s*"
            title="No mínimo 5 letras!"
            required
          />
          <label>Planeta:</label>
          <select 
            value={form.planet}
            name="planet"
            onChange={handleInputChange}
            required
          >
            <option>Mercúrio</option>
            <option>Vênus</option>
            <option>Terra</option>
            <option>Marte</option>
            <option>Júpiter</option>
            <option>Saturno</option>
            <option>Urano</option>
            <option>Netuno</option>
            <option>Plutão</option>
          </select>  
          <label>Data:</label>
          <input
            value={form.date}
            name="date"
            onChange={handleInputChange}
            type="date"
            required
          />
          <label>Descrição:</label>
          <input
            value={form.description}
            name="description"
            onChange={handleInputChange}
            type="text"
            pattern="\D{30,}\s*"
            title="No mínimo 30 letras!"
            required
          />
          <label>Duração em dias:</label>
          <input
            value={form.durationInDays}
            name="durationInDays"
            onChange={handleInputChange}
            type="number"
            min={50}
            pattern="{50,}"
            title="No mínimo 50 dias!"
            required
          />
          <button>CRIAR</button>
        </FormCreateTrip>
    </CreateTripContainer>
  );
};

export default CreateTripPage;