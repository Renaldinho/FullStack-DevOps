import {Component, ElementRef, ViewChild} from '@angular/core';
import {FirebaseService} from "../../../../services/firebase.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  @ViewChild("EmailInput") emailInput: ElementRef | undefined
  @ViewChild("PasswordInput") passwordInput: ElementRef | undefined

  email: any;
  password: any;
  login: boolean = false;

  constructor(public authService: FirebaseService) {
  }

  signIn(email: any, password: any) {

    this.authService.signIn(email,password);
  }

  register(email: any, password: any) {
    this.authService.register(email,password);
  }

  transition(value: boolean) {
    this.login = value
  }
}
