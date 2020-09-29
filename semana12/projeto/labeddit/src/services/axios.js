import axios from 'axios'
import { baseUrl } from '../constants/urls'
import { goToFeed } from '../routes/Coordinator'

export const login = (body, history, setButtonName) => {
  axios.post(`${baseUrl}/login`, body)
    .then((response) => {
      localStorage.setItem('token', response.data.token)
      goToFeed(history)
      setButtonName('Logout')
    })
    .catch((error) => {
      console.log(error)
      alert("Falha no Login, tente novamente!")
    })
}

export const signUp = (body, history, setButtonName) => {
  axios.post(`${baseUrl}/signup`, body)
    .then((response)=>{
      localStorage.setItem('token', response.data.token)
      goToFeed(history)
      setButtonName('Logout')
    })
    .catch((error) => {
      console.log(error)
      alert("Falha no cadastro, tente novamente!")
    })
}
