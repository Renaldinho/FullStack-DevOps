import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss']
})
export class NavButtonComponent {

  @Input() displayValue: string | undefined;
  @Input() buttonId: number | undefined;

  isSelected: boolean = false;

  onClick() {
    this.isSelected = true;
  }
}
