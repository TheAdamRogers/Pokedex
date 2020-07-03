import React from 'react';
import styled from 'styled-components';
import logo from '../pokeball.png';

const LogoImage = styled.img`
animation: App-logo-spin infinite 2s linear;
width: 5vw;
height: 5vw;
pointer-events: none;
display: flex;
align-self: center;
justify-content: center;
margin: auto;
`;

const Spinner = () => (
  <LogoImage src={logo} />
)

export { Spinner };

