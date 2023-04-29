import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  selectedContentId: any = 1;


  changeSettingsContent($event: number) {
    this.selectedContentId = $event
    console.log($event);
  }
}
