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


function handleSignUp() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email.length < 4) {
        alert('Please enter an email address.');
        return;
    }
    if (password.length < 4) {
        alert('Please enter a password.');
        return;
    }
    // Create user with email and pass.
    // [START createwithemail]
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
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

const txtEmail = document.getElementById("txtEmail");
const txtPassword = document.getElementById("txtPassword");
const btnSignUp = document.getElementById("btnSignUp");
const btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtEmail.value;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));

});
