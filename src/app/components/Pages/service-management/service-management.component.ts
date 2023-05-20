import {Component, ViewChild} from '@angular/core';
import {InputFieldComponent} from "../../generic/input-field/input-field.component";
import {InputBoxComponent} from "../../generic/input-box/input-box.component";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {FirebaseService} from "../../../services/firebase.service";
import firebase from "firebase/compat/app";
import {ServiceData} from "../../../interfaces/common-interfaces.service";

@Component({
  selector: 'app-service-management',
  templateUrl: './service-management.component.html',
  styleUrls: ['./service-management.component.scss']
})
export class ServiceManagementComponent {

  constructor(public firebase: FirebaseService) {
  }

  @ViewChild("nameInput") nameInput: InputFieldComponent | undefined
  @ViewChild("careerInput") careerInput: InputFieldComponent | undefined
  @ViewChild("descriptionInput") descriptionInput: InputBoxComponent | undefined
  @ViewChild("priceInput") priceInput: InputFieldComponent | undefined

  saveData() {
    const serviceData: ServiceData = {
      name: this.nameInput?.value,
      career: this.careerInput?.value,
      description: this.descriptionInput?.value,
      price: this.priceInput?.value
    }
    this.firebase.updateServiceData(serviceData);
  }
}

