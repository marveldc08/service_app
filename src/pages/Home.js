import React from 'react'

import styled from "styled-components"
import Header from "../components/Header";
import Service from '../components/Service';

import { useAuth } from "../firebase"

function Home() {
  const currentUser = useAuth();
    return (
      <Container>
        <Header />
        <Content>
          <h3>Welcome {currentUser?.displayName}</h3>
          <Wrap>
            <Service />
          </Wrap>
        </Content>
      </Container>
    );
}

export default Home

const Container = styled.div`
  //height: 100vh;
  
  overflow: hidden;
`
const Content = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  height: calc(100vh - 70px);

  h3{
    padding-top: 12px;
    padding-left: 12px;
  }
`
const Wrap = styled.div` 
  padding: 15px;
  margin-top: 15px;
`