import { HttpService } from './http.service';
import { TokenStorage } from './Token.storage';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {

    constructor(private router: Router, private tokenStorage: TokenStorage, private httpService: HttpService) { }

    login(email: string, password: string) {
        return this.httpService.post('/auth/login', { email, password }).subscribe((res) => {
            if (res) {
                this.tokenStorage.setToken(String(res.token));
                localStorage.setItem('user_id', res.user._id)
                this.router.navigateByUrl('timeline')
            }
        })
    }

    signup(email: string, phone: string, password: string) {
        return this.httpService.post('/auth/signup', { email, phone, password }).subscribe((res) => {
            if (res) {
                this.tokenStorage.setToken(String(res.token));
                localStorage.setItem('user_id', res.user._id)
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
        const token: string | null = this.tokenStorage.getToken() || '';
        return { Authorization: 'Bearer Token ' + token.substring(1, token.length - 1) };
    }

} 