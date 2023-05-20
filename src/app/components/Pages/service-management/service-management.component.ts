import {Component, ViewChild} from '@angular/core';
import {InputFieldComponent} from "../../generic/input-field/input-field.component";
import {InputBoxComponent} from "../../generic/input-box/input-box.component";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-service-management',
  templateUrl: './service-management.component.html',
  styleUrls: ['./service-management.component.scss']
})
export class ServiceManagementComponent {

  @ViewChild("nameInput") nameInput: InputFieldComponent | undefined
  @ViewChild("careerInput") careerInput: InputFieldComponent | undefined
  @ViewChild("descriptionInput") descriptionInput: InputBoxComponent | undefined
  @ViewChild("priceInput") priceInput: InputFieldComponent | undefined

  saveData() {
    throw new Error('caca');
  }
}
