import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
/**
 * Pipe for HTML sanitizer.
 */
@Pipe({ name: 'gorKeepHtml' })
export class KeepHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  public transform(content: string) {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}
