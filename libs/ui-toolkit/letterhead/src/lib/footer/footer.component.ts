import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'gor-letterhead-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LetterheadFooterComponent {
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

  public logoUrl: string;
  public _isPrinting = false;
  /**
   * Indicates whether to render the version for display
   *  on screen or the version for printing.
   */
  @Input() set isPrinting(isPrinting: boolean) {
    this._isPrinting = isPrinting;
    this.logoUrl = isPrinting ? this.printLogoUrl : this.displayLogoUrl;
  }

  /**
   * The main message in footer's left side.
   */
  @Input() public leftMain: string;

  /**
   * The secondary message in footer's left side.
   */
  @Input() public leftSub: string;

  /**
   * First line of footer's middle section.
   */
  @Input() public middleMain: string;

  /**
   * Second line of footer's middle section.
   */
  @Input() public middleSub: string;

  /**
   * Text to be displayed as footnote
   */
  @Input() public footnoteText: string;
}
