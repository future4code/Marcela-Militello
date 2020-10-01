import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../constants/urls';

const useRequestData = () => {
    const [data, setData] = useState([])
  
    useEffect(() => {
      axios.get(`${baseUrl}/posts`, {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      })
        .then((response) => {
          console.log(response.data)
          setData(response.data)
        })
        .catch((error) => {
          console.log(error)
          alert('Ocorreu um erro, tente novamente')
        })
    }, [])
  
    return (data)
  }

  export default useRequestData