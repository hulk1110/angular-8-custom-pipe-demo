import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any, ): any {
    console.log(value);
    const currentYear = new Date().getFullYear();
    const birthYear = new Date(value).getFullYear();
    return currentYear - birthYear;
  }

}
