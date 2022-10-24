import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, AbstractControl } from '@angular/forms';
import { delay, filter, scan } from 'rxjs';
import { MathValidators } from '../math-validators';

@Component({
  selector: 'app-equision',
  templateUrl: './equision.component.html',
  styleUrls: ['./equision.component.css'],
})
export class EquisionComponent implements OnInit {
  timePerSolution = 0;
  mathForm = new FormGroup(
    {
      a: new FormControl(this.randomNumber()),
      b: new FormControl(this.randomNumber()),
      res: new FormControl(),
    },
    [MathValidators.addition('a', 'b', 'res')]
  );

  constructor() {}

  ngOnInit(): void {
    this.mathForm.statusChanges
      .pipe(
        filter((val) => val === 'VALID'),
        delay(200),
        scan((acc) => {
          return {
            numberSolved: acc.numberSolved + 1 ,
            startTime: acc.startTime
          }
        }, { numberSolved: 0 , startTime: new Date()})
      )
      .subscribe(({numberSolved , startTime }) => {
        this.timePerSolution = (new Date().getTime() - startTime.getTime()) / numberSolved / 1000
        this.mathForm.setValue({
          a: this.randomNumber(),
          b: this.randomNumber(),
          res: '',
        });
      });
  }

  randomNumber() {
    return Math.floor(Math.random() * 10);
  }

  get a() {
    return this.mathForm.value.a;
  }

  get b() {
    return this.mathForm.value.b;
  }
}
