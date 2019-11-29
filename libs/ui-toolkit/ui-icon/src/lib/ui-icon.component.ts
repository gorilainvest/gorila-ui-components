import { Component, Input } from '@angular/core';

/**
 * Displays an icon.
 */
@Component({
  selector: 'gor-ui-icon',
  templateUrl: './ui-icon.component.html',
  styleUrls: ['./ui-icon.component.scss']
})
export class UiIconComponent {

  /**
   * The color modifier for the icon path.
   */
  @Input() public set color (data: string) {
    this._color = data;
    this.updatePath();
  }

  /**
   * The icon modifier for the icon path.
   */
  @Input() public set icon (data: string) {
    this._icon = data;
    this.updatePath();
  }

  /**
   * SCSS class for the img element.
   */
  @Input() public imgClass = '';

  /**
   * Height of the img element.
   * 
   * @default 100%
   */
  @Input() public height = '100%';

  /**
   * Width of the img element.
   * 
   * @default 100%
   */
  @Input() public width = '100%';

  /**
   * Base prefix for the icon path.
   * 
   * @default /assets/img/
   */
  @Input() public pathPrefix = '/assets/img/';

  /**
   * Icon's image file format.
   * 
   * @default .svg
   */
  @Input() public imgFormat = '.svg';

  /**
   * The path for the icon's image file.
   */
  public path = '';

  /**
   * Stores data of color modifier for the icon path.
   */
  private _color = null;

  /**
   * Stores data of icon modifier for the icon path.
   */
  private _icon = '';

  /**
   * Builds the icon path.
   * Concatenates base prefix with icon modifier, color modifier and image format.
   */
  public updatePath() {
    this.path = this.pathPrefix + `${this._icon + ((!!this._color) ? '_' + this._color : '')}` + this.imgFormat;
  }

}
