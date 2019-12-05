import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormTextComponent } from './form-text.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  declarations: [FormTextComponent],
  exports: [FormTextComponent]
})
export class FormTextModule {}

