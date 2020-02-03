import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';

import { GdkJsonInputModule } from '../gdk-json-input/gdk-json-input.module';
import { GdkFormComponent } from './gdk-form.component';

@NgModule({
  declarations: [GdkFormComponent],
  exports: [GdkFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatListModule,
    MatSelectModule,
    MatInputModule,
    GdkJsonInputModule
  ]
})
export class GdkFormModule { }
