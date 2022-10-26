import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MathValidator } from '../math-validator';
import { UserCheckValidator } from '../user-check-validator';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  authForm: FormGroup = new FormGroup(
    {
      username: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(/^[a-z0-9]+$/),
        ],
        [this.userCheckValidator.validate]
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
      passwordConfirmation: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
    },
    {
      validators: [this.validPass.validate],
    }
  );

  constructor(
    private validPass: MathValidator,
    private userCheckValidator: UserCheckValidator,
    private authService: AuthService,
    private router:Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.authForm.invalid) return;
    this.authService.signUp(this.authForm.value).subscribe({
      next: (res) => {
        // navigate
        this.router.navigateByUrl('inbox')
      },
      error: (err) => {
        if(!err.status) {
          this.authForm.setErrors({ noConnection: true})
        } else {
          this.authForm.setErrors({ unknownError: true})
        }
      },
    });
  }
}
