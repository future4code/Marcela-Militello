import React from 'react';
import styled from "styled-components";

const Tela = styled.div`
    box-sizing: border-box;
    text-align: center;
    `

class Etapa2 extends React.Component {
    render () {
      return (  
          <Tela>
          <h1> ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
          <h3>5. Qual curso?</h3>
          <input></input>
          <h3>6. Qual a unidade de ensino?</h3>
          <input></input>
          </Tela>
      );
    }
  }

export default Etapa2