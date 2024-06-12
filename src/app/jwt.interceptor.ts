import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isLoggedIn = localStorage.getItem('token'); 

    if (isLoggedIn) {
      const token = isLoggedIn
      const authRequest = request.clone({
        setHeaders: {
          Authorization:` Bearer ${token}`
        }
      });
      return next.handle(authRequest);
    } else {
      return next.handle(request);
    }
  }
}