import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'amount'
})
export class AmountPipe implements PipeTransform {

  transform(input: any) {
    if (input == String) {
      return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' ' + 'ریال';

    } else {
      input = String(input);
      return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' ' + 'ریال';
    }
  }

}
