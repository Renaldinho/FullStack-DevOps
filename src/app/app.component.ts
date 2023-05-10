import {Component, OnInit} from '@angular/core';
import {NotificationsService} from "angular2-notifications";
import {NotificationService} from "./services/notification.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  constructor() {

  }

  title = '';

}
