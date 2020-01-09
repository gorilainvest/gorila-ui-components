import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetterheadFooterComponent } from './footer/footer.component';
import { LetterheadHeaderComponent } from './header/header.component';
import { LetterheadComponent } from './letterhead.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ LetterheadComponent, LetterheadFooterComponent, LetterheadHeaderComponent],
  exports: [ LetterheadComponent ]
})
export class LetterheadModule { }
