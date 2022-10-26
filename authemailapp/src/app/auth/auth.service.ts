import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, tap, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'https://api.angular-email.com';
  signedIn$ = new BehaviorSubject<boolean | null>(null);
  username$ = new BehaviorSubject('');

  constructor(private http: HttpClient) {}

  usernameAv(username: string) {
    return this.http.post<{ available: boolean }>(this.url + '/auth/username', {
      username,
    });
  }

  signUp(info: {
    username: string;
    password: string;
    passwordConfirmation: string;
  }) {
    return this.http
      .post<{ username: string }>(this.url + '/auth/signup', info)
      .pipe(
        tap(() => {
          this.signedIn$.next(true);
        })
      );
  }

  checkAuth() {
    return this.http
      .get<{ authenticated: boolean; username: string | null }>(
        this.url + '/auth/signedin'
      )
      .pipe(
        tap((res) => {
          if (res.username) {
            this.signedIn$.next(true);
            this.username$.next(res.username);
          } else {
            this.signedIn$.next(false)
          }
        }),
        map((val)=> {
          return val.authenticated
        })
      );
  }
  signOut() {
    return this.http.post<any>(this.url + '/auth/signout', {}).pipe(
      tap((res) => {
        this.signedIn$.next(false);
        this.username$.next('');
      })
    );
  }

  signIn(info: {
    username: string;
    password: string;
  }) {
    return this.http
      .post<{ username: string }>(this.url + '/auth/signIn', info)
      .pipe(
        tap((res) => {
          this.signedIn$.next(true);
          this.username$.next(res.username)
        })
      );
  }

}
