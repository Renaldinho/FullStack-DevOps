import { Component } from '@angular/core';
import {FireAuthService} from "../../../../services/fire-auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  email: any;
  password: any;

  constructor(public authService: FireAuthService) {
  }

  signIn(email: any, password: any) {
    this.authService.signIn(email,password);
  }

  regiter(email: any, password: any) {
    this.authService.register(email,password)
  }
}
