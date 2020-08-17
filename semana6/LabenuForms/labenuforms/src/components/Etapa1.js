import React from 'react';
import styled from "styled-components";

const Tela = styled.div`
    box-sizing: border-box;
    text-align: center;
    `

class Etapa1 extends React.Component {
  render () {
    return (  
        <Tela>
        <h1> ETAPA 1 - DADOS GERAIS</h1>
        <h3>1. Qual o seu nome?</h3>
        <input></input>
        <h3>2. Qual sua idade?</h3>
        <input></input>
        <h3>3. Qual seu email?</h3>
        <input></input>
        <h3>4. Qual a sua escolaridade?</h3>
        <select>
            <option>Ensino médio incompleto</option>
            <option>Ensino médio completo</option>
            <option>Ensino superior incompleto</option>
            <option>Ensino superior completo</option>
        </select>
        </Tela>
    );
  }
}

export default Etapa1