import { LocationStrategy } from '@angular/common';
import {
  Directive,
  HostListener,
  Input
} from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLinkWithHref
} from '@angular/router';

@Directive({
  selector: 'a[gorCancelableRouterLink]'
})
export class CancelableRouterLinkWithHrefDirective extends RouterLinkWithHref {
  @Input() public cancel = false;

  constructor(
    router: Router,
    route: ActivatedRoute,
    locationStrategy: LocationStrategy
  ) {
    super(router, route, locationStrategy);
  }

  @Input()
  set cancelableRouterLink(commands: any[] | string) {
    this.routerLink = commands;
  }

  @HostListener('click', [ '$event.button', '$event.ctrlKey', '$event.metaKey', '$event.shiftKey' ])
  public onClick(button: number, ctrlKey: boolean, metaKey: boolean, shiftKey: boolean): boolean {
    return this.cancel
      ? false
      : super.onClick(button, ctrlKey, metaKey, shiftKey);
  }
}
