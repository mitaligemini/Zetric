 import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private router:Router, private authService: AuthService ) {}
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean|UrlTree {
        if (!this.authService.isUserLoggedIn()) {
            console.log("isuserlogged", this.authService.isUserLoggedIn)
            alert('Token Expire, Login Again');
            this.router.navigateByUrl("login" );
            return false;
        } 
        return true;
    }
}