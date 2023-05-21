import {Component, Input} from '@angular/core';
import {DefaultUserData} from "../../../interfaces/default-user-data";

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.css']
})
export class ServiceItemComponent  {

  imageUrl: string = DefaultUserData.SERVICE_URL;

  @Input() serviceData: any


  openDetails() {
    console.log(this.serviceData);
  }
}
