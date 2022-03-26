import React, { useRef, useState, useEffect } from "react";
import { auth } from "../firebase";
import { signUp } from '../firebase'
import {  onAuthStateChanged, updateProfile } from "firebase/auth";

import { useNavigate, Link } from "react-router-dom";

import { FormControl,Stack, Alert, AlertTitle, Button, Input, InputLabel, Dialog, DialogActions, DialogTitle, DialogContent,DialogContentText } from "@mui/material";
import styled from "styled-components";
import "./SignIn.css";

function SignUp() {

    const [loading, setLoading] = useState(false);
    //const [successAlert, setSuccessAlert] = useState(false);
    const [errorAlert, setErrorAlert] = useState(false);
    const [alertContent, setAlertContent] = useState('');
    const [openDialog, setOpenDialog] = useState(false);
    
    const nameRef = useRef('');
    const phoneRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleSignup = async (event) => {
            event.preventDefault();
            try{
                await signUp(emailRef.current.value, passwordRef.current.value).then((response) => {
                    setLoading(true);
                    setErrorAlert(false);
                    //setSuccessAlert(true);
                    //setAlertContent('Congratulations, Account Successfuly created.🎉')
                    setOpenDialog(true);
                }).catch(error => {
                     if (emailRef.current.value === '' || nameRef.current.value === '' || phoneRef.current.value === '' || passwordRef.current.value === '') {
                       //setSuccessAlert(false);
                       setErrorAlert(true);
                       setAlertContent("Please complete the form!");
                     }else if(error.code === 'auth/weak-password'){
                       //setSuccessAlert(false);
                        setErrorAlert(true);
                        setAlertContent("Your password is too weak!");
                     }else if(error.code === 'auth/invalid-email'){
                       //setSuccessAlert(false);
                       setErrorAlert(true);
                       setAlertContent("The email You provided has an invalid format!");
                     }else if(error.code === 'auth/email-already-in-use'){
                       // setSuccessAlert(false);
                       setErrorAlert(true);
                       setAlertContent("The email You provided is already in use!");
                     }
                })
            } catch {

            }
      
    }
      
      useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          updateProfile(user, {
            displayName: nameRef.current.value,
            photoURL: "./images/user2.png",
          }).then(() => {
            //var displayName = user.displayName;
            //var photoURL = user.photoURL;
          });
        });
      }, [{ handleSignup }]);

   
   
 
  

     

  return (
    <Container>
      <Top>
        <Login
          onClick={() => {
            navigate("/signin");
          }}
        >
          Log In
        </Login>
      </Top>

      <h3>Sign Up</h3>

      <Stack sx={{ width: "50%" }} className="errorAlert" spacing={2}>
        {errorAlert ? (
          <Alert
            onClose={() => {
              setErrorAlert(false);
            }}
            severity="error"
          >
            {alertContent}{" "}
          </Alert>
        ) : (
          <></>
        )}
        {/* {successAlert ? (
          <Alert
            onClose={() => {
              setSuccessAlert(false);
            }}
            severity="success"
          >
            {alertContent}{" "}
          </Alert>
        ) : (
          <></>
        )} */}
      </Stack>
      <br />
      <form className="signIn__form">
        <FormControl className="signIn__formControl">
          <InputLabel htmlFor="email">Name</InputLabel>
          <Input required inputRef={nameRef} type="name" id="name" />
        </FormControl>
        <br />
        <FormControl className="signIn__formControl">
          <InputLabel htmlFor="phone">Phone Number</InputLabel>
          <Input required inputRef={phoneRef} type="phone" id="phone" />
        </FormControl>
        <br />
        <FormControl className="signIn__formControl">
          <InputLabel htmlFor="email">Email address</InputLabel>
          <Input required inputRef={emailRef} type="email" id="email" />
        </FormControl>
        <br />
        <FormControl className="signIn__formControl">
          <InputLabel htmlFor="password">Create Password</InputLabel>
          <Input
            required
            inputRef={passwordRef}
            type="password"
            id="password"
          />
        </FormControl>
        <br />

        <Button
          disabled={loading}
          className="signUp__button"
          onClick={handleSignup}
        >
          {" "}
          SIGN UP{" "}
        </Button>
      </form>

      <p
        onClick={() => {
          navigate("/signin");
        }}
      >
        Already have an account? Login
      </p>

      <Dialog
        open={openDialog}
        onClose={() => {
          setOpenDialog(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className="signUp__dialog">
          {"Congratulations 🎉"}
        </DialogTitle>
        <DialogContent className="signUp__dialog">
          <DialogContentText id="alert-dialog-description">
            Your account has been successfuly created, You can now proceed to
            log in.
          </DialogContentText>
        </DialogContent>
        <DialogActions className="signUp__dialog">
          <Button
            onClick={() => {
              navigate("/signin");
            }}
            disableFocusRipple="true"
            disableRipple="true"
            className="signUp__dialogButton"
          >
            proceed
          </Button>
        </DialogActions>
      </Dialog>
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
    cursor: pointer;
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

