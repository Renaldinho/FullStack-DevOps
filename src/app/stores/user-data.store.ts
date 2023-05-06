import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserDataStore {

  private userData = new BehaviorSubject<any>(null)
  data$ = this.userData.asObservable();

  setUserData(data: any) {
    this.userData.next(data)
  }

  public getUserData(){
    return this.data$;
  }
}
