import React from 'react';
import erro from '../../assets/erro.jpg';
import { ErroContainer } from './styled'

const ErrorPage = () => {
  return(
    <ErroContainer>
      <img alt={'logo'} src={erro}/>
      <h1>Página não encontrada!</h1>
    </ErroContainer>
  )
}

export default ErrorPage
