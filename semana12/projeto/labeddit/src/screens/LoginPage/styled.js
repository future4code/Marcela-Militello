import styled from 'styled-components'

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-top: 5vh;

  > img {
    width: 25%;
  }
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;

  > input {
    margin-bottom: 20px;
    border-radius: 7px;
    outline: none;
    height: 30px;
  }
`

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  align-items: center;
  margin-top: 50px;

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

export const SignUpButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  margin-top: 30px;

  > button {
    width: 300px;
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