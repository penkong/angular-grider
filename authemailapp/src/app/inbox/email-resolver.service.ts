import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { catchError, EMPTY } from 'rxjs';
import { IEmail, EmailService } from './email.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class EmailResolverService implements Resolve<IEmail> {
  constructor(private emailService: EmailService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const { id } = route.params;
    return this.emailService
      .getEmail(id)
      .pipe(catchError((err) => {
        this.router.navigateByUrl('/inbox/not-found')
        return EMPTY
      }));
  }
}
