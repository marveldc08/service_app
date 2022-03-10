import React from 'react'

import styled from 'styled-components'

function service() {
  return (
    <Container>
       <Content>
           <Wrap>
                <img src= './images/user.jpg' />
           </Wrap>
           <p>SOSOS Service</p>
       </Content>
    </Container>
  )
}

export default service

const Container = styled.div`

`
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`
const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgb(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  cursor: pointer;
`;
