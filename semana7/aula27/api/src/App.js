import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Home = styled.div`
  text-align: center;
`

export default class App extends React.Component {
  state = {
    atividade:"",
    tipo: "",
    participantes: "",
    listaTipo: []
  };

  componentDidMount() {
    this.getActivity()
  }

  getActivity = () => {
    axios.get("https://www.boredapi.com/api/activity/")
    .then((resposta) => {
      this.setState({
        atividade: resposta.data.activity,
        tipo: resposta.data.type,
        participantes: resposta.data.participants
      });
    })
    .catch((erro) => {
      console.log(erro);
    });
  };

  // selectType = (evento) => {
  //   const itemTipo = evento.target.value;
  //   this.
  // };

  // componentDidMount() {
  //   this.
  // }

  render() {
    return (
      <Home>
        <h1>Occupy your mind during the Covid-19 Pandemic!</h1>
        <h3>Get a random event!</h3>
        <p>Activity: {this.state.atividade}</p>
        <p>Type: {this.state.tipo}</p>
        <p>Participants: {this.state.participantes}</p>
        <button onClick={this.getActivity}>Give me an activity!</button>
        <h3>... or find a random activity from a type:</h3>
        <select>
          <option value={""}>{this.state.listaTipo}</option>
        </select>
      </Home>
    );
  }
}

