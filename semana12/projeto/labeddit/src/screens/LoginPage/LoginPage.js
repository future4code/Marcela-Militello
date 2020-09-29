import React from 'react'
import { ScreenContainer, SignUpButtonContainer } from './styled'
import LoginForm from './LoginForm'
import { useHistory } from 'react-router-dom'
import { goToSignUp } from '../../routes/Coordinator'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const LoginPage = (props) => {
  const history = useHistory()
  useUnprotectedPage()
  
  return (
    <ScreenContainer>
      <LoginForm setButtonName={props.setButtonName}/>
      <SignUpButtonContainer>
        <button
          onClick={() => goToSignUp(history)}
          type={'submit'}
          fullWidth
        >
          Ainda não está cadastrado(a)? Clique aqui!
        </button>
      </SignUpButtonContainer>
    </ScreenContainer>
  )
}

export default LoginPage
