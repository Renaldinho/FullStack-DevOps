import {Injectable} from '@angular/core';
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth';
import 'firebase/compat/storage'

import {DefaultUserData} from "../interfaces/default-user-data";
import * as config from '../../../firebaseconfig.js'
import {User} from "../interfaces/User";
import {Router} from "@angular/router";
import {RoutingPaths, ServiceData} from "../interfaces/common-interfaces.service";
import {UserDataStore} from "../stores/user-data.store";
import {NotificationService} from "./notification.service";
import {NotificationType} from "angular2-notifications";
import {ErrorManagerService} from "./error-manager.service";
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
import FacebookAuthProvider = firebase.auth.FacebookAuthProvider;
import TwitterAuthProvider = firebase.auth.TwitterAuthProvider;
import {AxiosService} from "./axios.service";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  firebaseApplication;
  firestore: firebase.firestore.Firestore
  auth: firebase.auth.Auth;
  storage: firebase.storage.Storage;

  facebookProvider: FacebookAuthProvider
  googleProvider: GoogleAuthProvider
  twitterProvider: TwitterAuthProvider


  userCollectionPath: string = "users"
  userHobbiesPath: string = "hobbies"

  userAvatarPath: string = 'avatars'
  serviceImagePAth: string = 'services'


  currentUserAvatarURL: string = DefaultUserData.AVATAR_URL;



  constructor(private router: Router, private userDataStore: UserDataStore,private errorManager:ErrorManagerService, private notifService: NotificationService,public axios: AxiosService) {
    this.firebaseApplication = firebase.initializeApp(config.firebaseConfig)
    this.firestore = firebase.firestore();
    this.auth = firebase.auth();
    this.storage = firebase.storage();

    // this.firestore.useEmulator("localhost",8080)
    // this.auth.useEmulator("http://localhost:9099/")
    // this.storage.useEmulator("localhost",9199);




    this.facebookProvider = new FacebookAuthProvider();
    this.googleProvider = new GoogleAuthProvider();
    this.twitterProvider = new TwitterAuthProvider();

    this.initAuth();
  }

  //TODO
  //Callback to when auth state changes
  private initAuth() {
    this.auth.onAuthStateChanged( (user) => {
      if (user){
        this.handleSignIn();
      }
      else
        this.handleSignOut();
    })
  }

  private handleSignIn() {
    this.loadUserData();
    console.log('before')
    this.router.navigate([RoutingPaths.HOME])
  }


  private handleSignOut() {
    this.resetUserData();
    this.router.navigate([RoutingPaths.SIGN_IN])
  }

  async updateUserImage($event){
    const img = $event.target.files[0];
    const uploadTask = await this.storage
      .ref(this.userAvatarPath)
      .child(this.auth.currentUser?.uid+"")
      .put(img);
    this.loadUserData()
  }


  public signIn(email: any, password: any) {
    this.auth.signInWithEmailAndPassword(email,password)
      .then((userCredentials) => {
        this.handleSuccess();
      });
  }

  public signOut(){
    this.auth.signOut()
      .catch((error) => {
        console.log(error)
      })
  }


  public register(email: any, password: any) {
    this.auth.createUserWithEmailAndPassword(email,password).then((userCredentials) => {
    });
  }

  private resetUserData() {
    this.currentUserAvatarURL = DefaultUserData.AVATAR_URL;
  }

  googleSignInPopup() {
    this.auth.signInWithPopup(this.googleProvider)
      .then((userCredentials) => {
      })
      .catch((error) => console.log(error));
  }

  facebookSignInPopup() {
    this.auth.signInWithPopup(this.facebookProvider)
      .then((userCredentials) => {
      })
      .catch((error) => console.log(error));
  }

  twitterSignInPopup() {
    this.auth.signInWithPopup(this.twitterProvider)
      .then((userCredentials) => {
      })
      .catch((error) => console.log(error));
  }

  private loadUserData() {
    //Load written data

    this.firestore
      .collection(this.userCollectionPath)
      .doc(this.auth.currentUser?.uid)
      .onSnapshot((documentSnapshot) => {
        this.userDataStore.setUserData(documentSnapshot.data())
    });

    //Load image data
    this.storage
      .ref(this.userAvatarPath)
      .child(this.auth.currentUser?.uid+"")
      .getDownloadURL().then((imageUrl) => {
        this.userDataStore.setAvatarImageUrl(imageUrl);
      }).catch((error) => console.log(error))


    this.storage
      .ref(this.serviceImagePAth)
      .child(this.auth.currentUser?.uid+"")
      .getDownloadURL().then((imageUrl) => {
      this.userDataStore.setServiceImageUrl(imageUrl);
    }).catch((error) => console.log(error))
  }

  updateUserData(user: any) {
    //Update written data
    this.firestore
      .collection(this.userCollectionPath)
      .doc(user.uid)
      .set(user);
  }

  private handleSuccess() {
    this.notifService.createMessage(NotificationType.Success,'',"Success")
  }

  updateServiceData(serviceData: ServiceData) {
    this.axios.updateServiceData(this.auth.currentUser?.uid,serviceData)
  }

  async updateServiceImage($event) {
    const img = $event.target.files[0];
    const uploadTask = await this.storage
      .ref(this.serviceImagePAth)
      .child(this.auth.currentUser?.uid+"")
      .put(img);
    this.loadUserData()
  }

  getServices() {
    return Promise.all(
      collectionNames.map(collection =>
        db.collection(collection).where('your-field-name', '!=', null).get()
      )
    )
      .then(querySnapshots => {
        return querySnapshots.map(querySnapshot =>
          querySnapshot.docs.map(doc => doc.data())
        ).flat(); // Flattens the array of arrays into a single array
      })
      .catch((error) => {
        console.error("Error retrieving documents: ", error);
        throw error; // If you want to handle error elsewhere, you can throw it after logging
      });
  }

  module.exports = getDocumentsFromCollections;
}
