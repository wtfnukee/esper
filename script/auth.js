"use strict";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyADl-M9rosKLQhgYqPX73OChXnkQX3Z_80",
    authDomain: "esperproj.firebaseapp.com",
    databaseURL: "https://esperproj.firebaseio.com",
    projectId: "esperproj",
    storageBucket: "esperproj.appspot.com",
    messagingSenderId: "317958487855",
    appId: "1:317958487855:web:3d018d8d2fca24a3ab6bda",
    measurementId: "G-49116J0KB3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();



const txtEmail = document.getElementById("txtEmail");
const txtPassword = document.getElementById("txtPassword");
const btnLogin = document.getElementById("btnLogin");
const btnSignUp = document.getElementById("btnSignUp");
const btnLogout = document.getElementById("btnLogout");

const dbView= document.getElementById("dbView");

btnLogin.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
    firebase.auth().onAuthStateChanged(firebaseUser =>{
        if (firebaseUser) {
            window.location.href = "workspace.html/"; //TODO заменить на вход в workspace
        } else {
            console.log("not logged in");
        }
    });

});

btnSignUp.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
    let sve = auth.currentUser.sendEmailVerification(email, pass);
    sve.catch(e => console.log(e.message));
});

btnLogout.auth().addEventListener('click', e=>{
    firebase.auth().signOut();
});

