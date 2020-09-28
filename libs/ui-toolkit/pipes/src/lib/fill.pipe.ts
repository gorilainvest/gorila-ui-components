import { Pipe, PipeTransform } from '@angular/core';

/**
 * Creates an array for iteration in ngFor loops.
 * Use to create multiple HTML elements (example: gor-shadow).
 */
@Pipe({
  name: 'fill'
})
export class FillPipe implements PipeTransform {
  public transform(value: number) {
    return new Array(value);
  }
}
