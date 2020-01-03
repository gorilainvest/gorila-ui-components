import { ConnectionPositionPair, Overlay, OverlayConfig, PositionStrategy } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { Injectable, Injector } from '@angular/core';

import { POPOVER_POSITIONS } from './popover-positions';
import { PopoverContent, PopoverRef } from './popover-ref';
import { PopoverComponent } from './popover.component';

/**
 * PopoverParams
 * Available parameters to popover displaying
 */
export interface PopoverParams<T> {
  origin: HTMLElement;
  content: PopoverContent;
  data?: T;
  width?: string | number;
  height: string | number;
  hasBackdrop?: boolean;
  backdropClass?: string;
  isAboveTemplate?: boolean;
};

/**
 * PopoverService
 * This class is used to call PopoverComponent and display data inside of him
 */
@Injectable({
  providedIn: 'root'
})
export class PopoverService {

  public constructor(private overlay: Overlay, private injector: Injector) { }

  /**
   * @method open
   * This method opens the new popover based on PopoverParams
   *
   * @param PopoverParams [popoverParams]
   * @returns PopoverRef
   */
  public open<T>({ origin, content, data, width, height, hasBackdrop, backdropClass, isAboveTemplate }: PopoverParams<T>): PopoverRef<T> {
    const overlayRef = this.overlay.create(this.getOverlayConfig({origin, width, height, hasBackdrop, backdropClass, isAboveTemplate}));
    const popoverRef = new PopoverRef<T>(overlayRef, content, data);

    const injector = this.createInjector(popoverRef, this.injector);
    overlayRef.attach(new ComponentPortal(PopoverComponent, null, injector));

    return popoverRef;
  }

  /**
   * @method createInjector
   * This method createates a new Portal injector based on popover
   */
  private createInjector(popoverRef: PopoverRef, injector: Injector) {
    const tokens = new WeakMap([[PopoverRef, popoverRef]]);
    return new PortalInjector(injector, tokens);
  }

  /**
   * @method getOverlayConfig
   * This returns the overlay config
   */
  private getOverlayConfig({ origin, width, height, hasBackdrop, backdropClass, isAboveTemplate }): OverlayConfig {
    return new OverlayConfig({
      width,
      height,
      hasBackdrop: hasBackdrop || true,
      backdropClass: backdropClass || 'popover-backdrop',
      positionStrategy: this.getOverlayPosition(origin, isAboveTemplate),
      scrollStrategy: this.overlay.scrollStrategies.reposition()
    });
  }

  /**
   * @method getOverlayPosition
   * This returns the overley position object
   */
  private getOverlayPosition(origin: HTMLElement, isAboveTemplate: boolean): PositionStrategy {
    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo(origin)
      .withPositions(this.getPositions(isAboveTemplate))
      .withFlexibleDimensions(false)
      .withPush(false);

    return positionStrategy;
  }

  /**
   * @method getPositions
   * This method returns the popover relative position coordinates
   */
  private getPositions(isAboveTemplate: boolean): ConnectionPositionPair[] {
    const pos = isAboveTemplate ? 'above' : 'below';
    return [...POPOVER_POSITIONS[pos]];
  }
}
