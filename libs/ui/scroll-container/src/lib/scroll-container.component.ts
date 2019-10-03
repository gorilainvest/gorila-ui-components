import {
  Component,
  AfterViewInit,
  Input,
  HostBinding,
  Output,
  EventEmitter,
  ElementRef,
  ChangeDetectorRef,
  OnDestroy,
  Optional,
  SkipSelf
} from '@angular/core';
import { ScrollDispatcher, CdkScrollable } from '@angular/cdk/scrolling';
import { setupScrollSubscription, onWindowScroll } from './scroll-manager';

@Component({
  selector: 'gor-scroll-container',
  templateUrl: './scroll-container.component.html',
  styleUrls: ['./scroll-container.component.scss']
})
export class ScrollContainerComponent implements AfterViewInit, OnDestroy {
  /**
   * Indicates that the scroll effect must be activated.
   *
   * @default false
   */
  @Input() public activateScrollEffect = false;

  /**
   * Initial CSS height value.
   *
   * @default '100%'
   */
  @Input() public initialHeight = '100%';

  /**
   * CSS height value when scrolled.
   *
   * @default '100%'
   */
  @Input() public scrolledHeight = '100%';

  /**
   * Initial CSS width value.
   *
   * @default '100%'
   */
  @Input() public initialWidth = '100%';

  /**
   * CSS width value when scrolled.
   *
   * @default '100%'
   */
  @Input() public scrolledWidth = '100%';

  /**
   * Controls scrolled CSS class attached or not to host component.
   *
   * @default false
   */
  @HostBinding('class.scrolled') public hostClassScrolled = false;

  /**
   * Indicates that the scroll effect must be activated.
   *
   * @default false
   */
  @Output() public scrolled = new EventEmitter<boolean>();

  private previousScroll = 0;

  public scrollStyle = {
    height: this.initialHeight,
    transition: 'height 0.4s ease-out',
    width: this.initialWidth,
    display: 'flex',
    'flex-direction': 'column'
  };

  public fixedStyle = {
    display: 'flex',
    'flex-direction': 'column',
    height: '100%'
  };

  constructor(
    private scrollDispatcher: ScrollDispatcher,
    private el: ElementRef,
    private cdRef: ChangeDetectorRef,
    @Optional() @SkipSelf() private parentCdRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    setupScrollSubscription<ScrollContainerComponent>(
      this.activateScrollEffect,
      this,
      this.scrollDispatcher,
      this.onWindowScroll
    );

    if (this.activateScrollEffect) {
      this.el.nativeElement.style.width = 'max-content';
      this.el.nativeElement.style.height = 'max-content';
    } else {
      this.el.nativeElement.style.width = '100%';
      this.el.nativeElement.style.height = '100%';
    }

    this.updateStyle();
  }

  ngOnDestroy() {}

  private detectChanges() {
    this.cdRef.detectChanges();

    if (this.parentCdRef) {
      this.parentCdRef.detectChanges();
    }
  }

  private onWindowScroll(event: CdkScrollable) {
    const scrollInfo = onWindowScroll(event, 'top', this.previousScroll, 20);

    if (!!scrollInfo) {
      this.hostClassScrolled = scrollInfo.scrolled;
      this.previousScroll = scrollInfo.offset;
    }

    this.updateStyle();
  }

  private updateStyle() {
    if (this.hostClassScrolled) {
      this.scrollStyle.width = this.scrolledWidth;
      this.scrollStyle.height = this.scrolledHeight;
    } else {
      this.scrollStyle.width = this.initialWidth;
      this.scrollStyle.height = this.initialHeight;
    }

    this.scrolled.emit(this.hostClassScrolled);

    this.detectChanges();
  }
}
