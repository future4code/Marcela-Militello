import React from 'react';
import styled from "styled-components";

const Tela = styled.div`
    box-sizing: border-box;
    text-align: center;
    `

class Final extends React.Component {
    render () {
      return (  
          <Tela>
          <h1> O FORMULÁRIO ACABOU</h1>
          <h3>Muito obrigado por participar! Entraremos em contato!</h3>
          </Tela>
      );
    }
  }

export default Final