import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToFeed, goToLogin, goToSignUp } from '../routes/Coordinator';
import styled from 'styled-components';

const HeaderContainer = styled.div`
`

const Menu = styled.div`
    background-color: darkgray;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`

const Button = styled.button`
    
`

const MainIcon = styled.h3`

`

const Header = () => {
    const history = useHistory()
    return (
        <HeaderContainer>
            <Menu>
                <MainIcon onClick={() => goToFeed(history)}>LabEddit</MainIcon>
                <Button onClick={() => goToLogin(history)}>Log in</Button>
                <Button onClick={() => goToSignUp(history)}>Sign up</Button>
            </Menu>
        </HeaderContainer>
    )
}

export default Header

