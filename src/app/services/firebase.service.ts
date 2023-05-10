import {Injectable} from '@angular/core';
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth';
import 'firebase/compat/storage'

import {DefaultUserData} from "../interfaces/default-user-data";
import * as config from '../../../firebaseconfig.js'
import {User} from "../interfaces/User";
import {Router} from "@angular/router";
import {RoutingPaths} from "../interfaces/common-interfaces.service";
import {UserDataStore} from "../stores/user-data.store";
import {NotificationService} from "./notification.service";
import {NotificationType} from "angular2-notifications";
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
import FacebookAuthProvider = firebase.auth.FacebookAuthProvider;
import TwitterAuthProvider = firebase.auth.TwitterAuthProvider;
import {ErrorManagerService} from "./error-manager.service";

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


  currentUserAvatarURL: string = DefaultUserData.AVATAR_URL;



  constructor(private router: Router, private userDataStore: UserDataStore,private errorManager:ErrorManagerService, private notifService: NotificationService) {
    this.firebaseApplication = firebase.initializeApp(config.firebaseConfig)
    this.firestore = firebase.firestore();
    this.auth = firebase.auth();
    this.storage = firebase.storage();

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
    this.auth.signInWithEmailAndPassword(email,password);
  }

  public signOut(){
    this.auth.signOut()
      .catch((error) => {
        console.log(error)
      })
  }


  public register(email: any, password: any) {
    this.auth.createUserWithEmailAndPassword(email,password).then((userCredentials) => {
      this.persistUser(userCredentials);
    });
  }
  public addHobby(hobby: any) {
    console.log(this.auth.currentUser)
    this.firestore.collection(this.userCollectionPath)
      .doc(this.auth.currentUser?.uid)
      .collection(this.userHobbiesPath)
      .add({Hobby: hobby})
      .catch((error) => {
        console.log(error)
      })
  }

  private resetUserData() {
    this.currentUserAvatarURL = DefaultUserData.AVATAR_URL;
  }

  googleSignInPopup() {
    this.auth.signInWithPopup(this.googleProvider)
      .then((userCredentials) => {
        this.persistUser(userCredentials);
      })
      .catch((error) => console.log(error));
  }

  private persistUser(userCredentials: firebase.auth.UserCredential) {
    var userData: User = {
      uid: userCredentials.user?.uid,
      email: userCredentials.user?.email,
      address: '', firstName: '', lastName: '', phone: '',username: ''
    }
    this.firestore.collection(this.userCollectionPath)
      .doc(userCredentials.user?.uid)
      .set(userData)
      .catch((error) => {
        console.log(error)
      })

  }

  facebookSignInPopup() {
    this.auth.signInWithPopup(this.facebookProvider)
      .then((userCredentials) => {
        this.persistUser(userCredentials)
      })
      .catch((error) => console.log(error));
  }

  twitterSignInPopup() {
    this.auth.signInWithPopup(this.twitterProvider)
      .then((userCredentials) => {
        this.persistUser(userCredentials)
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

  }

  updateUserData(user: any) {
    //Update written data
    this.firestore
      .collection(this.userCollectionPath)
      .doc(user.uid)
      .set(user);
  }
}
