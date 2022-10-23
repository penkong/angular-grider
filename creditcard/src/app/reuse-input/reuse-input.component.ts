import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reuse-input',
  templateUrl: './reuse-input.component.html',
  styleUrls: ['./reuse-input.component.css']
})
export class ReuseInputComponent implements OnInit {
  @Input() control!: FormControl;
  @Input() label!: string;
  constructor() { }

  ngOnInit(): void {
  }

  showErrors() {
    return this.control.dirty && this.control.touched && this.control.errors
  }

}
