import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/scrolling';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { Subscription } from 'rxjs';

/**
 * Define a interface to guarantee a subscription instance to be managed
 * in seupScrollSubscription.
 */
export interface Scrollable {
  /**
   * The subscription for *Scrolldispatcher.scrolled* method call.
   */
  scrolledSubs: Subscription;
}

export type Edge = 'top' | 'left' | 'right' | 'bottom' | 'start' | 'end';

/**
 * Setups a new scroll subscription, also unsubscribe from previous subscriptions
 * if needed.
 *
 * @param activate indicates if a new subscription must be created
 * @param componentRef a **scrollable** component that implements `Scrollable` interface
 * @param scrollDispatcher the responsible to listen for scroll events
 * @param windowScrollFn a callback for scroll subscription
 */
export const setupScrollSubscription = <C extends Scrollable>(
  activate: boolean,
  componentRef: C,
  scrollDispatcher: ScrollDispatcher,
  windowScrollFn: Function
) => {
  if (componentRef.scrolledSubs) {
    componentRef.scrolledSubs.unsubscribe();
  }

  if (!activate) {
    return;
  }

  componentRef.scrolledSubs = scrollDispatcher
    .scrolled()
    .pipe(untilDestroyed(componentRef))
    .subscribe(windowScrollFn.bind(componentRef));
};

/**
 * A interface to provide information about the last scroll event received.
 */
export interface ScrollInfo {
  /**
   * How many pixels was scrolled.
   */
  offset: number;

  /**
   * Indicates that the scroll was detected.
   */
  scrolled: boolean;
}

export const onWindowScroll = (
  event: CdkScrollable,
  edge: Edge = 'top',
  previousScroll = 0,
  minDif = 10,
  departureOffset = 100,
  returnOffset = 10
): ScrollInfo | null => {

  if (!event) {
    return null;
  }

  const scrollOffset = event.measureScrollOffset(edge) || 0;

  if (Math.abs(scrollOffset - previousScroll) < minDif) {
    return null;
  }

  if (scrollOffset > departureOffset) {
    return { scrolled: true, offset: scrollOffset };
  } else if (scrollOffset < returnOffset) {
    return { scrolled: false, offset: scrollOffset };
  }

  return null;
};
