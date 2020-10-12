import React from 'react'
import { InputsContainer, SignUpFormContainer} from './styled'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { signUp } from '../../services/axios'

const SignUpForm = (props) => {
  const history = useHistory()
  const [form, handleInputChange] = useForm({username: '', email: '', password: ''})

  const onClickSignUp = (event) => {
    event.preventDefault()
    const element = document.getElementById('signup_form')
    const isValid = element.checkValidity()
    element.reportValidity()
    if (isValid) {
      signUp(form, history, props.setButtonName)
    }
  }

  return (
    <form id={'signup_form'}>
      <SignUpFormContainer>
        <InputsContainer>
          <label>Nome de usuário</label>
          <input
            value={form.username}
            name={'username'}
            onChange={handleInputChange}
            type={'text'}
            required
            autoFocus
          />
          <label>Email</label>
          <input
            value={form.email}
            name={'email'}
            onChange={handleInputChange}
            type={'email'}
            required
          />
          <label>Senha</label>
          <input
            value={form.password}
            name={'password'}
            onChange={handleInputChange}
            type={'password'}
            required
          />
        </InputsContainer>
        <button
          onClick={onClickSignUp}
          type={'submit'}
        >
          Cadastrar
        </button>
      </SignUpFormContainer>
    </form>
  )
}

export default SignUpForm
