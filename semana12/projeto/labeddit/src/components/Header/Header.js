import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToFeed, goToLogin, goToSignUp } from '../../routes/Coordinator';
import { HeaderContainer, Button, MainIcon } from './styled';

const Header = (props) => {
    const {buttonName, setButtonName} = props
    const history = useHistory()

    const logout = () => {
        localStorage.removeItem('token')
      }

      const menuAction = () => {
        const token = localStorage.getItem("token")
        if (token){
          logout()
          setButtonName('Login')
        }
        goToLogin(history)
      }

    return (
        <HeaderContainer>
            <MainIcon>
                <strong onClick={() => goToFeed(history)}>LabEddit</strong>
            </MainIcon>
            <Button>
                <button onClick={menuAction}>{buttonName}</button>
                <button onClick={() => goToSignUp(history)}>Sign up</button>
            </Button>
        </HeaderContainer>
    )
}

export default Header

