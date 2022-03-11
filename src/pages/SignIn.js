import React from 'react';

import { FormControl, Button, Input, InputLabel } from "@mui/material";
import styled from 'styled-components';

import './SignIn.css'

function SignIn() {
  return (
    <Container>
      <Top>
        <SignUp>SignUp</SignUp>
      </Top>

      <h3>LogIn</h3>

      <form className='signIn__form'>
        <FormControl className="signIn__formControl">
          <InputLabel htmlFor="email">Email address</InputLabel>
          <Input id="email" />
        </FormControl>
        <br />
        <FormControl className="signIn__formControl">
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input id="password" />
        </FormControl>
        <br />
        <Button className='signIn__button'>LOGIN</Button>
      </form>

      <p>OR</p>

      <GoogleLogin>Continue with Google</GoogleLogin>
    </Container>
  );
}

export default SignIn


const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  h3 {
    color: #c2309c;
  }

  p {
    text-align: center;
  }
`;
const Top = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: right;
  align-items: right;
  padding: 20px;
  border-bottom: 1px solid #e5e5e5;
`;
const SignUp = styled.a`
  cursor: pointer;
  text-align: center;
  margin-right: 15px;
  color: #c2309c;
  font-weight: bold;
  font-size: 1.2em;

  &:hover {
    text-decoration: none;
    color: #c2309c;
  }
`;
const GoogleLogin = styled.a`
  width: 36%;
  background-color: #c2309c;
  font-weight: bold;
  padding: 17px 0;
  color: #ffffff;
  border-radius: 6px;
  text-align: center;
  font-size: 15px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 8px;

  &:hover {
    text-decoration: none;
    color: #ffffff;
  }

  @media screen and (max-width: 920px) {
    width: 90%;
  }
`;
