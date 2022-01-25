import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'secToDay'
})
export class SecToDayPipe implements PipeTransform {

  transform(value: number): number {
    return Math.round(value / 86400);
  }

}
