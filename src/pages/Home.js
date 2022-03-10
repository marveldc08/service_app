import React from 'react'

import styled from "styled-components"
import Header from "../components/Header";
import Service from '../components/Service';

function Home() {
    return (
      <Container>
        <Header />
        <Service />
      </Container>
    );
}

export default Home

const Container = styled.div`
    height: 100vh;
   
    overflow: hidden;
`