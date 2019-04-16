import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CancelableRouterLinkWithHrefDirective } from './cancelable-router-link-with-href/cancelable-router-link-with-href.directive';
import { TruncateDirective } from './truncate/truncate.directive';
import { TippyDirective } from './tippy/tippy.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CancelableRouterLinkWithHrefDirective,
    TruncateDirective,
    TippyDirective
  ],
  exports: [
    CancelableRouterLinkWithHrefDirective,
    TruncateDirective,
    TippyDirective
  ]
})
export class DirectivesModule {}
