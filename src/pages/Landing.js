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
  background: #C2309C;

  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#d13fb2+0,c12f9a+41,98006a+67,dd1d9d+100 */
  background: #d13fb2; /* Old browsers */
  background: -moz-linear-gradient(
    -45deg,
    #d13fb2 0%,
    #c12f9a 41%,
    #98006a 67%,
    #dd1d9d 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    -45deg,
    #d13fb2 0%,
    #c12f9a 41%,
    #98006a 67%,
    #dd1d9d 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    135deg,
    #d13fb2 0%,
    #c12f9a 41%,
    #98006a 67%,
    #dd1d9d 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d13fb2', endColorstr='#dd1d9d',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */

  i {
    position: absolute;
    bottom: 8em;
    color: #C2309C;
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
  color: #C2309C;
  border: 1px solid #C2309C;
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
    background: #C2309C;
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