import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollContainerComponent } from './scroll-container.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  imports: [CommonModule, ScrollingModule],
  declarations: [ScrollContainerComponent],
  exports: [ScrollContainerComponent]
})
export class ScrollContainerModule {}
