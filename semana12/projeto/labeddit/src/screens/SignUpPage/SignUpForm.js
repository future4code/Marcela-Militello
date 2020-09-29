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
            fullWidth
            required
            autoFocus
            margin={'normal'}
          />
          <label>Email</label>
          <input
            value={form.email}
            name={'email'}
            onChange={handleInputChange}
            type={'email'}
            fullWidth
            required
            margin={'normal'}
          />
          <label>Senha</label>
          <input
            value={form.password}
            name={'password'}
            onChange={handleInputChange}
            type={'password'}
            fullWidth
            required
            margin={'normal'}
          />
        </InputsContainer>
        <button
          onClick={onClickSignUp}
          color={'primary'}
          variant={'contained'}
          type={'submit'}
          fullWidth
          margin={'normal'}
        >
          Cadastrar
        </button>
      </SignUpFormContainer>
    </form>
  )
}

export default SignUpForm
