import { Component, Input } from '@angular/core';

/**
 * Standardize section titles  in the Gorila App.
 */
@Component({
  selector: 'gro-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss']
})
export class SectionTitleComponent {
  /**
   * A hex value for the background color of the section title.
   */
  @Input() public bgColor = '';

  /**
   * A hex value for the color of the section title text.
   */
  @Input() public color = '';

  /**
   * The section title itself.
   */
  @Input() public title = '';

  /**
   * Empty constructor for SectionTitleComponent.
   */
  public constructor() {}
}

