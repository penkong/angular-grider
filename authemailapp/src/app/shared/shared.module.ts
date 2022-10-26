import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailFormComponent } from './email-form/email-form.component';



@NgModule({
  declarations: [
    CustomInputComponent,
    EmailFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CustomInputComponent
  ]
})
export class SharedModule { }
