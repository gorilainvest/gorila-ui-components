import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconModule } from '@gorilainvest/ui-toolkit/icon';

import { LetterheadFooterComponent } from './footer/footer.component';
import { LetterheadHeaderComponent } from './header/header.component';
import { LetterheadComponent } from './letterhead.component';

@NgModule({
  imports: [
    CommonModule,
    IconModule
  ],
  declarations: [ LetterheadComponent, LetterheadFooterComponent, LetterheadHeaderComponent],
  exports: [ LetterheadComponent ]
})
export class LetterheadModule { }
