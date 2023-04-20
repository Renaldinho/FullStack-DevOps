import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth';

import * as config from '../../../firebaseconfig.js'
import firestore = firebase.firestore;
import {User} from "../interfaces/User";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  userCollectionPath: string = "Users"
  userHobbiesPath: string = "Hobbies"

  firebaseApplication;
  firestore: firebase.firestore.Firestore
  auth: firebase.auth.Auth;

  constructor() {
    this.firebaseApplication = firebase.initializeApp(config.firebaseConfig)
    this.firestore = firebase.firestore();
    this.auth = firebase.auth();

    this.initAuth();
  }

  //TODO
  //Callback to when auth state changes
  private initAuth() {
    this.auth.onAuthStateChanged( (user) => {
      if (user){
        console.log("logged in")
      }
    })
  }

  public signIn(email: any, password: any) {
    this.auth.signInWithEmailAndPassword(email,password);
  }

  public signOut(){
    this.auth.signOut();
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
}
