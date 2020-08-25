import React from 'react';
import axios from 'axios';
import ListaUsuarios from './components/ListaUsuarios'

export default class App extends React.Component {
  state = {
    name: "",
    email: "",
    listaUsers: []
  };

  createUser = () => {
    const body = {
      name: this.state.nome,
      email: this.state.email
    };

    const request = axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      body,
      {
        headers: {
          Authorization: "marcela-militello-jackson"
        }
      }
    );

  render() {
    const onChangeInput = (evento) => {
      this.setState({name : evento.target.value });
    };
    const onChangeInput = (evento) => {
      this.setState({email: evento.target.value});
    };

    return (
      <div className="App">
        <label>Nome:</label>
        <input value={this.state.name} onChange={onChangeInput} />
        <label>Email:</label>
        <input value={this.state.email} onChange={onChangeInput} />
        <button onClick={this.createUser}>Salvar</button>
      </div>
    )}