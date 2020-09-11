import React, { useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Profile = styled.div`
  display: flex;
  flex-direction: column;
`

const Photo = styled.div`
  width: 80%;
  display: flex;
  align-items: center;

  > img {
    width: 100%;
    height: 40vh;
  }
`

const Infos = styled.div`
  width: 80%;
  text-align: justify;
`

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
  margin-left: 130px;   
`

function TelaInicial() {
  const [profiles, setProfiles] = useState([]); 

  const getProfile = () => {
    axios.get ("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marcela/person")
    .then(response => {
        setProfiles(response.data.profile)
    })
    .catch(erro => {
        console.log(erro)
    })
  } 

  const choosePerson = () => {
    const body = {id: profiles.id, choice: true}
    axios.post ("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marcela/choose-person", body)
    .then(response => {
      console.log(response)
    })
    .catch(erro => {
      console.log(erro)
    })
  }

  useEffect (() => {
    getProfile()
 }, []);

  const like = () => {
    getProfile()
    choosePerson()
  }

  if (profiles === null) {
    return <p>Carregando...</p>
  } 

  return (
    <div>
        <Profile>
          <Photo>
            <img src={profiles.photo} />
          </Photo>
          <Infos>
            <p>{profiles.name}, {profiles.age}</p><p>{profiles.bio}</p>
          </Infos>
        </Profile>
        <Buttons>
          <button onClick={() => getProfile()}>No</button>
          <button onClick={() => like()}>Like</button>
        </Buttons>
    </div>
  );
}

export default TelaInicial;
