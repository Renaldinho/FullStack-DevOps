import {Component, Input} from '@angular/core';
import {FirebaseService} from "../../../../services/firebase.service";
import {RoutingPaths} from "../../../../interfaces/common-interfaces.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss']
})
export class UserAvatarComponent {

  @Input() navigation: boolean = false



  constructor(public firebaseService: FirebaseService, private router: Router) {
  }

  handleNavigate() {
    this.router.navigate([RoutingPaths.USER_PROFILE]);
  }
}
