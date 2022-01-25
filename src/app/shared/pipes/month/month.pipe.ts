import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'month'
})
export class MonthPipe implements PipeTransform {

  transform(value: any): any {
    return value + ' ' + 'ماه';
  }

}
