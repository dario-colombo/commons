import { Inject, Injectable, Injector } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../../services/user.service';


Injectable();
export class AuthGuard implements CanActivate {

    constructor(@Inject(UserService) private userservice: UserService , @Inject(Router) private router: Router) {

    }

    canActivate() {
        if (!this.userservice.isLoggedIn()) {
            this.router.navigate(['/login']);

            return false;
        } else {
            return true;
        }

    }

}
