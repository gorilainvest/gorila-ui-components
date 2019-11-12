import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PageHeaderBottomDirective } from './page-header-bottom.directive';
import { PageHeaderComponent } from './page-header.component';

@NgModule({
  declarations: [PageHeaderComponent, PageHeaderBottomDirective],
  exports: [PageHeaderComponent, PageHeaderBottomDirective],
  imports: [CommonModule, ScrollingModule]
})
export class PageHeaderModule {}
