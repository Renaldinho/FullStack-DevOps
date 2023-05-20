import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {DefaultUserData} from "../interfaces/default-user-data";

@Injectable({
  providedIn: 'root'
})
export class UserDataStore {

  private userInputData: any
  private userData = new BehaviorSubject<any>(null)
  data$ = this.userData.asObservable();

  private defaultAvatarImageUrl = DefaultUserData.AVATAR_URL;
  private imageUrlSubject = new BehaviorSubject<string>(this.defaultAvatarImageUrl);
  imageUrl$ = this.imageUrlSubject.asObservable();

  private serviceImageUrl: string = DefaultUserData.SERVICE_URL;

  setUserData(data: any) {
    this.userData.next(data)
    this.userInputData = data;
    console.log(data)
  }

  setAvatarImageUrl(imageUrl: string){
    this.imageUrlSubject.next(imageUrl)
  }

  getAvatarImageUrl(){
    return this.imageUrl$
  }

  public getUserData(){
    return this.data$;
  }

  public getUserInputData(){
    return this.userInputData;
  }

  setServiceImageUrl(imageUrl: string) {
    this.serviceImageUrl = imageUrl;
  }

  getServiceImageUrl() {
    return this.serviceImageUrl;
  }
}
