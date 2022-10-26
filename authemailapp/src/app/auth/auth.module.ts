import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from './auth.service';
import { SignOutComponent } from './sign-out/sign-out.component';
import { AuthGuard } from './auth.guard';



@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    SignOutComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [ AuthGuard ]
})
export class AuthModule { }
