import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  usernameAv(username: string) {
    return this.http.post<{ available: boolean }>(
      'https://api.angular-email.com/auth/username',
      {
        username,
      }
    );
  }

  signUp(username: string, password: string, passwordConfirmation: string) {
    return this.http.post<any>(
      'https://api.angular-email.com/auth/signup',
      {
        username,
        password,
        passwordConfirmation,
      }
    );
  }
}
