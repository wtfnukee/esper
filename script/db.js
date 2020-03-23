'use strict';

// Get elements
const pushData = document.getElementById("pushData");
const inputUsername = document.getElementById("username");
const inputText = document.getElementById("text");


let userId = firebase.auth().currentUser.uid;

function Sandbox() {
    firebase.database().ref('UserSandbox/' + userId).set({
        "text": inputText,
        "author": inputUsername,
        "uid": userId
    }).then(r => console.log(inputText));
}

//Add button listeners
pushData.addEventListener('click', Sandbox);