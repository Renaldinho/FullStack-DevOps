import { Component } from '@angular/core';
import {FireAuthService} from "../../../../services/fire-auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(public authService: FireAuthService) {
  }

}
