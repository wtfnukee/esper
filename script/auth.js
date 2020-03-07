// Signs-in Esper.
function signIn() {
    // Sign in Firebase using popup auth and Google as the identity provider.
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
}

// Signs-out of Esper.
function signOut() {
    // Sign out of Firebase.
    firebase.auth().signOut();
}

// Returns true if a user is signed-in.
function isUserSignedIn() {
    return !!firebase.auth().currentUser;
}

function foobar() {
    alert("foobar")
}