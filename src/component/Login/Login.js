import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import initializeAuthentication from '../../firebase/firebase.init';
import SinIn from '../SinIn';
initializeAuthentication()
const provider = new GoogleAuthProvider();

const Login = () => {
    const sinInWithGoogle= ()=>{
        const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log(token, user);

  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(errorCode,errorMessage,email,credential)
  });
    }
    return (
        <section className='bg-brand bg-brand-container'>
            <Navbar />
            <SinIn />
            Login
            <button onClick={sinInWithGoogle} className="btn btn-success mx-auto d-block mt-5">SinIn with Google</button>

        </section>
    );
};

export default Login;