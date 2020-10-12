import React from 'react'
import { ScreenContainer } from './styled'
import SignUpForm from './SignUpForm'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import logo from '../../assets/logo.jpg'

const SignUpPage = (props) => {
  useUnprotectedPage()
  
  return (
    <ScreenContainer>
      <img alt={'logo'} src={logo}/>
      <SignUpForm setButtonName={props.setButtonName}/>
    </ScreenContainer>
  )
}

export default SignUpPage
