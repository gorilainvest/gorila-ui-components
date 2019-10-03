import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/scrolling';
import { untilDestroyed } from 'ngx-take-until-destroy';

export type Edge = 'top' | 'left' | 'right' | 'bottom' | 'start' | 'end';

export const setupScrollSubscription = <C>(
  activate: boolean,
  componentRef: C,
  scrollDispatcher: ScrollDispatcher,
  windowScrollFn: Function
) => {
  if (!activate) { return; }

  scrollDispatcher.scrolled()
    .pipe(untilDestroyed(componentRef))
    .subscribe(windowScrollFn.bind(componentRef));
};

export interface ScrollInfo {
  offset: number;
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
  if (!event) { return null; }

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
