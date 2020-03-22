import React from 'react';
import styled from 'styled-components';

export default function SearchAppBar() {
  
  const NavBar = styled.header`
    background-color: black;
    color: white;
    margin-top: 0;
  `

  const Title = styled.h1`
    margin: 0;
  `

  return (
    <NavBar>
    <Title>Nasa Photo of the Day</Title>
    </NavBar>
  );
}