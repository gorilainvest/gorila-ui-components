import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetterheadFooterComponent } from './footer/footer.component';
import { LetterheadHeaderComponent } from './header/header.component';
import { LetterheadComponent } from './letterhead.component';

import { IconModule } from '@gorilainvest/ui-toolkit/icon';
import { DirectivesModule } from '@gorilainvest/ui-toolkit/directives';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    DirectivesModule
  ],
  declarations: [ LetterheadComponent, LetterheadFooterComponent, LetterheadHeaderComponent],
  exports: [ LetterheadComponent ]
})
export class LetterheadModule { }
