import { Component, Input } from '@angular/core';

/**
 * A simple loading component that use SpinnerComponent.
 *
 * @see SpinnerComponent
 */
@Component({
  selector: 'mur-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  /**
   * Indicates if the loading must not be wrapped by a container.
   *
   * @default true
   */
  @Input() public iconOnly = true;

  /**
   * The message to be displayed below spinner.
   */
  @Input() public message: string;

  /**
   * Stop the loading if false, removing it from DOM.
   */
  @Input() public stopLoading: boolean;

  /**
   * Empty constructor.
   */
  constructor() {}
}
