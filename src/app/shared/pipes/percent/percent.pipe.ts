import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'percentWord'
})
export class PercentPipe implements PipeTransform {

  transform(value: any): any {
    return value + ' ' + 'درصد';
  }
}
