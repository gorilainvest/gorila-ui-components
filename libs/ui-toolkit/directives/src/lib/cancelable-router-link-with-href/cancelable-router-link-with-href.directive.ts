import { LocationStrategy } from '@angular/common';

import { Directive, HostListener, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkWithHref } from '@angular/router';


/**
 * @see https://github.com/angular/angular/blob/master/packages/router/src/directives/router_link.ts
 *
 */
@Directive({selector: 'a[gorCancelableRouterLink]'})
export class CancelableRouterLinkWithHrefDirective extends RouterLinkWithHref {
  /**
   * Indicates that router should not be notified about navigation.
   */
  @Input() public cancel = false;

  constructor(
    router: Router,
    route: ActivatedRoute,
    locationStrategy: LocationStrategy
  ) {
    super(router, route, locationStrategy);
  }

  /**
   * Sets the router link target for navigation when clicked.
   */
  @Input() set cancelableRouterLink(commands: any[] | string) {
    this.routerLink = commands;
  }

  /**
   * Listen to host click and determines if routing must occurr.
   */
  @HostListener('click', [ '$event.button', '$event.ctrlKey', '$event.metaKey', '$event.shiftKey' ])
  public onClick(button: number, ctrlKey: boolean, metaKey: boolean, shiftKey: boolean): boolean {
    return this.cancel
      ? false
      : super.onClick(button, ctrlKey, metaKey, shiftKey, metaKey);
  }
}
