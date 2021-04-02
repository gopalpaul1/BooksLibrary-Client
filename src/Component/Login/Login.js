import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebaseConfig';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const Login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email:'',
        password:'',
        photo:''
        // error:'',
        // success: false
    })

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleSignin = () => {
        firebase.auth().signInWithPopup(provider)
        .then(result => {

        const {displayName, email, photoURL} = result.user
        const signedIn = {
            isSignedIn: true,
            name: displayName,
            email: email,
            photo: photoURL
        }
        setUser(signedIn)
        setLoggedInUser(signedIn)
        history.replace(from)

        })
        .catch(error => {
        console.log(error)
        })
    }
    return (
        <div>
            <p>Name: {loggedInUser.name}</p>
            <button onClick={handleSignin}>Signin with Google</button>
        </div>
    );
};

export default Login;