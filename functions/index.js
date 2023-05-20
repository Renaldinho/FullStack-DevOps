const functions = require("firebase-functions");
const admin = require('firebase-admin')

admin.initializeApp({projectId: 'fullstack-99235'})

exports.persistUser = functions.auth.user().onCreate((user) => {
  // Prepare user data to be saved in Firestore
  const userData = {
    uid: user.uid,
    email: user.email,
    address: '',
    firstName: '',
    lastName: '',
    phone: '',
    username: ''
  };

  // Get a reference to the Firestore collection
  const userCollectionPath = 'users'; // replace 'users' with your actual collection path
  const db = admin.firestore();
  const userRef = db.collection(userCollectionPath).doc(user.uid);

  // Set the user document in Firestore
  return userRef.set(userData)
    .catch((error) => {
      console.error('Error writing user document in Firestore', error);
    });
});
