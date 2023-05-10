import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuthentication from '../firebase/firebase.init';


initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState('')
    const [error, setError] = useState('')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();


    const google = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                // console.log(result.user);
            }).catch((error) => {
                setError(error.message);
                // console.log(error.message);
            });
    }

    const github = () => {
        signInWithPopup(auth, gitHubProvider)
            .then((result) => {
                setUser(result.user);
                // console.log(result.user);
            }).catch((error) => {
                setError(error.message);
                // console.log(error.message);
            });
    }

    const registerUserPassword = (name, image, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                userUpdate(name, image);
            }).catch((error) => {
                setError(error.message);
            });
    }

    const userUpdate = (name, image) => {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
        })
            .then(() => {
            }).catch((error) => {
                setError(error.message);
            });

    };




    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });

    }, [auth])
    // ....................................
    const logIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user)
                // ...
            })
            .catch((error) => {
                setError(error.message);
            });
    }


    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
            // Sign-out successful.
        })
    };
    return {
        user,
        error,
        google,
        github,
        logOut,
        registerUserPassword,
        logIn
        // userUpdate
    }
}


export default useFirebase;