import React from 'react'
import { InputsContainer, LoginFormContainer} from './styled'
import { login } from '../../services/axios'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'

const LoginForm = (props) => {
  const [form, handleInputChange] = useForm({ email: '', password: ''})
  const history = useHistory()

  const onClickLogin = (event) => {
    event.preventDefault()
    const element = document.getElementById('login_form')
    const isValid = element.checkValidity()
    element.reportValidity()
    if (isValid) {
      login(form, history, props.setButtonName)
    }
  }

  return (
      <form id={'login_form'}>
        <LoginFormContainer>
          <InputsContainer>
            <label>Email</label>
            <input
              value={form.email}
              name={'email'}
              onChange={handleInputChange}
              type={'email'}
              required
              autoFocus
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
            onClick={onClickLogin}
            type={'submit'}
            fullWidth
          >
            Entrar
          </button>
        </LoginFormContainer>
      </form>
    )
  }

export default LoginForm
