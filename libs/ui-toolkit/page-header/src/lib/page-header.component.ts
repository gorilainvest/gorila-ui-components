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
  @Input() public activateScrollEffect = true;
  @Input() public departureOffset = 100;
  @Input() public edge: 'top' | 'left' | 'right' | 'bottom' | 'start' | 'end' = 'top';
  @Input() public returnOffset = 10;
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




