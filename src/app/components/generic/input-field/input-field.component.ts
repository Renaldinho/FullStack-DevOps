import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent {

  @Input() labelText: string | undefined;
  @Input() inputType: string = 'text';
  @Input() iconSrc: string | undefined;

  inputValue: string | undefined;
  isFocused: boolean = false;

  onFocus() {
    this.isFocused = true;
  }

  onBlur() {
    this.isFocused = false;
  }

}
