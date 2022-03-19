import React, { useRef, useState, useEffect } from "react";
import { auth } from "../firebase";
import { signUp } from '../firebase'
import {  onAuthStateChanged, updateProfile } from "firebase/auth";

import { useNavigate, Link } from "react-router-dom";

import { FormControl, Button, Input, InputLabel } from "@mui/material";
import styled from "styled-components";
import "./SignIn.css";

function SignUp() {

    const [loading, setLoading] = useState(false);
    
    const nameRef = useRef('');
    const phoneRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

         const handleSignup = async (event) => {
                event.preventDefault();
                try{
                    await signUp(emailRef.current.value, passwordRef.current.value).then(() => {
                      console.log(nameRef.current.value);
                        setLoading(true);
                        navigate("/signin");
                    }).catch(err => {
                        console.log(err)
                    })
                } catch {
                    alert("error")
                }
                //  setLoading(false);
        }
        
       useEffect(() => {
         onAuthStateChanged(auth, (user) => {
           updateProfile(user, {
             displayName: nameRef.current.value,
             photoURL: "https://example.com/jane-q-user/profile.jpg",
           }).then(() => {
             var displayName = user.displayName;
             var photoURL = user.photoURL;
           });
         });
       }, [handleSignup]);

   
   
 
  

     

  return (
    <Container>
      <Top>
        <Login href="/signin">Login</Login>
      </Top>

      <h3>SIGN UP</h3>

      <form className="signIn__form">
        <FormControl className="signIn__formControl">
          <InputLabel htmlFor="email">Name</InputLabel>
          <Input inputRef={nameRef} type="name" id="name" />
        </FormControl>
        <br />
        <FormControl className="signIn__formControl">
          <InputLabel htmlFor="phone">Phone Number</InputLabel>
          <Input inputRef={phoneRef} type="phone" id="phone" />
        </FormControl>
        <br />
        <FormControl className="signIn__formControl">
          <InputLabel htmlFor="email">Email address</InputLabel>
          <Input inputRef={emailRef} type="email" id="email" />
        </FormControl>
        <br />
        <FormControl className="signIn__formControl">
          <InputLabel htmlFor="password">Create Password</InputLabel>
          <Input inputRef={passwordRef} type="password" id="password" />
        </FormControl>
        <br />

        <Button
          disabled={loading}
          className="signUp__button"
          onClick={handleSignup}
        >
          SIGN UP
        </Button>
      </form>

      <Link to="/signin">
        <p>Already have an account? Login</p>
      </Link>
    </Container>
  );
}


export default SignUp;

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
    font-size: 13px;
    color: #c2309c;
  }

  @media screen and (max-width: 768px) {
    h3 {
      font-size: 18px;
    }
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
const Login = styled.a`
  cursor: pointer;
  text-align: center;
  margin-right: 15px;
  color: #c2309c;
  font-weight: bold;
  font-size: 1.2em;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: #c2309c;
  }
`;

