import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';

import { ICON_BASE_SRC } from './token';

/**
 * Displays an icon.
 */
@Component({
  selector: 'gor-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
  /**
   * The color modifier for the icon path.
   */
  @Input() public set color(data: string) {
    this.imageError = false;
    this._color = data;
    this.updatePath();
  }

  /**
   * The icon modifier for the icon path.
   */
  @Input() public set icon(data: string) {
    this.imageError = false;
    this._icon = data;
    this.updatePath();
  }

  /**
   * Secondary option for icon base URL/path.
   */
  @Input() public set secondaryBase(data: string) {
    this.imageError = false;
    this._secondaryBase = data;
    this.updatePath();
  }

  /**
   * The folder modifier for the icon path.
   */
  @Input() public set iconFolder(data: string) {
    this.imageError = false;
    this._iconFolder = data + '/';
    this.updatePath();
  }

  /**
   * Icon's image file format.
   */
  @Input() public set imgFormat(data: string) {
    this.imageError = false;
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
   *
   * @default ''
   */
  public path = '';

  /**
   * Stores data of color modifier for the icon path.
   *
   * @default null
   */
  private _color = null;

  /**
   * Stores data of icon modifier for the icon path.
   *
   * @default ''
   */
  private _icon = '';

  /**
   * Stores data of secondary path prefix for the icon path.
   *
   * @default '/assets/img/'
   */
  private _secondaryBase = '/assets/img/';

  /**
   * Stores data of folder modifier for the icon path.
   *
   * @default ''
   */
  private _iconFolder = '';

  /**
   * Stores image format for the icon path.
   *
   * @default 'svg'
   */
  private _imgFormat = 'svg';

  /**
   * Indicates if an error occurred when loading the icon
   * using the primary base URL/path for retrieving icons.
   *
   * @default false
   */
  private imageError = false;

  public constructor(
    @Inject(ICON_BASE_SRC) private iconBaseSRC: string,
  ) { }

  /**
   * Builds the icon source URL/path.
   * Concatenates base URL/path with icon folder, modifier, color modifier and image format.
   */
  public updatePath() {
    let prefix = this.imageError ? this._secondaryBase : this.iconBaseSRC;
    if (this._iconFolder) {
      prefix = prefix + this._iconFolder;
    }
    this.path = prefix + `${this._icon + (!!this._color ? '_' + this._color : '')}.` + this._imgFormat;
  }

  /**
   * Runs when image fails to load using the primary base URL/path for retrieving icons.
   * Sets image error flag and modifies image source path to secondary option.
   */
  public onImageError() {
    this.imageError = true;
    this.updatePath();
  }
}
