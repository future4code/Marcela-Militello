import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../constants/urls';

const useGetPostDetail = () => {
    const [detail, setDetail] = useState([])
  
    useEffect(() => {
      axios.get(`${baseUrl}/posts/:postId`, {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      })
        .then((response) => {
          console.log(response.data)
          setDetail(response.data)
        })
        .catch((error) => {
          console.log(error)
          alert('Ocorreu um erro, tente novamente')
        })
    }, [])
  
    return (detail)
  }

  export default useGetPostDetail