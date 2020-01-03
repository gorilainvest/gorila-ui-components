import { Pipe, PipeTransform } from '@angular/core';

/**
 * Transform a given string with spaces in another lowercased
 * and all spaces converted to underline ('_').
 */
@Pipe({
  name: 'cssClass'
})
export class CssClassPipe implements PipeTransform {

  /**
   *
   * @param value The string to be converted
   */
  public transform(value: string): any {
    return (value || '').toString().toLowerCase().replace(/ /g, '_');
  }

}
