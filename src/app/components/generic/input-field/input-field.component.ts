import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent {

  @ViewChild("InputField") inputField: ElementRef | undefined

  @Input() labelText: string | undefined;
  @Input() inputType: string = 'text';
  @Input() iconSrc: string | undefined;
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  isFocused: boolean = false;

  onInput($event): void {
    this.value = $event.target.value;
    this.valueChange.emit(this.value);
  }

  onFocus() {
    this.isFocused = true;
  }

  onBlur() {
    this.isFocused = false;
  }



}
