import { Component, Input } from '@angular/core';

/**
 * EnhancedHeaderComponent
 *
 * A header with a highlighted section.
 *
 * IMPORTANT NOTE:
 * This component was designed to work with the Lato font family.
 * If the highlight isn't working as intended, check h1's computed
 * font family for style overriding from other components.
 *
 * This happened to an unlucky Gorila once, and he spent an obscene
 * amount of time trying to figure it out. ¯\_(ツ)_/¯
 */
@Component({
  selector: 'gor-enhanced-header',
  templateUrl: './enhanced-header.component.html',
  styleUrls: ['./enhanced-header.component.scss']
})
export class EnhancedHeaderComponent {

  /**
   * Header's title. Appears in lighter font weight.
   */
  @Input() public title = '';

  /**
   * Header's highlight. Appears in normal font weight.
   */
  @Input() public highlight = '';

  /**
   * Header's main subtext.
   */
  @Input() public description = '';

  /**
   * Header's secondary subtext.
   */
  @Input() public description2 = '';

  /**
   * Header's tooltip text.
   */
  @Input() public tooltipText = '';

}
