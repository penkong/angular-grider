import {
  AsyncValidator,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Injectable } from '@angular/core';
import { Observable, map, catchError, of } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class UserCheckValidator implements AsyncValidator {
  constructor(private authService: AuthService) {}

  validate = (
    control: AbstractControl<any, any>
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    const { value } = control;
    return this.authService.usernameAv(value)
      .pipe(
        map((val) => null),
        catchError((err) => {
          if (err.error.username) return of({ nonUniqueUsername: true });
          else return of({ noConnection: true });
        })
      );
  };
}
