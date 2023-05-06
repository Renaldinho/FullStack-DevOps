import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataStore {

  private userData: any

  setUserData(data: any) {
    this.userData = data;
  }

  public getUserData(){
    return this.userData;
  }
}
