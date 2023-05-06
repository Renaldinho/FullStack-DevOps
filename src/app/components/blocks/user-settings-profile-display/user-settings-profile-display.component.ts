import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {UserDataStore} from "../../../stores/user-data.store";

@Component({
  selector: 'app-user-settings-profile-display',
  templateUrl: './user-settings-profile-display.component.html',
  styleUrls: ['./user-settings-profile-display.component.scss']
})
export class UserSettingsProfileDisplayComponent implements OnInit{

  dataSubscription: Subscription | undefined;

  fullName: string | undefined

  constructor(private userDataStore: UserDataStore) {
  }

  ngOnInit(): void {
    this.dataSubscription = this.userDataStore.getUserData().subscribe((data) =>{
      this.fullName = `${data.firstName} ${data.lastName}`
      console.log(this.fullName)
    })
  }

}
