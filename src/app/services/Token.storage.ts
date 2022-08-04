import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TokenStorage {
  private tokenKey = 'auth_token';

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  setToken(token?: string): void {
    if (!token) return;
    localStorage.setItem(this.tokenKey, token);
  }

  logOut(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.clear();
  }
}
