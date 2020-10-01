import { Component, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { ShadowType } from '@gorilainvest/ui-toolkit/shadow';

/**
 * A card container for your widgets with a colored top bar (gradient).
 */
@Component({
  selector: 'gor-card-container, gro-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent implements OnChanges {
  /**
   * When false, component displays content.
   */
  @Input() public displayShadow = false;

  /**
   * Defines which type of shadow will be displayed.
   */
  @Input() public shadowType: ShadowType = ShadowType.CARD_CONTAINER;

  /**
   * When true, triggers animation in component shadow.
   */
  @Input() public loading = false;

  /**
   * Controls whether cards has border.
   */
  @HostBinding('class.enable-border') @Input() public enableBorder = true;

  /**
   * The end color of the gradient in top bar.
   */
  @Input() public colorEnd = '';

  /**
   * The initial color of the gradient in top bar.
   */
  @Input() public colorInit = '';

  /**
   * Additional css classes to card top bar.
   */
  @Input() public cssClass = '';

  /**
   * The title for the card.
   */
  @Input() public title = '';

  /**
   * The subtitle for the card.
   */
  @Input() public subtitle = '';

  /**
   * The content's title, appears on a line above the content.
   */
  @Input() public contentTitle = '';

  /**
   * Used to style the content title.
   */
  @Input() public contentTitleClass: string | string[] = null;
  @Input() public contentTitleStyle: { [cssProp: string]: string } = null;

  /**

   * Sanitized gradient background color for the top bar.
   */
  public gradientBgColor: SafeStyle;

  /**
   * Empty constructor.
   *
   * @param domDanitizer Injectable DomSanitizer instance
   * @see DomSanitizer
   */
  constructor(private domSanitizer: DomSanitizer) {}

  /**
   * Creates a new sanitized gradient color on colorEnd or colorInit change.
   */
  ngOnChanges(changes: SimpleChanges) {
    if (changes.colorEnd || changes.colorInit) {
      const lgradient = 'linear-gradient(to left, ' + this.colorInit + ', ' + this.colorEnd + ')';
      this.gradientBgColor = this.domSanitizer.bypassSecurityTrustStyle(lgradient);
    }
  }
}
