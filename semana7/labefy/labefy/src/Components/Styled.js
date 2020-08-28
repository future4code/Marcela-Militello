import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  color: white;
  text-align: center;

  > p {
   margin-top: 10px;
   margin-bottom: 15px;
   font-family: 'Pacifico';
   font-size: 55px; 
   color: greenyellow;
  }  
`

export const FormCriarPlaylist = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  border: 1px dashed black;
  margin: 20px 30% 20px 30%;
  
`

export const InputCriar = styled.input`
  width: 50%;
  height: 28px;
`

export const BotaoCriar = styled.button`
  height: 40px;
  width: 15%;
` 

export const ListaPlaylists = styled.div`
  text-align: center;
`

export const Footer = styled.div`
  background-color: black;
  color: white;
  text-align: center;
  padding: 20px;
  font-weight: bold;
`