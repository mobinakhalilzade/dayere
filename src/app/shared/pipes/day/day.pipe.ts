import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'day'
})
export class DayPipe implements PipeTransform {

  transform(value: any): any {
    return value + ' ' + 'روز';
  }

}
