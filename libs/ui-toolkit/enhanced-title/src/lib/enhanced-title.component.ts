import { Component, Input } from '@angular/core';

/**
 * The component that represent a title for a page.
 * This comment can receive child components too.
 */
@Component({
  selector: 'gro-enhanced-title',
  templateUrl: './enhanced-title.component.html',
  styleUrls: ['./enhanced-title.component.scss']
})
export class EnhancedTitleComponent {

  /**
   * The title to be displayed.
   */
  @Input() public title = '';

  /**
   * Part of the title, but highlighted with bold weight.
   */
  @Input() public highlight = '';

  /**
   * A custom css class to be aplied to the div container.
   */
  @Input() public cssClass = '';

  constructor() {}
}
