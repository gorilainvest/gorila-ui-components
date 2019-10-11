import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideToggleComponent } from './slide-toggle.component';
import { SlideToggleGroupComponent } from './slide-toggle-group.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SlideToggleComponent, SlideToggleGroupComponent],
  exports: [SlideToggleComponent, SlideToggleGroupComponent]
})
export class SlideToggleModule {}
