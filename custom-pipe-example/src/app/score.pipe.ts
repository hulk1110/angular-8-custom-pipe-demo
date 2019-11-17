import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(others: any, arg1: any, arg2: any): any {
    const sum: any = others + 4 * arg1 + 6 * arg2;

    return sum;
  }

}
