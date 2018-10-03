import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class CelebrityGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const loggedInUserData = JSON.parse(localStorage.getItem('currentUser'));
    if (localStorage.getItem('isLoggedin') && loggedInUserData['user_type'] === '1') {
      return true;
    }
    this.router.navigate(['/access-denied']);
    return false;
  }
}
