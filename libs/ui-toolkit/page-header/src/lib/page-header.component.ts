import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/scrolling';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  SkipSelf,
  ViewEncapsulation
} from '@angular/core';
import { onWindowScroll, Scrollable, setupScrollSubscription } from '@gorilainvest/ui-toolkit/scroll-container';
import { Subscription } from 'rxjs';

@Component({
  selector: 'gor-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class PageHeaderComponent implements OnDestroy, OnInit, Scrollable {
  /**
   * Indicates that the scroll effect must be activated.
   *
   * @default true
   */

  @Input() public activateScrollEffect = true;

  /**
   * Indicates the distance from the edge (as measured in pixels)
   * from which the scroll effect will be activated.
   *
   * @default 100
   */

  @Input() public departureOffset = 100;

  /**
   * Indicates the edge from which the offset distances will be measured.
   *
   * @default 'top'
   */

  @Input() public edge: 'top' | 'left' | 'right' | 'bottom' | 'start' | 'end' = 'top';

  /**
   * Indicates the distance from the edge (as measured in pixels)
   * from which the scroll effect will be deactivated.
   *
   * @default 10
   */

  @Input() public returnOffset = 10;

  /**
   * Indicates that the bottom area of the page header will be displayed.
   *
   * @default true
   */

  @Input() public enableBottom = true;

  @HostBinding('class.scrolled') public scrolled: boolean;

  public scrolledSubs: Subscription;

  private previousScroll = 0;

  constructor(
    private scrollDispatcher: ScrollDispatcher,
    private cdRef: ChangeDetectorRef,
    @Optional() @SkipSelf() private parentCdRef: ChangeDetectorRef
  ) {}

  public ngOnInit() {
    setupScrollSubscription(this.activateScrollEffect, this, this.scrollDispatcher, this.onWindowScroll);
  }

  private onWindowScroll(event: CdkScrollable) {
    const scrollInfo = onWindowScroll(event, 'top', this.previousScroll);
    if (!!scrollInfo) {
      this.scrolled = scrollInfo.scrolled;
      this.previousScroll = scrollInfo.offset;
    }
    this.detectChanges();
  }

  private detectChanges() {
    this.cdRef.detectChanges();
    if (this.parentCdRef) {
      this.parentCdRef.detectChanges();
    }
  }

  public ngOnDestroy() {}
}




