import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth';
import 'firebase/compat/storage'

import {DefaultUserData} from "../interfaces/default-user-data";
import * as config from '../../../firebaseconfig.js'
import firestore = firebase.firestore;
import {User} from "../interfaces/User";
import {addWarning} from "@angular-devkit/build-angular/src/utils/webpack-diagnostics";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  userCollectionPath: string = "users"
  userHobbiesPath: string = "hobbies"

  userAvatarPath: string = 'avatars'

  currentUserAvatarURL: string = DefaultUserData.AVATAR_URL;

  firebaseApplication;
  firestore: firebase.firestore.Firestore
  auth: firebase.auth.Auth;
  storage: firebase.storage.Storage;

  constructor() {
    this.firebaseApplication = firebase.initializeApp(config.firebaseConfig)
    this.firestore = firebase.firestore();
    this.auth = firebase.auth();
    this.storage = firebase.storage();

    this.initAuth();
  }

  //TODO
  //Callback to when auth state changes
  private initAuth() {
    this.auth.onAuthStateChanged( (user) => {
      if (user){
        this.getUserProfilePic();
      }
      else
        this.resetUserData();
    })
  }

  async getUserProfilePic() {
    this.currentUserAvatarURL = await this.storage
      .ref(this.userAvatarPath)
      .child(this.auth.currentUser?.uid+"")
      .getDownloadURL();
  }

  async updateUserImage($event){
    const img = $event.target.files[0];
    const uploadTask = await this.storage
      .ref(this.userAvatarPath)
      .child(this.auth.currentUser?.uid+"")
      .put(img);
    this.currentUserAvatarURL = await uploadTask.ref.getDownloadURL()
  }


  public signIn(email: any, password: any) {
    this.auth.signInWithEmailAndPassword(email,password)
      .catch((error) =>
      {
      console.log(error)
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
      var userData: User = {
        uid: userCredentials.user?.uid,
        email: userCredentials.user?.email,
      }
      this.firestore.collection(this.userCollectionPath)
        .doc(userCredentials.user?.uid)
        .set(userData)
        .catch((error) => {
          console.log(error)
        })
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
}
