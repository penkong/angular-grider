import { Injectable } from '@angular/core';
import { ValidationErrors, Validator, AbstractControl } from '@angular/forms';

@Injectable({ providedIn: 'root'})
export class MathValidator implements Validator {
  validate(formGroup: AbstractControl<any, any>): ValidationErrors | null {
    const { password, passwordConfirmation } = formGroup.value;
    if (password === passwordConfirmation) return null;
    else return { passNotMatch: true };
  }
}
