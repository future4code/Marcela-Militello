import axios from 'axios';
import { baseUrl } from '../constants/urls';
import { goToFeed } from '../routes/Coordinator';
import getPosts from '../hooks/useRequestData';

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
    .then((response) => {
      localStorage.setItem('token', response.data.token)
      goToFeed(history)
      setButtonName('Logout')
    })
    .catch((error) => {
      console.log(error)
      alert("Falha no cadastro, tente novamente!")
    })
}

export const addPost = (body) => {
  axios.post(`${baseUrl}/posts`, body, {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  }).then((response) => {
      alert('Seu post foi adicionado ao feed!')
      getPosts()
    }
  ).catch((error) => {
      console.log(error)
      alert('Seu post não foi adicionado, tente novamente')
    }
  )
}