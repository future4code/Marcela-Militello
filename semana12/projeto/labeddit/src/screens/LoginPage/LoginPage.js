import React from 'react'
import { ScreenContainer, SignUpButtonContainer } from './styled'
import LoginForm from './LoginForm'
import { useHistory } from 'react-router-dom'
import { goToSignUp } from '../../routes/Coordinator'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import logo from '../../assets/logo.jpg'

const LoginPage = (props) => {
  const history = useHistory()
  useUnprotectedPage()
  
  return (
    <ScreenContainer>
      <img alt={'logo'} src={logo}/>
      <LoginForm setButtonName={props.setButtonName}/>
      <SignUpButtonContainer>
        <button
          onClick={() => goToSignUp(history)}
          type={'submit'}
        >
          Não está cadastrado(a)? Clique aqui!
        </button>
      </SignUpButtonContainer>
    </ScreenContainer>
  )
}

export default LoginPage
