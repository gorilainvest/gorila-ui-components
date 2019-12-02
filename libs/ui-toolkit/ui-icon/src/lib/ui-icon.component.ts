import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

/**
 * Displays an icon.
 */
@Component({
  selector: 'gor-ui-icon',
  templateUrl: './ui-icon.component.html',
  styleUrls: ['./ui-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiIconComponent {
  /**
   * The color modifier for the icon path.
   */
  @Input() public set color(data: string) {
    this._color = data;
    this.updatePath();
  }

  /**
   * The icon modifier for the icon path.
   */
  @Input() public set icon(data: string) {
    this._icon = data;
    this.updatePath();
  }

  /**
   * Base prefix for the icon path.
   */
  @Input() public set pathPrefix(data: string) {
    this._pathPrefix = data;
    this.updatePath();
  }

  /**
   * Icon's image file format.
   *
   * @default svg
   */
  @Input() public set imgFormat(data: string) {
    this._imgFormat = data;
    this.updatePath();
  }

  /**
   * CSS class for the img element.
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
   * Stores data of path prefix for the icon path.
   *
   * @default '/assets/img/'
   */
  private _pathPrefix = '/assets/img/';

  /**
   * Stores image format for the icon path.
   *
   * @default 'svg'
   */
  private _imgFormat = 'svg';

  /**
   * Builds the icon path.
   * Concatenates base prefix with icon modifier, color modifier and image format.
   */
  public updatePath() {
    this.path = this._pathPrefix + `${this._icon + (!!this._color ? '_' + this._color : '')}.` + this._imgFormat;
  }
}
