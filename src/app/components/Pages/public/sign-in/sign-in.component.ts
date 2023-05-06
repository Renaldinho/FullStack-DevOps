import {Component, ElementRef, ViewChild} from '@angular/core';
import {FirebaseService} from "../../../../services/firebase.service";
import {InputFieldComponent} from "../../../generic/input-field/input-field.component";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  @ViewChild("EmailInput") emailInput: InputFieldComponent | undefined
  @ViewChild("PasswordInput") passwordInput: InputFieldComponent | undefined

  email: any;
  password: any;
  login: boolean = false;

  constructor(public authService: FirebaseService) {
  }

  signIn() {
    const email = this.emailInput?.inputValue;
    const password = this.passwordInput?.inputValue;
    this.authService.signIn(email,password);
  }

  signUp() {
    const email = this.emailInput?.inputValue;
    const password = this.passwordInput?.inputValue;
    this.register(email,password);
  }

  register(email: any, password: any) {
    this.authService.register(email,password);
  }

  transition(value: boolean) {
    this.login = value
  }
}
