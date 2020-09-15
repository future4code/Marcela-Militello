import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import TelaInicial from './TelaInicial';
import Match from './Match';

const AppContainer = styled.div`
  height: 100vh;
  
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid black;
  width: 30vw;
  height: 80vh;
  padding: 20px;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > button {
    height: 20px;
  }
`

const ButtonClear = styled.button`
  display: flex;
  width: 100px;
`

function Card() {
  const [profiles, setProfiles] = useState([]);
  const [currentPage, setCurrentPage] = useState(true);  

  const changePage = () => {
    setCurrentPage(!currentPage)
    }  

  const clearMatches = () => {
      const body = {id: profiles.id}
      axios.put ("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marcela/clear", body)
      .then (response => {
          console.log(response)
      })
      .catch (erro => {
          console.log(erro)
      })
  }

  return (
    <AppContainer>
      <CardContainer>
        <Header>
          <p>astromatch</p>
          <button onClick={changePage}>Ver Matches</button>
        </Header>
     <div>
        {currentPage ? <TelaInicial /> : <Match />}
     </div>
    <ButtonClear onClick={() => clearMatches()}>Limpar Matches</ButtonClear> 
      </CardContainer>
    </AppContainer>
  );
}

export default Card;
