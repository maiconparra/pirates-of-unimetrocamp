import React, {useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom';

import firebase from 'firebase';

import { firebaseConfig } from '../../enviroment/enviroment';
import logo from '../../assets/images/logo.svg';
import header from '../../assets/images/header.svg';
import footer from '../../assets/images/footer.svg';
import './index.css';


function Landing()
{


    firebase.initializeApp(firebaseConfig);

    function teste(){

        const googleProvider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(googleProvider)
                .then(result => {
                    window.location = '/post';
                })
                .catch(error => {

                });
    }

    return (
        <div>
            <div id="page-landing-content" className="container">
            <div className="header-container">
                <img src={ header } alt=""/>
                <ul>
                    <li><button onClick={teste}>Ver Posts</button></li>
                    <li><button onClick={teste}>Postar</button></li>
                </ul>
            </div>
            </div>
            <div className="logo-container">
                    <img src={ logo } alt="Pirates"/>
                    <h2><b>BEM VINDO</b> escreva suas idéias e compartilhe com amigos!</h2>
            </div>
            <div className="footer-container">
                    <img src={footer} alt=""/>
            </div>
        </div>
    );
}

export default withRouter(Landing);