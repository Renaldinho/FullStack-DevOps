import {Component, QueryList, ViewChildren} from '@angular/core';
import {NavButtonComponent} from "../../../generic/nav-button/nav-button.component";
import {RoutingPaths} from "../../../../interfaces/common-interfaces.service";
import {FirebaseService} from "../../../../services/firebase.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  profileBtn: ButtonValue = {path: "",value: "",id: 0}
  pathValues: ButtonValue[] = [
    { path: RoutingPaths.HOME, value: 'HOME',id: 1},
    { path: RoutingPaths.EXPLORE, value: 'EXPLORE',id: 2},
  ];

  @ViewChildren(NavButtonComponent) navButtons: QueryList<NavButtonComponent> | undefined;

  constructor(public firebase: FirebaseService) {
  }

  onButtonSelect(button: ButtonValue) {
    this.navButtons?.forEach(instance => {
      if (instance.buttonId !== button.id)
        instance.isSelected = false;
      else
        instance.isSelected = true
    })
  }

  handleLogOut() {
    this.firebase.signOut();
  }
}

interface ButtonValue {
  path: string;
  value: string;
  id: number;
}
