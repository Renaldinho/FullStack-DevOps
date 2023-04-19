import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

import * as config from '../../../firebaseconfig.js'
import firestore = firebase.firestore;

@Injectable({
  providedIn: 'root'
})
export class FireAuthService {

  firebaseApplication;
  firestore: firebase.firestore.Firestore
  auth: firebase.auth.Auth;


  constructor() {
    this.firebaseApplication = firebase.initializeApp(config.firebaseConfig);
    this.firestore = firebase.firestore();
    this.auth = firebase.auth();

    this.initAuth();
  }

  //TODO
  //Callback to when auth state changes
  private initAuth() {
    this.auth.onAuthStateChanged( (user) => {
      if (user){

      }
    })
  }
}
