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

  const serviceData = {
    uid: user.uid,
    serviceName: '',
    career: '',
    description: '',
    price: '',
    enabled: false
  };

  // Get a reference to the Firestore collection
  const db = admin.firestore();
  const userCollectionPath = 'users';
  const userRef = db.collection(userCollectionPath).doc(user.uid);

  const serviceCollectionPath = 'services';
  const serviceRef = db.collection(serviceCollectionPath).doc(user.uid);

  const setUserPromise = userRef.set(userData).catch((error) => {
    console.error('Error writing user document in Firestore', error);
  });

  // Set the service document in Firestore
  const setServicePromise = serviceRef.set(serviceData).catch((error) => {
    console.error('Error writing service document in Firestore', error);
  });

  // Return a Promise that resolves when both write operations are complete
  return Promise.all([setUserPromise, setServicePromise]);
});

app.put('/updateServiceData', async (req, res) => {
  const { uid, serviceData } = req.body;

  if (!uid || !serviceData) {
    return res.status(400).json({ message: "Invalid request. 'uid' and 'serviceData' fields are required." });
  }

  try {
    const userRef = admin.firestore().collection('services').doc(uid);
    await userRef.set(serviceData, { merge: true });
    res.status(200).json({ message: "Service data updated successfully." });
  } catch (error) {
    console.error('Error updating service data: ', error);
    res.status(500).json({ message: "Error updating service data." });
  }
});

exports.app = functions.https.onRequest(app);
