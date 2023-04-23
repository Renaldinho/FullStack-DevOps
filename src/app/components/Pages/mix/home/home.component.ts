import { Component } from '@angular/core';
import {FirebaseService} from "../../../../services/firebase.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  hobby: any;


  constructor(public firebaseService: FirebaseService) {
  }

  signOut() {
    this.firebaseService.signOut();
  }

  public addHobby(hobby: any) {
    this.firebaseService.addHobby(hobby);
  }
}
