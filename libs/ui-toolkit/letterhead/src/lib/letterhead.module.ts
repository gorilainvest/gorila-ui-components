import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DirectivesModule } from '@gorilainvest/ui-toolkit/directives';
import { IconModule } from '@gorilainvest/ui-toolkit/icon';
import { ShadowModule } from '@gorilainvest/ui-toolkit/shadow';

import { LetterheadFooterComponent } from './footer/footer.component';
import { LetterheadHeaderComponent } from './header/header.component';
import { LetterheadComponent } from './letterhead.component';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    ShadowModule,
    DirectivesModule
  ],
  declarations: [ LetterheadComponent, LetterheadFooterComponent, LetterheadHeaderComponent],
  exports: [ LetterheadComponent ]
})
export class LetterheadModule { }
