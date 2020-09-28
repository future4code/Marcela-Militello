import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToHomePage } from "../router/goToPages";
import { useForm } from "../hooks/UseForm";
import axios from "axios";
import styled from "styled-components";

const FormContainer = styled.div`
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

const Form = styled.form`
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


  > textarea {
    resize: none;
    height: 100px;
    width: 250px;
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

const FormPage = () => {
  const { form, onChange, resetState } = useForm({
    name: "",
    age: 0,
    applicationText: "",
    profession: "",
    country: "",
    trip: ""
  });

  const [selectCountry, setSelectCountry ] = useState([]);
  const [getTripsList, setGetTrips ] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    applyToTrip()
    resetState()
  };

  useEffect(() => {
    getCountry();
    getTrips();
  }, []);

  const history = useHistory();

  const applyToTrip = () => {
    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country,
      trip: form.trip }
    axios.post(`${baseUrl}/trips/:id/apply`, body, {
      headers: {
        auth: localStorage.getItem("token")
      }
    })
    .then((response) => {
      console.log(response);
      alert("Sua inscrição foi recebida com sucesso!")
    })
    .catch((err) => {
      console.log(err.message);
    });
 };

  const getCountry = () => {
    axios.get("https://restcountries.eu/rest/v2/all")
    .then((response) => {
      setSelectCountry(response.data)
    })
    .catch((erro) => {
      console.log(erro)
    });
  };

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
    <FormContainer>
      <button onClick={() => goToHomePage (history)}>VOLTAR</button>
        <p>FORMULÁRIO DE INSCRIÇÃO</p>
        <Form onSubmit={handleSubmit}>
          <label>Nome</label> 
          <input 
            value={form.name}
            name="name"
            onChange={handleInputChange}
            type="text"
            pattern="(\D{3,}\s*)"
            title="No mínimo 3 letras!"
            required
          />          
          <label>Idade</label>
          <input
            value={form.age}
            name="age"
            onChange={handleInputChange}
            min="18"
            type="number"
            required
          />
          <label>Por que sou um bom candidato(a)?</label>
          <textarea
            value={form.applicationText}
            name="applicationText"
            onChange={handleInputChange}
            type="text"
            pattern="\D{30,}\s*"
            title="No mínimo 30 letras!"
            required      
          />
          <label>Profissão</label> 
          <input
            value={form.profession}
            name="profession"
            onChange={handleInputChange}
            type="text"
            pattern="\D{10,}\s*"
            title="No mínimo 10 letras!"
            required
          />
          <label>País</label>
          <select
            value={form.country}
            name="country"
            onChange={handleInputChange}
            type="text"
            required
          >
            {selectCountry.map((country) => {
              return (
                <option key={country.id} value={country.name}>{country.name}</option>
              )
            })}
          </select >
          <label>Viagem</label> 
          <select 
            value={form.trip}
            name="trip"
            onChange={handleInputChange}
            required  
          >
              {getTripsList.map((trips) => {
                return (
                  <option key={trips.id}>{trips.name}, {trips.planet}</option>
              )
            })}
          </select>
          <button>INSCREVA-SE</button>
        </Form>
    </FormContainer>
  );
};

export default FormPage;