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

  setUserData(data: any) {
    this.userData.next(data)
    this.userInputData = data;
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
}
