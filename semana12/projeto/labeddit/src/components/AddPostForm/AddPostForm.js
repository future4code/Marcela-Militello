import React from 'react';
import { InputsContainer, AddPostFormContainer} from './styled';
import { useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { addPost } from '../../services/axios';

const AddPostForm = (props) => {
  const history = useHistory()
  const [form, handleInputChange] = useForm({title: '', text: ''})

  const onClickAddPost = (event) => {
    event.preventDefault()
    const element = document.getElementById('addpost_form')
    const isValid = element.checkValidity()
    element.reportValidity()
    if (isValid) {
      addPost(form, history)
    }
  }

  return (
    <form id={'addpost_form'}>
      <AddPostFormContainer>
        <InputsContainer>
          <input
            value={form.title}
            name={'title'}
            onChange={handleInputChange}
            placeholder={'Título'}
            required
            autoFocus
          />
          <textarea
            value={form.text}
            name={'text'}
            onChange={handleInputChange}
            placeholder={'Escreva seu post'}
            required
          />
        </InputsContainer>
        <button
          onClick={onClickAddPost}
          type={'submit'}
        >
          Postar
        </button>
      </AddPostFormContainer>
    </form>
  )
}

export default AddPostForm
