import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent {

  @ViewChild("InputField") inputField: ElementRef | undefined

  @Input() labelText: string | undefined;
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
