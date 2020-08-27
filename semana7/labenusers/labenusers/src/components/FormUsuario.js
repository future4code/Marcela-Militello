import React from "react";
import styled from "styled-components";
import axios from "axios";
import { baseUrl, axiosConfig } from "../constants/consts";

const Formulario = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 50px;
`;

class FormUsuario extends React.Component {
    state = {
        nameValue: "",
        emailValue: ""
    };
      
        onChangeName = (event) => {
          this.setState({ nameValue: event.target.value });
        };
      
        onChangeEmail = (event) => {
          this.setState({ emailValue: event.target.value });
        };
      
        createUser = () => {
          const body = {
            name: this.state.nameValue,
            email: this.state.emailValue
          };
      
          axios.post(baseUrl, body, axiosConfig)
          .then((response) => {
            console.log(response);
            alert (`O usuário ${this.state.nameValue} foi criado`);
            this.setState({ nameValue: "", emailValue: "" });
          })
          .catch((error) => {
            console.log(error.message);
            alert (`Todos os campos devem ser preenchidos!`)
          });
      };
    
        render() {
          return (
            <Formulario>
              <label>Nome:</label> 
              <input
                value={this.state.nameValue}
                onChange={this.onChangeName}
              />
              <label>E-mail:</label>
              <input
                value={this.state.emailValue}
                onChange={this.onChangeEmail}
              />
              <button onClick={this.createUser}>Criar usuário</button>
            </Formulario>
          );
        }
      }

export default FormUsuario;