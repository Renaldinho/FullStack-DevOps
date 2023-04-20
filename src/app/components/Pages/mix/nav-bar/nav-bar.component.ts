import {Component, QueryList, ViewChildren} from '@angular/core';
import {NavButtonComponent} from "../../../generic/nav-button/nav-button.component";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  pathValues: ButtonValue[] = [
    { path: '/home', value: 'Home',id: 1},
    { path: '/profile', value: 'Profile',id: 2},
    { path: 'path3', value: 'value3',id: 3}
  ];
  @ViewChildren(NavButtonComponent) navButtons: QueryList<NavButtonComponent> | undefined;

  onButtonSelect(button: ButtonValue) {
    this.navButtons?.forEach(instance => {
      if (instance.buttonId !== button.id)
        instance.isSelected = false;
    })
  }
}

interface ButtonValue {
  path: string;
  value: string;
  id: number;
}
