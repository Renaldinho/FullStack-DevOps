import { Component } from '@angular/core';
import {FirebaseService} from "../../../../services/firebase.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  email: any;
  password: any;

  constructor(public authService: FirebaseService) {
  }

  signIn(email: any, password: any) {
    this.authService.signIn(email,password);
  }

  register(email: any, password: any) {
    this.authService.register(email,password);
  }
}
