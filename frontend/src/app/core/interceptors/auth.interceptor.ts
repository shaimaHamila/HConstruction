// src/app/core/interceptors/auth.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    // Get the token from StorageService
    const token = localStorage.getItem('accessToken');

    // If the token exists, modify the request to include the Authorization header
    if (token) {
      const clonedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`, // Attach the token as 'Bearer <token>'
        },
      });

      // Pass the modified request to the next handler
      return next.handle(clonedRequest);
    }

    // If no token, pass the original request unchanged
    return next.handle(req);
  }
}
