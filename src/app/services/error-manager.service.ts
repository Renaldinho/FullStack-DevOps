import {ErrorHandler, Injectable} from '@angular/core';
import {NotificationService} from "./notification.service";
import {NotificationType} from "angular2-notifications";

@Injectable({
  providedIn: 'root'
})
export class ErrorManagerService implements ErrorHandler{

  constructor(private notificationService: NotificationService) { }

  //Message that receives the error and handles it
  handleError(error: any) {

    let message = this.getDisplayMessage(error);
    this.notificationService.createMessage(NotificationType.Error,message,'Error')
  }

  /**
   * Compare error code of error to known or used codes, and change the error message accordingly
   * If it doesn't have a code it most likely isn't a FirebaseError,
   * so you treat it as a normal one and log it to console and give a default message to the user
   * @param error
   * @private
   */
  private getDisplayMessage(error: any) {
    const errorCode = error.rejection.code;
    let message = 'An unknown error has occured'

    switch (errorCode) {
      case 'auth/user-not-found':
        message = 'User matching these credentials doesn\'t exist'
        break
      default:
        console.error(error)
    }
    return message
  }
}
