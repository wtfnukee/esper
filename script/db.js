'use strict';

// Get elements
const btnPushData = document.getElementById("pushData");
const inputUsername = document.getElementById("inputUsername");
const inputText = document.getElementById("inputText");

const userId = firebase.auth().currentUser.uid;

function pushData() {
    firebase.firestore().collection("/UserSandbox").add({
        username: inputUsername.value,
        text: inputText.value,
        uid: userId.value,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
}

function readData() {

}

//Add button listeners
btnPushData.addEventListener('click', pushData);
