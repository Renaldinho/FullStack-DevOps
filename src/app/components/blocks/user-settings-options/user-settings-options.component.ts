import {Component, EventEmitter, Output, QueryList, ViewChildren} from '@angular/core';
import {NavButtonComponent} from "../../generic/nav-button/nav-button.component";
import {ButtonComponent} from "../../generic/button/button.component";

@Component({
  selector: 'app-user-settings-options',
  templateUrl: './user-settings-options.component.html',
  styleUrls: ['./user-settings-options.component.scss']
})
export class UserSettingsOptionsComponent {

  @Output() showContent = new EventEmitter<number>();
  @ViewChildren(ButtonComponent) navButtons: QueryList<ButtonComponent> | undefined;

  options: contentOptions[] = [
    { id:1, value:"ACCOUNT"},
    { id:2, value:"SERVICES"},
    { id:3, value:"SECURITY"},
  ]

  selectOption(option: contentOptions) {
    this.navButtons?.forEach((buttonInstance) => {
      if (buttonInstance.buttonId !== option.id)
        buttonInstance.isSelected = false;
      else
        buttonInstance.isSelected = true;
    })
    this.showContent.emit(option.id)
  }
}

export class contentOptions {
  id: number | undefined;
  value: string | undefined;
}
