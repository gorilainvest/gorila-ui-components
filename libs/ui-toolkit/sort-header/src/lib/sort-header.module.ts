import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSortModule } from '@angular/material/sort';
import { IconModule } from '@gorilainvest/ui-toolkit/icon';
import { SortHeaderComponent } from './sort-header.component';

@NgModule({
  declarations: [SortHeaderComponent],
  imports: [
    CommonModule,
    MatSortModule,
    IconModule
  ],
  exports: [SortHeaderComponent]
})
export class SortHeaderModule {}
