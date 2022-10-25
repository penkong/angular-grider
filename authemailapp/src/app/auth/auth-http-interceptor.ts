import { Observable, tap, map } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpInterceptor,
  HttpEventType,
} from '@angular/common/http';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const newReq = req.clone({
      withCredentials: true,
    });
    return next.handle(newReq)
    // .pipe(
    //   map((val) => {
    //     if(val.type === HttpEventType.Sent) return val
    //     return val
    //   }),
    //   tap((val) => {
    //     if(val.type === HttpEventType.Sent) {
    //       console.log('requst sent to server');
    //     }
    //     if(val.type === HttpEventType.Response) {
    //       console.log('back from server');
    //       console.log(val);
    //     }
    //   })
    // );
  }
}
