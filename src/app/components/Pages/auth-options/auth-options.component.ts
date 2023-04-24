import { Component } from '@angular/core';
import {FirebaseService} from "../../../services/firebase.service";

@Component({
  selector: 'app-auth-options',
  templateUrl: './auth-options.component.html',
  styleUrls: ['./auth-options.component.scss']
})
export class AuthOptionsComponent {


  constructor(public firebaseService: FirebaseService) {
  }

  handleGoogle() {
    this.firebaseService.googleSignInPopup();
  }

  handleFacebook() {
    this.firebaseService.facebookSignInPopup();
  }

  handleTwitter() {
    this.firebaseService.twitterSignInPopup();
  }
}
