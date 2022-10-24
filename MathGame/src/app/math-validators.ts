import { AbstractControl } from '@angular/forms';

export class MathValidators {
  static addition(s1: string, s2: string, source: string) {
    return (form: AbstractControl) => {
      const sum = +form.value[source];
      const first = +form.value[s1];
      const second = +form.value[s2];
      if (first + second === sum) {
        return null;
      }
      return {
        addition: true,
      };
    };
  }
}
