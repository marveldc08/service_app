import React from 'react'

import styled from 'styled-components'

function Landing() {
  return (
    <Container>
      <Wrap>
        <Logo src="/images/logo.jpg" />
      </Wrap>
      <i>Bringing Comfort To Life</i>
      <Continue>CONTINUE</Continue>
      <Design></Design>
    </Container>
  );
}

export default Landing

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #800080;

  i {
    position: absolute;
    bottom: 8em;
    color: #800080;
  }
`;
const Wrap = styled.div`
  max-width: 658px;
  width: 90%;
  padding: 80px 50px; 
  display: flex;
  flex-direction: column;
  margin-top: 140px;
  align-items: center;
`
const Logo =styled.img`
  border-radius: 3%;
`
const Continue = styled.a`
  width: 45%;
  position: absolute;
  bottom: 38px;
  background-color: none;
  font-weight: bold;
  padding: 17px 0;
  color: #800080;
  border: 1px solid #800080;
  border-radius: 6px;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 8px;
  z-index: 1;

  &:hover {
    background: #800080;
    text-decoration: none;
    color: #f9f9f9;
  }
`;
const Design =styled.div`
  height: 50vh;
  width: 100%;
  border-radius: 0 50% 0 0;
  background-color: #ffffff;
`