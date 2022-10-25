import { Component, Input, OnInit } from '@angular/core';
import {  FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements OnInit {
  @Input() label!: string;
  @Input() control!: FormControl ;
  @Input() inputType!: string ;
  constructor() { }

  ngOnInit(): void {
  }

}
