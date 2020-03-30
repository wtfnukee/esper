'use strict';


// Get elements
const btnPushData = document.getElementById("pushData");
const inputUsername = document.getElementById("inputUsername");
const inputText = document.getElementById("inputText");

const user = firebase.auth().currentUser;

if (user) {
    // User is signed in.
     const userId = user.uid;

    function pushData() {
        firebase.firestore().collection("/UserSandbox").add({
            username: inputUsername.value,
            text: inputText.value,
            uid: userId,
            timestamp: firebase.firestore().FieldValue.serverTimestamp()
        })
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
    }
    
    //Read data
    firebase.firestore().collection("/UserSandbox").doc("SF")
        .onSnapshot(function(doc) {
            alert("ЧТЕНИЕ РАБОТАЕТ");
        });

} else {
    // No user is signed in.
    alert('No user is signed in.');
}


//Add button listeners
btnPushData.addEventListener('click', pushData, false);

