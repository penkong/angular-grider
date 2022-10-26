import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable, skipWhile, take, map, tap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  /**
   *
   */
  constructor(private authService: AuthService, private router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.signedIn$.pipe(
      skipWhile((val) => {
        console.log(val);
        return val === null
      }),
      take(1),
      map((val) => {
        return Boolean(val);
      }),
      tap((val) => {
        if (!val) this.router.navigateByUrl('/');
      })
    );
  }
}
