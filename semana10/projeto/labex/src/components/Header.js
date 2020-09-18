import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: whitesmoke;
    height: 15vh;

    > h2 {
      font-family: 'Kalam', cursive;
      font-size: 60px;
      color: coral;
    }
`

function Header() {
  return (
    <HeaderContainer>
        <h2>LabeX</h2>
        <h3>Encontre as melhores viagens espaciais!</h3>
    </HeaderContainer>
  );
}

export default Header;
