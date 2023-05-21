import {Component, Input} from '@angular/core';
import {DefaultUserData} from "../../../interfaces/default-user-data";

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.css']
})
export class ServiceItemComponent  {

  detailsOpen: boolean = false

  @Input() serviceData: any


  openDetails() {
    this.detailsOpen = true
  }

  closeDetails() {
    this.detailsOpen = false
  }
}
