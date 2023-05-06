import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {FirebaseService} from "../services/firebase.service";
import {RoutingPaths} from "../interfaces/common-interfaces.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private firebaseService: FirebaseService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Observable<boolean>((observer) => {
      const user = this.firebaseService.auth.currentUser
        if (user) {
          // If the user is authenticated, allow navigation
          observer.next(true);
        } else {
          // If the user is not authenticated, redirect to the login page
          this.router.navigate([RoutingPaths.SIGN_IN]);
          observer.next(false);
        }
        observer.complete();

    });
  }
}
