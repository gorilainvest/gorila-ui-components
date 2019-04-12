import { AfterViewInit, ElementRef, Directive, Input } from '@angular/core';

@Directive({
  selector: '[gorTruncate]'
})
export class TruncateDirective implements AfterViewInit {
  @Input() public message: string;
  @Input() public limitChars = 20;
  @Input() public trail = '...';

  private text: string;

  constructor(private el: ElementRef) {}

  public ngAfterViewInit() {
    this.transform();
  }

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

  public truncate(text: string, limit: number, trail: string): string {
    return text.length > limit ? text.substring(0, limit) + trail : text;
  }
}
