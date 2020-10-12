import styled from 'styled-components'

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  > input {
    width: 300px;
    margin-bottom: 20px;
    border-radius: 7px;
    outline: none;
    height: 30px;
  }

  > textarea {
    width: 300px;
    border-radius: 7px;
    outline: none;
    height: 100px;
    resize: none;
  }
`

export const AddPostFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightgray;
  border-radius: 7px;
  padding: 70px;

  > button {
    width: 120px;
    height: 40px;
    border: none;
    border-radius: 7px;
    outline: none;
    font-size: 15px;
    font-weight: bold; 
    cursor: pointer;
    background-color: grey;
    color: white;

    :hover {
      background-color: red;
      color: white;
    }
  }
`
