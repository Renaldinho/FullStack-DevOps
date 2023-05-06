import {Component, OnInit} from '@angular/core';
import {UserDataStore} from "../../../stores/user-data.store";
import {FirebaseService} from "../../../services/firebase.service";

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit{

  user: any

  constructor(private userDataStore: UserDataStore,private firebaseService: FirebaseService) {
  }

  resetData() {
    this.user = JSON.parse(JSON.stringify(this.userDataStore.getUserInputData()));
  }

  saveData() {
    this.firebaseService.updateUserData(this.user);
  }

  ngOnInit(): void {
    this.user = JSON.parse(JSON.stringify(this.userDataStore.getUserInputData()));
  }
}
