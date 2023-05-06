import {Component, OnInit} from '@angular/core';
import {UserDataStore} from "../../../stores/user-data.store";

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit{

  user: any
  tempUser: any

  constructor(private userDataStore: UserDataStore) {
  }



  resetData() {
    this.user = JSON.parse(JSON.stringify(this.userDataStore.getUserData()));
  }

  saveData() {

  }

  ngOnInit(): void {
    this.user = JSON.parse(JSON.stringify(this.userDataStore.getUserData()));
  }
}
