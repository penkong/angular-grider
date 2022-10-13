import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertmile'
})
export class ConvertmilePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(value);
    console.log(args);
    return value;
  }

}
