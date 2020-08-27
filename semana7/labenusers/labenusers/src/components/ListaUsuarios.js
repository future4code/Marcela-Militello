import React from "react";
import styled from "styled-components";
import axios from "axios";
import { baseUrl, axiosConfig } from "../constants/consts";

const DeleteButton = styled.span`
  color: red;
  cursor: pointer;
`;

class ListaUsuarios extends React.Component {
    state = {
      usuarios: []
    };
  
    componentDidMount = () => {
      this.getUsuarios();
    };
  
    getUsuarios = async () => {
      try {
        const response = await axios.get(baseUrl, axiosConfig);
  
        this.setState({ usuarios: response.data });
      } catch (error) {
        console.log(error.message);
      }
    };
  
    deletarUsuario = (userId) => {
      axios.delete(`${baseUrl}/${userId}`, axiosConfig)
        .then((response) => {
          console.log(response) 
          this.getUsuarios();
          alert (`O usuário foi deletado`)
        })
        .catch((error) => {
          console.log(error.message);
          alert (`O usuário não foi deletado`)
        });
    };
  
    render() {
      return (
        <div>
         <h3>Usuários cadastrados:</h3>
          {this.state.usuarios.map((usuario) => {
            return (
              <p key={usuario.id}>
                {usuario.name}
                <DeleteButton onClick={() => this.deletarUsuario(usuario.id)}>
                  {" "}
                  deletar
                </DeleteButton>
              </p>
            );
          })}
        </div>
      );
    }
  }
  
  export default ListaUsuarios;