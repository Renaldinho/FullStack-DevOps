import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FirebaseService} from "../../../../services/firebase.service";
import {RoutingPaths} from "../../../../interfaces/common-interfaces.service";
import {Route, Router} from "@angular/router";
import {UserDataStore} from "../../../../stores/user-data.store";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss']
})
export class UserAvatarComponent implements OnInit, OnDestroy {

  @Input() navigation: boolean = false

  userAvatarSubscription: Subscription | undefined
  userAvatarUrl: any;

  constructor(public firebaseService: FirebaseService, private router: Router,
              public userDataStore: UserDataStore) {
  }

  ngOnDestroy(): void {
    this.userAvatarSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.userAvatarSubscription = this.userDataStore.getAvatarImageUrl().subscribe((data) => {
      this.userAvatarUrl = data.toString();
    })
  }

  handleNavigate() {
    this.router.navigate([RoutingPaths.USER_PROFILE]);
  }
}
