import { Component } from '@angular/core';
import {FirebaseService} from "../../../../services/firebase.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  hobby: any;


  constructor(public authService: FirebaseService) {
  }

  signOut() {
    this.authService.signOut();
  }

  public addHobby(hobby: any) {
    this.authService.addHobby(hobby);
  }
}
