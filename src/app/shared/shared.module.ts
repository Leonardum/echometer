import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

import { AutofocusDirective } from '@shared/directives/mat-autofocus.directive';

const modules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
];

const directives = [
  AutofocusDirective,
];

@NgModule({
  declarations: [ ...directives ],
  imports: [ ...modules ],
  exports: [
    ...modules,
    ...directives,
  ],
})
export class SharedModule { }
