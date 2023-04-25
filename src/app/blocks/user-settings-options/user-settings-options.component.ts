import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-user-settings-options',
  templateUrl: './user-settings-options.component.html',
  styleUrls: ['./user-settings-options.component.scss']
})
export class UserSettingsOptionsComponent {

  @Output() showContent = new EventEmitter<number>();

  options: contentOptions[] = [
    { id:1, value:"ACCOUNT"},
    { id:2, value:"SECURITY"},
    { id:3, value:"NOTIFICATIONS"},
    { id:4, value:"HELP"},
  ]
}

export class contentOptions {
  id: number | undefined;
  value: string | undefined;
}
