'use strict';

// Get elements
const pushData = document.getElementById("pushData");
const inputUsername = document.getElementById("username");
const inputText = document.getElementById("text");
const dbView = document.getElementById('dbView');

//Create references
const dbRefObject = firebase.database().ref().child('dbView');

//Sync object changes
dbRefObject.on('value', snap => {
    dbView.innerText = JSON.stringify(snap.val(), null, 3);
});
