import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {NotificationsService, NotificationType} from "angular2-notifications";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private notificationService: NotificationsService) {
  }
  
  public createMessage(type: NotificationType, value: string, title: string){
    this.notificationService.create(title,value,type,{
      timeOut: 3000,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true
    })
  }

}
