import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gorCustom'
})
export class GorCustomPipe implements PipeTransform {
  public transform(value: string, options: any): any {
    try {
      return !!options
        ? typeof options === 'function'
          ? options(value)
          : !!options.transform
          ? options.transform(value)
          : value
        : value;
    } catch (error) {
      console.warn(error);
      return value;
    }
  }
}
