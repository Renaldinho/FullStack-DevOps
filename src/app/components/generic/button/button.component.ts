import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() buttonValue: string | undefined
  @Input() buttonId: number | undefined
  @Input() isSelected: boolean = false;

}
