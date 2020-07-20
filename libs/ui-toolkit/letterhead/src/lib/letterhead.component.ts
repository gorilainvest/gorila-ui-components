import { ChangeDetectionStrategy, Component, HostBinding, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gor-letterhead',
  templateUrl: './letterhead.component.html',
  styleUrls: ['./letterhead.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LetterheadComponent {

  public _isPrinting = false;
  /**
   * Indicates whether to render the version for display
   *  on screen or the version for printing.
   */
  @Input() public isPrinting: boolean;

  /**
   * Applies CSS class "full-body" to component.
   */
  @HostBinding('class.full-body') @Input() public bodyFillPage: boolean;

  /**
   * List of icons to be displayed above page header.
   */
  @Input() public headerIconList: {
    name: string;
    folder: string;
    tooltipText?: string;
    tooltipOrientation?: string;
  }[] = [];

  /**
   * Identifies page in DOM.
   */
  @Input() public headerId: string;

  /**
   * The main header of the page. Can be a simple string or
   * and object containing a label and a value.
   */
  @Input() public headerRightMain: string | { label: string, value: string };

  /**
   * The subheader of the page.
   */
  @Input() public headerRightSub: string;

  /**
   * The main message in footer's left side.
   */
  @Input() public footerLeftMain: string;

  /**
   * The secondary message in footer's left side.
   */
  @Input() public footerLeftSub: string;

  /**
   * First line of footer's middle section.
   */
  @Input() public footerMiddleMain: string;

  /**
   * Second line of footer's middle section.
   */
  @Input() public footerMiddleSub: string;

  /**
   * Landing page url, displayed in footer's right section.
   */
  @Input() public landingPageUrl = '';

  /**
   * Url for print version of footer's logo.
   */
  @Input() public printLogoUrl = '';

  /**
   * Url for display version of footer's logo.
   */
  @Input() public displayLogoUrl = '';

  /**
   * The name of the icon clicked.
   */
  @Output() public iconClick = new EventEmitter<string>();

  /**
   * Emits a string containing the name of the icon clicked.
   * @param iconName the name of the icon clicked
   */
  public onIconClick(iconName: string) {
    this.iconClick.emit(iconName);
  }
}
