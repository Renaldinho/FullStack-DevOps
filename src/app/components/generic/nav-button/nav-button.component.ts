import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss']
})
export class NavButtonComponent {

  @Input() displayValue: string | undefined;
  @Input() buttonId: number | undefined;
  @Input() path: string | undefined

  isSelected: boolean = false;

  constructor(
    private router: Router ) {
  }

  onClick() {
    this.handleRoute();
  }

  private handleRoute() {
    this.router.navigate([this.path]);
  }
}
