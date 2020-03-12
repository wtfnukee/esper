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
const btnSignUp = document.getElementById("btnSignUp");
const btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));

});

btnSignUp.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));

});

firebase.auth().onAuthStateChanged(firebaseUser =>{
    if (firebaseUser) {
        console.log(firebaseUser)
    } else {
        console.log("not logged in");
    }
});