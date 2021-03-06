import React, { useEffect, useRef, useState } from 'react';
import { auth, provider, signIn } from "../firebase";
import {
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";

import { getPerformance } from "firebase/performance"; 
import { selectUserName, selectUserEmail, selectUserPhoto, setUserLogIn, setUserLogOut } from '../features/user/userSlice';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from 'react-router-dom';

import { FormControl, Button, Input, InputLabel, Alert, Stack } from "@mui/material";
import styled from 'styled-components';
import './SignIn.css'

function SignIn() {

  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const navigate = useNavigate()

  const emailRef = useRef('');
  const passwordRef = useRef('');
  const [errorAlert, setErrorAlert] = useState(false);
  const [alertContent, setAlertContent] = useState('');



  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;

      dispatch(
        setUserLogIn({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
      // ...
      navigate("/home");
    }).catch((error) => {
         // Handle Errors here.
         const errorCode = error.code;
         const errorMessage = error.message;
         // The email of the user's account used.
         const email = error.email;
         // The AuthCredential type that was used.
         const credential = GoogleAuthProvider.credentialFromError(error);
         // ...
       });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUserLogIn({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        // ...
      }
    });
  }, []);

  const handleSignin = async (event) => {
    event.preventDefault();
    try {
      await signIn(emailRef.current.value, passwordRef.current.value)
        .then((result) => {
          navigate("/home");
        })
        .catch(error => {
          console.log(error.code); 
         if (emailRef.current.value === '' || passwordRef.current.value === '' || error.code === 'auth/invalid-email') {
                       setErrorAlert(true);
                       setAlertContent("Invalid email or password!");
          }else if(error.code === 'auth/wrong-password'){
                        setErrorAlert(true);
                        setAlertContent("Wrong Password!");
          }else if(error.code === 'auth/user-not-found'){
             setErrorAlert(true);
             setAlertContent("Account does not exist!");
          }
        });
    } catch {
      alert("error!");
    }
  };
    
    

  const logOut = () => {
    auth.signOut().then(() => {
      dispatch(setUserLogOut({ name: "", email: "", photo: "" }));
      navigate("/");
    });
  };

  return (
    <Container>
      <Top>
        <SignUp onClick={ () => {navigate("/signup")} }>Sign Up</SignUp>
      </Top>
      <Stack  className='errorAlert' spacing={2}>
        {errorAlert ? <Alert onClose={() => {setErrorAlert(false);}}severity="error" >{alertContent} </Alert> :  <></> }
      </Stack>
      <br />
      <h3>Log In</h3>
      <form className="signIn__form">
        <FormControl className="signIn__formControl">
          <InputLabel htmlFor="email">Email address</InputLabel>
          <Input inputRef={emailRef} type="email" id="email" />
        </FormControl>
        <br />
        <FormControl className="signIn__formControl">
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input inputRef={passwordRef} type="password" id="password" />
        </FormControl>
        <br />
        <Button className="signIn__button" onClick={handleSignin}>
          LOG IN
        </Button>
      </form>
      <br />
      <p>OR</p>

      <GoogleLogin onClick={signInWithGoogle}>Continue with Google</GoogleLogin>
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
  @media screen and (max-width: 768px) {
    h3 {
      font-size: 26px;
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
const SignUp = styled.a`
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
