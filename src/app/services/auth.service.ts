import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorage } from './Token.storage';

@Injectable({ providedIn: 'root' })
export class AuthService {

    constructor(private router: Router, private tokenStorage: TokenStorage, private httpService: HttpService) { }

    login(email: string, password: string) {
        return this.httpService.post('/auth/login', { email, password }).subscribe((res) => {
            if (res) {
                this.tokenStorage.setToken(String(res.token));
                localStorage.setItem('user_id', res.user)
                this.router.navigateByUrl('timeline')
            }
        })
    }

    signup(email: string, phone: string, password: string) {
        return this.httpService.post('/auth/signup', { email, phone, password }).subscribe((res) => {
            if (res) {
                this.tokenStorage.setToken(String(res.token));
                localStorage.setItem('user_id', res.user)
                console.log("signup", res);
                this.router.navigateByUrl('timeline')
            }
        })
    }

    isUserLoggedIn(): boolean {
        if (this.tokenStorage.getToken()) {
            return true;
        }
        return false;
    }

    logoutUser(): void {
        this.tokenStorage.logOut();
    }
    getAuthorizationHeaders() {
        const token: string | null = this.tokenStorage.getToken() || "";
        return { Authorization: '' + token };
    }

} 