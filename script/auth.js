'use strict';
// Esper's Firebase configuration
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

// Get elements
const txtEmail = document.getElementById("txtEmail");
const txtPassword = document.getElementById("txtPassword");
const btnLogin = document.getElementById("btnLogin");
const btnSignUp = document.getElementById("btnSignUp");
const btnLogout = document.getElementById("btnLogout");

//Add auth functions
function toggleSignIn() {
    if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
    } else {
        const email = txtEmail.value;
        const pass = txtPassword.value;
        if (email.length < 4) {
            alert('Please enter an email address.');
            return;
        }
        if (pass.length < 4) {
            alert('Please enter a password.');
            return;
        }
        // Sign in with email and pass.
        // [START authwithemail]
        firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
            btnLogin.disabled = false;
            // [END_EXCLUDE]
        });
        // [END authwithemail]
    }
    btnLogin.disabled = true;
    if (firebase.auth().currentUser) {
        window.location.href = "workspace.html"; //CC{you_are_curious_i_like_it}
    } else {
        alert("This account does not exist")
    }

}

function handleSignUp() {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    if (email.length < 4) {
        alert('Please enter an email address.');
        return;
    }
    if (pass.length < 4) {
        alert('Please enter a password.');
        return;
    }
    // Create user with email and pass.
    // [START createwithemail]
    firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === 'auth/weak-password') {
            alert('The password is too weak.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
    });
    // [END createwithemail]
}

function toggleSignOut(){
    firebase.auth().signOut();
}

//Add button listeners
btnLogin.addEventListener('click', toggleSignIn, false);
btnSignUp.addEventListener('click', handleSignUp, false);
