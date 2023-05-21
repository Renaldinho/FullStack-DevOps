import {Component, OnInit} from '@angular/core';
import {FirebaseService} from "../../../../services/firebase.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  hobby: any;
  services: any[] = [];


  constructor(public firebaseService: FirebaseService) {
  }

  signOut() {
    this.firebaseService.signOut();
  }


  ngOnInit(): void {
    this.firebaseService.getEnabledServices().then((data) => {
      this.services = data;
      console.log(data)
    })
  }
}
