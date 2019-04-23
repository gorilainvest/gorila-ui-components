import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerModule } from '@gorilainvest/ui-toolkit/spinner';
import { LoadingComponent } from './loading.component';

@NgModule({
  imports: [CommonModule, SpinnerModule],
  declarations: [LoadingComponent],
  exports: [LoadingComponent]
})
export class LoadingModule {}
