import React, { useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const MatchesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;

  > img {
    width: 50px;
    height:50px;
    border: none;
    border-radius: 50%;
    box-shadow: 6px 6px 11px -8px rgba(0,0,0,0.75); 
  }
`

function TelaMatch() {
  const [matches, setMatches] = useState([]);

  useEffect (() => {
    getMatches()
 }, []);

  const getMatches = () => {
    axios.get ("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marcela/matches")
    .then(response => {
        setMatches (response.data.matches)
    })
    .catch (erro => {
        console.log (erro)
    }) 
  }

  return (
    <div>
      {matches.map((matches) => {
        return (
          <MatchesContainer key={matches.id}><img src={matches.photo} /><p>{matches.name}</p></MatchesContainer>
        )
      } 
    )}
    </div>
  );
}

export default TelaMatch;
