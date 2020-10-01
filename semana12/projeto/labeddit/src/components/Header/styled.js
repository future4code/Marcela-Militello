import styled from 'styled-components'

export const HeaderContainer = styled.div`
    background-color: darkgray;
    box-shadow: 0px 3px 5px 1px grey;
    height: 8vh;
    display: flex;    
`

export const MainIcon = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    margin-left: 50px;

    > strong {
        font-size: 22px;
        color: white;
        cursor: pointer;
    }
`

export const Button = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    > button {
        cursor: pointer;
        width: 30%;
        height: 40px;
        border: none;
        border-radius: 7px;
        outline: none;
        font-size: 15px;
        font-weight: bold; 
        background-color: grey;
        color: white;

        :hover {
          background-color: red;
          color: white;
        }
    }
`