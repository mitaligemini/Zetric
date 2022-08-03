import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  API_URL: string = 'http://localhost:3000';
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: this.authService.getAuthorizationHeaders(),
    });
    const apiReq = req.clone({ url: `${this.API_URL}${req.url}` });
    console.log("apiReq", apiReq)
    return next.handle(apiReq);
  }
}
