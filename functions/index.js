const functions = require("firebase-functions");
const admin = require('firebase-admin');

const app = require('express')();
const cors = require('cors');

app.use(cors());

admin.initializeApp()

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

app.put('/updateServiceData', async (req, res) => {
  const { uid, serviceData } = req.body;

  if (!uid || !serviceData) {
    return res.status(400).json({ message: "Invalid request. 'uid' and 'serviceData' fields are required." });
  }

  try {
    const userRef = admin.firestore().collection('users').doc(uid);
    await userRef.set(serviceData, { merge: true });
    res.status(200).json({ message: "Service data updated successfully." });
  } catch (error) {
    console.error('Error updating service data: ', error);
    res.status(500).json({ message: "Error updating service data." });
  }
});

exports.app = functions.https.onRequest(app);
