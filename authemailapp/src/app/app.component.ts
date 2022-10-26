import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { ReplaySubject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  signedIn$: BehaviorSubject<boolean | null>;
  constructor(private authService: AuthService) {
    this.signedIn$ = this.authService.signedIn$ 
  }

  ngOnInit() {
    this.authService.checkAuth().subscribe((v) =>{
      console.log(v, 'hit now');
    });
  }
}
