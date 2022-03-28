import React from 'react'

import styled from 'styled-components'

function service() {
  return (
    <Container>
      <h4>select a service</h4>
      <Content>
        <PreWrap>
          <Wrap>
            <img src="./images/playtime.png" />
          </Wrap>
          <p>Child Care</p>
        </PreWrap>
        <PreWrap>
          <Wrap>
            <img src="./images/cooking.png" />
          </Wrap>
          <p>Cooking</p>
        </PreWrap>
        <PreWrap>
          <Wrap>
            <img src="./images/household.png" />
          </Wrap>
          <p>Clean-up </p>
        </PreWrap>
        <PreWrap>
          <Wrap>
            <img src="./images/tool-box.png" />
          </Wrap>
          <p>Fixing</p>
        </PreWrap>
      </Content>
    </Container>
  );
}

export default service

const Container = styled.div`
  padding-top:2em;
  h4{
    margin-bottom: 3.3em;
  }
`
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  justify-content: center;
  align-items: center;
 
  //mobile view
  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  /* Portrait and Landscape */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1922px) and (-webkit-min-device-pixel-ratio: 2) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`
const PreWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin-top: 1em;
    font-weight: 500;
  }

  &:hover {
    transform: scale(1.05);
    /* box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    border-color: rgba(249, 249, 249, 0.8); */
  }
`;
const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgb(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 60%) 0px 26px 30px -10px,
    rgb(0 0 0 / 69%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 50%;
    height: 100%;
    object-fit: cover;
  }
  
`;
