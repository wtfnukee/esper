'use strict';

// Get elements
const btnPushData = document.getElementById("pushData");
const inputUsername = document.getElementById("inputUsername");
const inputText = document.getElementById("inputText");
const dbView = document.getElementById("dbView");

function pushData() {
    firebase.firestore().collection("/UserSandbox").add({
        username: inputUsername.value,
        text: inputText.value,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
}

firebase.firestore().collection('UserSandbox').get()
    .then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        dbView.innerText = dbView.innerText + doc.data().value;
    });
});

//Add button listeners
btnPushData.addEventListener('click', pushData, false);

