import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TokenStorage {
  private tokenKey = 'auth_Token';
  private userKey='userDetails'

  logOut(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.clear();
  }

  setToken(token?: string): void {
    if (!token) return;
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  saveUser(user?: string): void {
    if (!user) return;
    localStorage.setItem(this.userKey, user);
  }

  getUser(): string | null {
    return localStorage.getItem(this.userKey);
  }

}
