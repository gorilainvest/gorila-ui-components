import { AfterViewInit, ElementRef, Directive, Input } from '@angular/core';

/**
 * @description
 *
 * Lets a text to be truncated.
 *
 * Consider that you have a collumn in a table to display animals name that can
 * hold up to 10 characters.
 *
 * ```html
 * <tr *ngFor="let animal of animals">
 *   ...
 *   <td>{{animal.name}}</td>
 *   ...
 * </tr>
 * ```
 *
 * For 'Gorilla' is ok, but not for 'Tyrannosaurus rex', the layout will break.
 * So, using `[gorTruncate]` we can solve that problem truncating at 10th
 * character and displaying the original text within a tooltip on hover.
 *
 * ```html
 * <tr *ngFor="let animal of animals">
 *   ...
 *   <td goTruncate [limitChars]="10">{{animal.name}}</td>
 *   ...
 * </tr>
 * ```
 *
 * By default, the trail will be `...`, but you can customize like above.
 *
 * ```html
 * <tr *ngFor="let animal of animals">
 *   ...
 *   <td goTruncate [limitChars]="10" [trail]=" . . .">{{animal.name}}</td>
 *   ...
 * </tr>
 * ```
 */
@Directive({selector: '[gorTruncate]'})
export class TruncateDirective implements AfterViewInit {
  /**
   * The message itself to be truncated.
   */
  @Input() public message: string;

  /**
   * How many columns until truncate the string.
   */
  @Input() public limitChars = 20;

  /**
   * The trail to be added to truncated text.
   */
  @Input() public trail = '...';

  private text: string;

  constructor(private el: ElementRef) {}

  /**
   * TODO to be verified if is really needed
   */
  public ngAfterViewInit() {
    this.transform();
  }

  /**
   * Truncates the text if needed, and set up a tooltip within real text.
   */
  public transform() {
    this.text = this.message || this.el.nativeElement.innerHTML;

    if (!this.text) {
      this.message = this.el.nativeElement.innerHTML = '';
      return;
    }

    this.text = this.text.replace(/(^\s+|\s+$)/g, '');

    if (this.text.length > this.limitChars) {
      this.el.nativeElement.title = this.text;
    }
    this.message = this.el.nativeElement.innerHTML = this.truncate(
      this.text,
      this.limitChars,
      this.trail
    );
  }

  /**
   * Truncates the text and add trail if needed.
   */
  public truncate(text: string, limit: number, trail: string): string {
    return text.length > limit ? text.substring(0, limit) + trail : text;
  }
}
